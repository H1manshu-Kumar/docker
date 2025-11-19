# 🌦️ Weather App – Distroless Multi‑Stage Dockerized Node.js Application

This project demonstrates how to **containerize a Node.js Express Weather App** using a **multi‑stage Dockerfile** and a **Distroless runtime image**.  
It is part of my ongoing **DevOps learning journey**, where I practice secure and production‑grade containerization.

---

## 📁 Project Structure

```
nodejs-app/
├── Dockerfile
├── Dockerfile-multi-stage-distroless
├── weather-app/              # Node.js source code (Express app)
└── README.md
```

---

# 🐳 Multi‑Stage Distroless Dockerfile

Below is the updated Dockerfile using **Node 20 Alpine** for build and **Distroless** for runtime:

```dockerfile
# Distroless multi-stage Dockerfile for Node.js Weather App
# - Stage 1 (build): Install dependencies and prepare app
# - Stage 2 (runtime): Use secure, minimal Distroless image to run the app

# STAGE 1 - Build
# Use lightweight Node.js 20 Alpine image for building the app (includes Node & npm)
FROM node:20-alpine AS build

# Set working directory where app files will be stored in the build container
WORKDIR /workspace

# Copy package.json and package-lock.json first to leverage Docker layer caching
# This way, dependencies are only re-installed if these files change
COPY weather-app/package*.json ./

# Install Node.js dependencies defined in package.json
RUN npm install

# Copy the rest of the application source code into the build container
COPY weather-app/ ./

# STAGE 2 - Runtime (Distroless)
# Use Distroless Node.js 20 image (Debian 12 based) for a minimal, secure runtime
# - No shell, no package manager, very small attack surface
FROM gcr.io/distroless/nodejs20-debian12 AS runtime

# Set working directory for the running application inside the runtime container
WORKDIR /app

# Copy the fully prepared app (code + node_modules) from the build stage into /app
COPY --from=build /workspace /app

# Document that the app listens on port 3000
EXPOSE 3000

# Define the startup command for the container
# Distroless image already has Node as the entrypoint, so we just pass the app entry file
CMD ["app.js"]
```

---

# 🔍 Explanation of Dockerfile

### **Build Stage**
- **Base Image** → Uses `node:20-alpine` for a lightweight, fast build environment  
- **WORKDIR** → All operations run inside `/workspace`  
- **COPY package*.json** → Improves caching; dependencies install only when package files change  
- **npm install** → Installs all dependencies needed by the app  
- **COPY source code** → Copies complete weather app into the build container  

### **Runtime Stage (Distroless)**
- **Base Image** → Uses `distroless/nodejs20-debian12` for a secure, minimal runtime  
- **No Shell** → Distroless removes bash/sh → better security  
- **WORKDIR** → App runs inside `/app`  
- **COPY from build** → Includes app + dependencies from Stage 1  
- **EXPOSE 3000** → Container listens on port 3000  
- **CMD ["app.js"]** → Starts the Node.js server (Node is already included in Distroless image)

---

## 🔍 Key Advantages of Multi‑Stage Distroless Setup

- **Minimal, secure production image**
- **Smaller attack surface** (no shell, no package manager)
- **Reduced image size**
- **Improved layer caching**
- **Faster, safer deployment**

---

## ⚙️ Build the Docker Image

```bash
docker build -t weather-app-distroless .
```

---

## 🚀 Run the Container

```bash
docker run -d -p 3000:3000 --name weather-app weather-app-distroless
```

---

## 🌐 Access the Application

Open your browser:

```
http://localhost:3000
```

---

## 📸 Screenshot – Weather App Running in Docker

<img width="1270" height="752" alt="weather-app" src="https://github.com/user-attachments/assets/006abf90-026f-4983-9fc3-8796e780bd71" />

✅ This confirms that:
- Docker image built successfully  
- Container started without errors  
- Port mapping (3000:3000) is working  
- Application is accessible in browser 
---

## 📦 Logs & Debugging

```bash
docker logs weather-app
```

---

## 🧹 Stop & Remove

```bash
docker stop weather-app
docker rm weather-app
```

---

## 💡 Learning Focus

- Distroless container security  
- Multi‑stage Docker builds  
- Optimizing Node.js production images  

---

## 🧭 Next Steps

- Add Docker Compose  
- Push image to Docker Hub  
- Deploy to Kubernetes  

---

**Author:** Himanshu Kumar  
**Repository:** https://github.com/H1manshu-Kumar/docker
