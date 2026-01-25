# LAB 03 – Docker Volume with Database (MySQL)

## 📌 Overview

This lab demonstrates how **Docker volumes are used with real-world stateful applications**, using **MySQL** as an example.

Databases are a classic case where **data persistence is mandatory**.  
This lab clearly shows how Docker volumes allow database data to **survive container deletion and recreation**, which is a core responsibility of a DevOps engineer.

This lab also serves as a **direct foundation for Kubernetes Persistent Volumes (PV/PVC)**.

---

## 🎯 Objective

- Run a MySQL container
- Attach a Docker volume to persist database data
- Delete and recreate the container
- Verify that database data is retained

---

## 🧠 Key Concept

> Containers are ephemeral, but databases must be persistent.  
> Docker volumes bridge this gap by externalizing state.

---

## 🛠️ Prerequisites

- Docker installed
- Basic understanding of Docker containers
- Knowledge of Docker volumes (LAB 01 & LAB 02)

---

## 🧪 Hands-On Steps

---

## 🔹 Step 0: Pull MySQL Image

```bash
docker pull mysql:8
```
**This pulls the official MySQL image from Docker Hub.**

## 🔹 Step 1: Create a Docker Volume for MySQL Data
```bash
docker volume create mysql_data
```

**Verify:**
```bash
docker volume ls
```

## 🔹 Step 2: Run MySQL Container with Volume Attached
```bash
docker run -d --name mysql-volume-demo -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=devopsdb -v mysql_data:/var/lib/mysql mysql:8
```

**Explanation:**
- **mysql_data** - Docker-managed persistent volume
- **/var/lib/mysql** - Default MySQL data directory
- Environment variables initialize the database

## 🔹 Step 3: Verify Database Creation
```bash
docker exec -it mysql-volume-demo mysql -uroot -proot
```

**Inside MySQL shell:**

```bash
SHOW DATABASES;
```
**Confirm devopsdb exists.**

**Exit:**
```bash
Exit;
```

## 🔹 Step 4: Delete the MySQL Container
```bash
docker rm -f mysql-volume-demo;
```
**At this point:**
- ❌ Container is removed
- ✅ Volume and database data still exist


## 🔹 Step 5: Recreate MySQL Container Using Same Volume
```bash
docker run -d --name mysql-volume-demo -e MYSQL_ROOT_PASSWORD=root -v mysql_data:/var/lib/mysql mysql:8
```

## 🔹 Step 6: Verify Data Persistence
```bash
docker exec -it mysql-volume-demo mysql -uroot -proot
```

**Inside MySQL shell:**
```bash
SHOW DATABASES;
```
**✅ The devopsdb database is still present.**

## Observations
- Database data persists beyond container lifecycle
- Volume lifecycle is independent of containers
- MySQL uses /var/lib/mysql to store data
