# 🎮 Tic-Tac-Toe (Dockerized - Multi-stage + Distroless)

A simple Tic-Tac-Toe web game packaged with a **multi-stage Dockerfile** and a **distroless** final image for a minimal, secure container. This project demonstrates how to serve a static Tic-Tac-Toe web application using NGINX in Docker.

---

## ✅ What’s included
- The Tic-Tac-Toe app source already in the repo.
- `Dockerfile-multi-stage-distroless` - builds the app in a builder stage and produces a tiny distroless final image.
- Helpful instructions to build, run, and debug the container.

---
## 📁 Project Structure

```
├── Dockerfile
├── Dockerfile-multi-stage-distroless
├── Server.js
├── README.md
└── tic-tac-toe-app
    ├── index.html
    ├── script.js
    └── style.css
```
## 🐳 Dockerfile Overview
```dockerfile
# Stage 1: Build stage using Node.js Alpine image
FROM node:alpine AS build

# Set working directory for build stage
WORKDIR /workspace

# Copy server file to workspace
COPY server.js /workspace
# Copy static web app files to workspace
COPY tic-tac-toe-app/ /workspace/tic-tac-toe-app/

# Stage 2: Production stage using distroless image
FROM gcr.io/distroless/nodejs20-debian12

# Set working directory for production
WORKDIR /app

# Copy server file from build stage to production
COPY --from=build /workspace/server.js /app
# Copy static app files from build stage to production
COPY --from=build /workspace/tic-tac-toe-app/ /app/tic-tac-toe-app/

# Expose port 8080 for the Node.js server
EXPOSE 8080

# Run the server (distroless uses exec form)
CMD ["server.js"]
```

## Dockerfile (high-level explanation)

- **Base Image (builder)** → Uses a full image (e.g., `node`) to build the app and install dependencies.
- **WORKDIR** → Sets the working directory inside the builder stage.
- **COPY** → Copies source code and files into the builder.
- **Multi-stage COPY** → Copies only the production artifacts (build output) into the final image.
- **Final Image (distroless)** → Uses a distroless image (e.g., `gcr.io/distroless/nodejs20-debian12`) - tiny and secure with no shell.
- **EXPOSE** → Document the port the app listens on (note: distroless images do not require `EXPOSE` to run, but it's useful for documentation).
- **CMD** → Launches the app using the production binary/static files.
---

## ⚙️ Build the Docker image
```bash
docker build -t tic-tac-toe:latest -f Dockerfile-multi-stage-distroless .
```
✅ Creates Docker image named `tic-tac-toe`

---

## 📤 Docker image published to Docker Hub
The production-ready **multistage distroless tic-tac-toe game** has been successfully built and pushed to Docker Hub.

🐳 Docker Hub Image

```bash
docker push himan5hu/tic-tac-toe-game-multistage-distroless
```

🔗 Docker Hub Repository: 

https://hub.docker.com/repository/docker/himan5hu/tic-tac-toe-game-multistage-distroless

---

## 🚀 Run the Container 🚀

```bash
docker run -d -p 8080:8080 --name tic-tac-toe-container tic-tac-toe
```
✅ The game is now live at:
```
http://localhost:8080
```
---
## 📸 Screenshot
<img width="872" height="753" alt="Tic-tac-toe-game" src="https://github.com/user-attachments/assets/c26a4daa-cc8f-4a7a-8410-3c4600c4f761" />

✅ Confirms successful container execution
---
## 🧹 Stop & Remove Container

```bash
docker stop tic-tac-toe-container
docker rm tic-tac-toe-container
```
---

## Contributing
1. Fork the repo
2. Create a branch: `git checkout -b feat/docker-distroless`
3. Make changes, commit, and open a PR.

---
## License & Contact

- Maintainer: **Himanshu Kumar**
- Repo: `https://github.com/H1manshu-Kumar/docker`
---
