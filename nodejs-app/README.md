# 🚀 Dockerized Node.js Application

This project demonstrates how to **containerize a Node.js Express application** using Docker.  
It is part of my ongoing **DevOps learning journey**, where I practice containerizing different types of applications.

---

## 📁 Project Structure

```
nodejs-app/
├── Dockerfile
├── weather-app/              # Node.js source code (Express app)
└── README.md
```

---

## 🐳 Dockerfile Overview

```dockerfile
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
```

### 🔍 Explanation
- **Base Image** → Uses `node:20-alpine` for a lightweight container
- **WORKDIR** → App runs inside `/app/weather-app`
- **COPY + npm install** → Installs dependencies before copying full source for caching efficiency
- **EXPOSE 3000** → Makes the container accessible on port 3000
- **CMD** → Starts the Node.js server

---

## ⚙️ Build the Docker Image

```bash
docker build -t nodejs-app .
```

✅ Creates a Docker image named `nodejs-app`

---

## 🚀 Run the Container

```bash
docker run -d -p 3000:3000 --name my-node-app nodejs-app
```

✅ Maps container port 3000 → localhost:3000

---

## 🌐 Access the Application

Open your browser and visit:

```
http://localhost:3000
```

If the Express app returns a response, the container is working ✅

---

## 📸 Screenshot – Weather App Running in Docker

Below is a screenshot of the Weather App running successfully on **port 3000**:

<img width="1270" height="752" alt="weather-app" src="https://github.com/user-attachments/assets/006abf90-026f-4983-9fc3-8796e780bd71" />


✅ This confirms that:
- Docker image built successfully  
- Container started without errors  
- Port mapping (3000:3000) is working  
- Application is accessible in browser  

---

## 📦 Logs & Debugging

```bash
docker logs my-node-app
```

---

## 🧹 Stop & Remove Container

```bash
docker stop my-node-app
docker rm my-node-app
```

---

## 💡 Learning Focus

- Containerizing Node.js apps with Docker
- Installing dependencies inside containers
- Exposing ports for web applications
- Extending multi-language Docker repo

---

## 🧭 Next Step (Planned)

- Add `docker-compose` for Node.js + Database
- Push image to Docker Hub
- Deploy to Kubernetes (Minikube)

---

**Author:** Himanshu Kumar  
**Repository:** https://github.com/H1manshu-Kumar/docker
