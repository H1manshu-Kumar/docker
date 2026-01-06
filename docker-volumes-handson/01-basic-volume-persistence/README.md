# LAB 01 - Basic Volume Persistence

## 📌 Overview

This lab demonstrates one of the **most fundamental concepts in Docker storage**:  
👉 **Containers are ephemeral, volumes are persistent.**

This lab helped me clearly understand **why application data should never be stored inside a container filesystem** and how Docker Volumes solve this problem.

---

## 🎯 Objective

- Pull a lightweight Docker image
- Run an interactive container
- Create a Docker volume
- Mount the volume to a container
- Write data inside the container
- Delete the container
- Verify that the data still exists

This proves that **Docker volumes live independently of containers**.

---

## 🧠 Key Concept

> Containers can be deleted, recreated, or upgraded at any time.  
> Volumes ensure that **data survives these changes**.

---

## 🛠️ Prerequisites

- Docker installed
- Basic understanding of Docker containers
- Terminal / CLI access

---

## 🧪 Hands-On Steps
### 🔹 Step 0: Pull Lightweight Alpine Image & Run Interactive Container

Before working with volumes, pull a **lightweight Alpine image** and verify Docker is working correctly.

**Pull the image:**
```bash
docker pull alpine:latest
```
<img width="806" height="97" alt="image" src="https://github.com/user-attachments/assets/b2ed2f80-1c51-4f17-a294-fcf6e023010e" />

**Run an interactive container:**
```bash
docker run -it alpine:latest sh
```
<img width="1168" height="41" alt="image" src="https://github.com/user-attachments/assets/8f5fea8c-c07f-4be5-a64d-b412f9f61978" />

### 🔹 Step 1: Create a Docker Volume

```bash
docker volume create app_data
```
**Verify volume creation:**
```bash
docker volume ls
```
### 🔹 Step 2: Run a Container with the Volume Mounted
```bash
docker run -it \
  --name volume-test \
  -v app_data:/data \
  alpine sh
```
**Explanation:**
- **app_data** → Docker-managed volume
- **/data** → Mount point inside the container

### 🔹 Step 3: Write Data Inside the Container
**Inside the container shell:**
```bash
echo "Docker Volumes provide persistence" > /data/info.txt
cat /data/info.txt
```
**Exit the container:**
```bash
exit
```
### 🔹 Step 4: Stop and Remove the Container
```bash
docker stop volume-test && docker rm volume-test
```
**At this point:**
- ❌ Container is deleted
- ✅ Volume still exists

### 🔹 Step 5: Verify Data Persistence
**Run a new container using the same volume:**
```bash
docker run --rm \
  -v app_data:/data \
  alpine cat /data/info.txt
```
**✅ Output confirms the data still exists.**

## 📊 Observations
- Container deletion does not affect volume data
- Volumes are managed by Docker
- Volumes persist until explicitly removed
- Containers are stateless by design
- State must be externalized using volumes
- Databases, logs, uploads, and configs must use persistent storage

**🌟 This is why production databases should never store data inside container layers.**
