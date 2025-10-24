#Base Image; Syntax = FROM <ImageName>:<TagName>
FROM openjdk:17-jdk-apline

#Working directory for the app
WORKDIR /app 

#Code for app
COPY /home/superuser/Work/DevOps_Training_TWS/docker_fundamental/java-quotes-app/src/Main/java /app/Main.java

COPY /home/superuser/Work/DevOps_Training_TWS/docker_fundamental/java-quotes-app/quotes.txt /app/quotes.txt


