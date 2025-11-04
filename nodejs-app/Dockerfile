#Base Image
FROM node:20-alpine

#Set Working Dir
WORKDIR /app/weather-app

#Copy packages file 
COPY /weather-app/package*.json ./

#Install dependency
RUN npm install 

# Copy source code
COPY weather-app/ .

#EXPOSE 
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]


