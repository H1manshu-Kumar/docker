
# 🐳 Docker Learning Playground

Welcome to my **Docker Learning Repository** - a hands-on journey exploring containerization with real-world projects.  
This repo now includes **Distroless + Multi-Stage Dockerfiles** for all applications, making them more secure, lightweight, and production-ready. 🚀

Perfect for learners 👨‍💻 and a portfolio-ready showcase for the world 🌍.

---

## ✅ Status & Badges

![GitHub Repo stars](https://img.shields.io/github/stars/H1manshu-Kumar/docker?style=flat)
![Docker](https://img.shields.io/badge/Docker-Learning-blue?logo=docker)
![Security](https://img.shields.io/badge/Distroless-Secure-green)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-orange)

---

## 📂 Repository Structure

| Folder | Description | Tech | Dockerfile Type |
|--------|-------------|------|------------------|
| [`java-app`](./java-app) | Java Application | Java · Maven | **Distroless · Multi-Stage** |
| [`python-app`](./python-app) | Flask API App | Python · Flask | **Distroless · Multi-Stage** |
| [`nodejs-app`](./nodejs-app) | Weather App | Node.js · Express | **Distroless · Multi-Stage** |
| [`tic-tac-toe-nginx`](./tic-tac-toe-nginx) | NGINX Static Game | HTML · JS · NGINX | **Multi-Stage Build** |
| _More coming soon..._ | Compose setups, Databases, Kubernetes | 🚧 | — |

---

## 🔥 What’s New? (Distroless Upgrades)

Every application in this repo now uses:

### ✔ **Multi-Stage Builds**
- Compile/build in Stage 1  
- Run minimal secure images in Stage 2  
- Smaller and faster images  

### ✔ **Distroless Runtime Images**
- No shell  
- No package manager  
- Extremely secure minimal image  
- Perfect for production  

### ✔ **Best Practices Applied**
- Cached layer optimization  
- Separated build & runtime  
- Security-first containerization  

---

## 🎯 What I’ve Learned So Far

- Building multi-stage Dockerfiles  
- Using **Distroless images** for secure runtime  
- Container lifecycle management  
- Dockerizing multiple technology stacks  
- Serving frontend & backend apps in containers  
- Using minimal base images for efficiency  
- Optimizing images using caching & layering  

---

## 🛠 Common Commands I Use

```bash
docker build -t app-name .
docker run -d -p host:container app-name
docker ps -a
docker logs container-name
docker stop container-name
docker rm container-name
```

---

## 🚀 Roadmap (Next Steps)

| Goal | Status |
|------|--------|
| Convert all apps to multi-stage | ✅ Completed |
| Convert all apps to Distroless | ✅ Completed |
| Docker Compose stack | 🔜 Planned |
| Push images to Docker Hub | 🔜 Planned |
| Add Database containers (MySQL/Redis) | 🔜 Planned |
| Kubernetes deployment | 🔜 Upcoming |
| GitHub Actions CI for builds | 🔜 Upcoming |

---

## 🧠 Learning Focus

- Modern DevOps Docker practices  
- Secure image building (Distroless)  
- Real-world microservice containerization  
- Container networking + multi-app workflows  
- Building a solid DevOps portfolio  

---

## 👨‍💻 Author

**Himanshu Kumar** - Building, Containerizing, and Deploying One Step at a Time 🚀  

🔗 GitHub: https://github.com/H1manshu-Kumar  
🔗 LinkedIn: https://www.linkedin.com/in/h1manshu-kumar  

---

⭐ **If you find this repo helpful, please give it a star — learning in public!**
