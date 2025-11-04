# 🚀 Dockerized Node.js Application

This project demonstrates how to **containerize a Node.js Express application** using Docker.  
It is part of my ongoing **DevOps learning journey**, where I practice containerizing different types of applications.

---

## 📁 Project Structure

```
nodejs-app/
├── Dockerfile
├── app/              # Node.js source code (Express app)
└── README.md
```

---

## 🐳 Dockerfile Overview

```dockerfile
# Use official lightweight Node image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD ["node", "app/app.js"]
```

### 🔍 Explanation
- **Base Image** → Uses `node:18-alpine` for a lightweight container
- **WORKDIR** → App runs inside `/app`
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
