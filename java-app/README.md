# ☕ Dockerized Java Application (Multi-Stage + Distroless)

This project demonstrates how to **containerize a Java application** using a **multi-stage build with Distroless runtime**, a production-grade approach for secure and minimal Docker images.

This is part of my ongoing **DevOps learning journey**, where I practice Docker with different kinds of applications, including Java, Node.js, Python, and more.

---

## 📁 Project Structure

```
java-app/
├── Dockerfile                    # Dockerfile
├── Dockerfile                    # Distroless multi-stage Dockerfile
├── src/                          # Java source code
├── pom.xml                       # Maven project config
└── README.md
```

---

## 🐳 Dockerfile (Multi-Stage + Distroless)

```dockerfile
###############
# STAGE 1     #
# Build Stage #
###############
# Use Maven with Eclipse Temurin JDK 21 on Alpine — lightweight for building Java apps
FROM maven:3.9-eclipse-temurin-21-alpine AS build

# Set working directory inside the builder container
WORKDIR /workspace

# Copy dependency descriptor first for better layer caching
COPY pom.xml ./

# Copy application source code
COPY src ./src

# Build the application and create the JAR file
RUN mvn clean package

###############
# -  STAGE 2  #
# Runtime Stage (Distroless) #
###############
# Use Distroless Java 21 runtime for maximum security (no shell, minimal OS)
FROM gcr.io/distroless/java21-debian12

# Application directory in the runtime container
WORKDIR /app

# Copy the packaged JAR from the build stage
COPY --from=build /workspace/target/java-app-1.0.0.jar /app/app.jar

# Expose port for the running application
EXPOSE 8000

# Run the application using Distroless entrypoint style
CMD ["app.jar"]
```

---

## 🔍 Explanation of Multi-Stage Distroless Approach

### **Stage 1 → Maven Build**
✔ Uses `maven:3.9-eclipse-temurin-21-alpine`  
✔ Compiles source code  
✔ Produces optimized JAR (`java-app-1.0.0.jar`)  
✔ Better caching due to separate `pom.xml` copy  

### **Stage 2 → Distroless Java Runtime**
✔ Based on `gcr.io/distroless/java21-debian12`  
✔ No shell, no package manager → **highly secure**  
✔ Extremely lightweight production image  
✔ Only the required Java runtime is included  

---

## ⚙️ Build the Image (Distroless Multi-Stage)

Run this from the project root:

```bash
docker build -t java-app:distroless .
```

---

## 🚀 Run the Container

```bash
docker run -d -p 8000:8000 --name my-java-app java-app:distroless
```

### Verify:
```bash
docker ps
```

---

## 📦 View Logs / Output

```bash
docker logs my-java-app
```

---

## 🧹 Stop & Remove the Container

```bash
docker stop my-java-app
docker rm my-java-app
```

---

## 💡 Learning Focus

- Understanding multi-stage builds  
- Using Distroless images for production-grade security  
- Optimizing Docker image size  
- Managing Java builds using Maven + Docker  
- Following real DevOps practices  

---

## 🧭 Next Steps

- Add **docker-compose** support  
- Add CI/CD to build Java images automatically  
- Push images to Docker Hub / GitHub Container Registry  

---

**Author:** Himanshu Kumar  
**Repository:** https://github.com/H1manshu-Kumar/docker
