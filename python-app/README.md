# 🐍 Dockerized Python Flask Application

This project demonstrates how to **containerize a Python Flask web application** using Docker.  
It is part of my ongoing **DevOps learning journey**, where I practice Docker with different types of applications.

---

## 📁 Project Structure

```
python-app/
├── Dockerfile
├── app/                # Flask application source code
└── README.md
```

---

## 🐳 Dockerfile Overview

The Dockerfile defines how to package the Flask application into a container.

```dockerfile
# Base image
FROM python:3.10-slim

# Set working directory inside the container
WORKDIR /app

# Copy project files into container
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose port for Flask
EXPOSE 5000

# Command to run the app
CMD ["python", "app.py"]
```

### 🔍 Explanation
- **Base Image** → Uses lightweight `python:3.10-slim`
- **WORKDIR** → Sets container working directory
- **COPY** → Copies project files into container
- **Install deps** → Installs Python modules from `requirements.txt`
- **EXPOSE** → Makes Flask port accessible externally
- **CMD** → Default command to run the Flask application

---

## ⚙️ Build the Docker Image

```bash
docker build -t flask-app .
```

✅ This creates a Docker image named `flask-app`.

---

## 🚀 Run the Container

```bash
docker run -d -p 5000:5000 --name my-flask-app flask-app
```

✅ Runs the container and maps Flask app to `localhost:5000`

---

## 🌐 Access the Application

Open your browser and visit:

```
http://localhost:5000
```

---

## 📦 Logs & Debugging

To see application logs:

```bash
docker logs my-flask-app
```

---

## 🧹 Stop & Remove Container

```bash
docker stop my-flask-app
docker rm my-flask-app
```

---

## 💡 Learning Focus

- Containerizing a Python Flask application
- Managing dependencies with `requirements.txt`
- Exposing ports and running a web app in Docker
- Preparing for multi-container architecture (Python + DB)

---

## 🧭 Next Step (Planned)

Next, I will:

- Dockerize a **Python API with a database (PostgreSQL)**
- Add Docker Compose for multi-container setup
- Push image to Docker Hub

---

**Author:** Himanshu Kumar  
**Repository:** https://github.com/H1manshu-Kumar/docker
