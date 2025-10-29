# ☕ Dockerized Java Application

This project demonstrates how to **containerize a simple Java application** using Docker.  
It’s part of my ongoing **DevOps learning journey**, where I practice Docker with different types of applications.

---

## 📁 Project Structure

```
java-app/
├── Dockerfile
├── app/                # Contains Java source code / compiled JAR
└── README.md
```

---

## 🐳 Dockerfile Overview

The Dockerfile defines how to package the Java application into a container.

```dockerfile
# Base image
FROM openjdk:17-jdk-alpine

# Working directory inside container
WORKDIR /app

# Copy application files into container
COPY src/Main.java /app/Main.java
```

### 🔍 Explanation
- **Base Image** → Uses lightweight `openjdk:17-jdk-alpine`  
- **WORKDIR** → Sets `/app` as the working directory  
- **COPY** → Copies your local Java app files into the container  

---

## ⚙️ Build the Image

Run this command from the project root:

```bash
docker build -t java-app .
```

✅ This creates a Docker image named `java-app`.

---

## 🚀 Run the Container

```bash
docker run -d -p 8000:8000 --name my-java-app java-app:latest
```

### To verify it’s running:
```bash
docker ps
```

---

## 📦 Access Logs or Output

If your Java application prints output to console:
```bash
docker logs my-java-app
```

---

## 🧹 Stop and Remove Container

```bash
docker stop my-java-app
docker rm my-java-app
```

---

## 💡 Learning Focus

- Understanding how Docker layers work  
- Writing a simple Dockerfile for Java  
- Building and running containers locally  
- Preparing base for multi-stage builds (coming next)  

---

## 🧭 Next Step (Planned)

Next, I’ll extend this by:
- Creating a **multi-stage Docker build** for optimized Java images  
- Adding **docker-compose** for multi-container setup (e.g., Java + DB)

---

**Author:** [Himanshu Kumar](https://github.com/H1manshu-Kumar)  
**Repository:** [Docker Learning Playground](https://github.com/H1manshu-Kumar/docker)
