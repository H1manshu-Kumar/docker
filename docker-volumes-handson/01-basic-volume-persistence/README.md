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

---

## 🧪 Hands-On Steps
### 🔹 Step 0: Pull Lightweight Alpine Image & Run Interactive Container

Before working with volumes, pull a **lightweight Alpine image** and verify Docker is working correctly.

**Pull the image:**
```bash
docker pull alpine:latest
```
<img width="806" height="97" alt="image" src="https://github.com/user-attachments/assets/b2ed2f80-1c51-4f17-a294-fcf6e023010e" /> <br>

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
<img width="320" height="22" alt="image" src="https://github.com/user-attachments/assets/77b806d1-2e3e-4c3d-a738-27fee1c1e452" /> <br>

<img width="633" height="212" alt="image" src="https://github.com/user-attachments/assets/9e44a728-b220-4d36-ba39-62fa679cd163" />

### 🔹 Step 2: Run a Container with the Volume Mounted
```bash
docker run -itd -v app_data:/data --name=volume-test alpine:latest
```

<img width="957" height="41" alt="image" src="https://github.com/user-attachments/assets/ee300be8-2c3d-443d-8161-6859c6420ed3" />

**Explanation:**
- **app_data** → Docker-managed volume
- **/data** → Mount point inside the container

### 🔹 Step 3: Write Data Inside the Container
**Inside the container shell:**
```bash
echo "Docker Volumes provide persistence" > /data/info.txt
cat /data/info.txt
```

<img width="349" height="42" alt="image" src="https://github.com/user-attachments/assets/08aa36b9-724e-4efb-9f49-677e4f9fb5ad" />

**Exit the container:**
```bash
exit
```
### 🔹 Step 4: Stop and Remove the Container
```bash
docker stop volume-test && docker rm volume-test
```

<img width="705" height="20" alt="image" src="https://github.com/user-attachments/assets/6de33866-fbaa-4694-b5df-0ff6bec144d6" />

**At this point:**
- ❌ Container is deleted
- ✅ Volume still exists

### 🔹 Step 5: Verify Data Persistence
**Run a new container using the same volume:**
```bash
docker run -itd -v app_data:/data --name=volume-test-data-persist alpine:latest 
```

<img width="1086" height="43" alt="image" src="https://github.com/user-attachments/assets/fb0f82d5-6e23-48b4-97f6-b212e14ef710" /> <br>

<img width="350" height="43" alt="image" src="https://github.com/user-attachments/assets/ad1322d5-b8f3-429c-8665-1474178167c4" />

**✅ Output confirms the data still exists.**

## 📊 Observations
- Container deletion does not affect volume data
- Volumes are managed by Docker
- Volumes persist until explicitly removed
- Containers are stateless by design
- State must be externalized using volumes
- Databases, logs, uploads, and configs must use persistent storage

**🌟 This is why production databases should never store data inside container layers.**
