# 🎮 Tic-Tac-Toe Game (Docker + NGINX)

This project demonstrates how to serve a **static Tic-Tac-Toe web application** using **NGINX in Docker**.  
It is part of my ongoing **DevOps learning journey**, where I containerize different types of applications.

---

## 📁 Project Structure

```
├── Dockerfile
├── README.md
└── tic-tac-toe-app
    ├── index.html
    ├── script.js
    └── style.css
```

---

## 🐳 Dockerfile Overview

```dockerfile
# Use lightweight NGINX image
FROM nginx:alpine

# Copy static game files to NGINX web directory
COPY tic-tac-toe-app/ /usr/share/nginx/html

# Expose default NGINX port
EXPOSE 80
```

### 🔍 Explanation
- **Base Image** → Uses `nginx:alpine` (small + fast)
- **COPY** → Places HTML/CSS/JS inside NGINX web root
- **EXPOSE 80** → Makes the UI accessible via HTTP

---

## ⚙️ Build the Docker Image

```bash
docker build -t tic-tac-toe .
```

✅ Creates Docker image named `tic-tac-toe`

---

## 🚀 Run the Container

```bash
docker run -d -p 8000:80 --name tic-tac-toe-container tic-tac-toe
```

✅ The game is now live at:

```
http://localhost:8000
```

---

## 📸 Screenshot

<img width="838" height="750" alt="tic-tac-toe-game" src="https://github.com/user-attachments/assets/24d0d87a-ec12-4aa8-83c2-af79621af54b" />

✅ Confirms successful container execution

---

## 🧹 Stop & Remove Container

```bash
docker stop tic-tac-toe-container
docker rm tic-tac-toe-container
```

---

## 💡 Learning Focus

- Serving static frontend apps in Docker
- Using NGINX as a web server
- Working with lightweight Alpine images
- Port mapping & container lifecycle

---

## 🧭 Next Step (Planned)

- Add backend (Node/Python) to store game scores
- Use Docker Compose (frontend + backend)
- Deploy to Kubernetes

---

**Author:** Himanshu Kumar  
**Repository:** https://github.com/H1manshu-Kumar/docker
