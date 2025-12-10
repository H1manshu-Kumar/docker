# 🐍 Python App - Dockerized (Multi-Stage + Distroless)
---

## 🚀 Overview
This application is fully containerized using a **multi-stage Dockerfile** and a **Distroless Python runtime** to achieve:

- Minimal + secure image  
- Faster build times  
- Reduced vulnerabilities  
- Non-root runtime  
- Production-grade containerization  

It is part of my **DevOps Learning Journey** covering Docker fundamentals → multi-stage builds → distroless images → CI/CD.

---
## 📦 Dockerfile: Multi-Stage + Distroless

The Dockerfile defines how to package the Flask application into a container.

```dockerfile
# -----------------------------
# STAGE 1 - BUILD STAGE
# Using Python 3.10 slim image to install dependencies.
# This stage includes a minimal Linux distribution
# only to build and package Python dependencies.
# -----------------------------
FROM python:3.10-slim AS build

# Set working directory where the build process will run
WORKDIR /workspace

# Copy all project files (app.py, requirements.txt, etc.)
COPY . .

# Install Python dependencies into a separate folder inside the image.
# --target installs packages into /workspace/deps
# These dependencies will later be copied into the final distroless image.
RUN pip install -r requirements.txt --target=/workspace/deps

# -----------------------------
# STAGE 2 - RUNTIME STAGE (DISTROLESS)
# This stage uses a Distroless Python image.
# It contains:
#   - No shell
#   - No package manager
#   - No OS utilities
# Only Python runtime + required libs → highly secure & minimal
# -----------------------------
FROM gcr.io/distroless/python3-debian12

# Final work directory inside the container
WORKDIR /app

# Copy installed dependencies from the build stage
COPY --from=build /workspace/deps /app/deps

# Copy application code from build stage to /app
COPY --from=build /workspace .

# Configure PYTHONPATH so Python can locate dependencies in /app/deps
ENV PYTHONPATH="/app/deps"

# Expose the application port (optional, for documentation purposes)
EXPOSE 5000

# Distroless requires ENTRYPOINT/CMD in exec form.
# Running the Python application.
CMD ["app.py"]

```

## 🔍 Explanation
### Stage 1 - Build Stage
- **Base Image (Build Stage)** → Uses lightweight `python:3.10-slim` to install dependencies
- **WORKDIR** → Sets container working directory `/workspace`
- **COPY** → Copies project files into container
- **Install deps** → Installs Python dependencies into `/workspace/deps` (for later reuse) 
### Stage 2 - Runtime (Distroless)
- **Base Image (Runtime)** → Uses `gcr.io/distroless/python3-debian12` (no shell, secure, minimal)
- **WORKDIR** → Sets runtime directory `/app`
- **COPY deps** → Copies installed dependencies from build stage
- **COPY code** → Copies application source code into runtime image
- **ENV PYTHONPATH** → Allows Python to locate dependencies inside `/app/deps`
- **EXPOSE** → Documents that the app runs on port `5000`
- CMD → Runs the app using distroless exec form `(["app.py"])`
---

### **Build the image**
```bash
docker build -t python-app:distroless .
```

### **Run the container**
```bash
docker run -p 5000:5000 python-app:distroless
```

### **Why Distroless?**
- No shell or package manager → extremely small  
- Lower surface for attacks  
- Enforces secure `nonroot` execution  
- Ideal for production workloads  


## 🧪 Local Development
Install dependencies:
```bash
pip install -r requirements.txt
```

Run app locally:
```bash
python app.py
```

## 🎯 Next Steps (Planned)
- Add Docker Compose for multi-container setup
- Push image to Docker Hub
- Add Kubernetes deployment manifests  
- Include health checks and docker-compose  

---

## 🤝 Contributing
Feel free to open issues or PRs as I continue my DevOps journey!

---

## ⭐ Support
If you find this helpful, consider starring the repository!

---

**Author:** Himanshu Kumar  
**Repository:** https://github.com/H1manshu-Kumar/docker
