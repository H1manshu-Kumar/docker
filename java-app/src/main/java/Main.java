package com.example;

import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.io.OutputStream;
import java.io.InputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Main {
    private static List<String> quotes;
    
    public static void main(String[] args) throws IOException {
        quotes = loadQuotesFromResource();
        
        if (quotes.isEmpty()) {
            System.err.println("No quotes found");
            return;
        }
        
        HttpServer server = HttpServer.create(new InetSocketAddress(8000), 0);
        server.createContext("/", exchange -> {
            String quote = getRandomQuote();
            String jsonResponse = String.format("{\"quote\": \"%s\"}", quote);
            byte[] responseBytes = jsonResponse.getBytes(StandardCharsets.UTF_8);
            
            exchange.getResponseHeaders().set("Content-Type", "application/json");
            exchange.sendResponseHeaders(200, responseBytes.length);
            
            try (OutputStream os = exchange.getResponseBody()) {
                os.write(responseBytes);
            }
        });
        
        server.start();
        System.out.println("Server running on port 8000");
    }
    
    private static String getRandomQuote() {
        return quotes.get(new Random().nextInt(quotes.size()));
    }
    
    private static List<String> loadQuotesFromResource() {
        try (InputStream is = Main.class.getResourceAsStream("/quotes.txt");
             Scanner scanner = new Scanner(is, StandardCharsets.UTF_8)) {
            return scanner.useDelimiter("\\A").hasNext() ? 
                List.of(scanner.next().split("\\n")) : List.of();
        } catch (Exception e) {
            System.err.println("Error loading quotes: " + e.getMessage());
            return List.of();
        }
    }
}
