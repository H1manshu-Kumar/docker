#Base Image; Syntax = FROM <ImageName>:<TagName>
FROM openjdk:17-jdk-alpine

#Working directory for the app
WORKDIR /app 

#Code for app
COPY /home/superuser/Work/DevOps_Training_TWS/docker_fundamental/java-quotes-app/src/Main/java /app/Main.java

COPY /home/superuser/Work/DevOps_Training_TWS/docker_fundamental/java-quotes-app/quotes.txt /app/quotes.txt

# Run the command to install libs or to compile code
RUN javac Main.java

#Expose the port
EXPOSE 8000

# Serve the app / Keep it running
CMD ["java","Main"]

