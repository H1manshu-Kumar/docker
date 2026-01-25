# LAB 03 – Docker Volume with Database (MySQL)

## 📌 Overview

This lab demonstrates how **Docker volumes are used with real-world stateful applications**, using **MySQL** as an example.

Databases are a classic case where **data persistence is mandatory**. This lab clearly shows how Docker volumes allow database data to **survive container deletion and recreation**, which is a core responsibility of a DevOps engineer.

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
docker pull mysql:latest
```
<img width="985" height="23" alt="image" src="https://github.com/user-attachments/assets/a4b2b6de-c358-4755-8c03-e4dcad3d9a2e" />

**This pulls the official MySQL image from Docker Hub.**

## 🔹 Step 1: Create a Docker Volume for MySQL Data
```bash
docker volume create mysql_data_demo
```
**Verify:**
```bash
docker volume inspect mysql_data_demo
```
<img width="644" height="230" alt="image" src="https://github.com/user-attachments/assets/45e189e7-81e7-45a5-a63c-dfc3b84c38ba" />


## 🔹 Step 2: Run MySQL Container with Volume Attached
```bash
docker run -d -e MYSQL_ROOT_PASSWORD=root -v mysql_data_demo:/var/lib/mysql mysql:latest
```

**Explanation:**
- **mysql_data_new** - Docker-managed persistent volume
- **/var/lib/mysql** - Default MySQL data directory
- Environment variables initialize the database
<img width="662" height="57" alt="image" src="https://github.com/user-attachments/assets/2c10f14d-0ba9-4e50-880b-c5e90abeac1d" />

## 🔹 Step 3: Verify Database Creation
```bash
docker exec -it 094a4ef6fbdf /bin/bash
```
**Inside MySQL shell:** </br>
</br>
<img width="387" height="41" alt="image" src="https://github.com/user-attachments/assets/54e4ac71-bc44-40fc-a6e9-327f2bb892df" />

```bash
create database KYC;
```

```bash
show databases;
```
**Confirm KYC database exists.** </br>
</br>
<img width="366" height="274" alt="image" src="https://github.com/user-attachments/assets/97027295-8731-45a4-bf8d-44e8a02956c3" />

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

<br>
<img width="524" height="61" alt="image" src="https://github.com/user-attachments/assets/9b9a4a8c-03ee-46f0-8b39-7d9fe42b3ab9" /> </br>

<img width="617" height="39" alt="image" src="https://github.com/user-attachments/assets/700381af-5498-4e07-9556-a82c6e51ef20" />

## 🔹 Step 5: Recreate MySQL Container Using Same Volume
```bash
docker run -d -e MYSQL_ROOT_PASSWORD=root --name mysql-volume-demo -v mysql_data_demo:/var/lib/mysql mysql:latest
```
<img width="666" height="80" alt="image" src="https://github.com/user-attachments/assets/79967796-2f34-406f-83ec-878a6c105c44" /> <br>
<img width="665" height="78" alt="image" src="https://github.com/user-attachments/assets/507a94c7-18cb-4969-86f5-bf2b8fb6edd6" />

## 🔹 Step 6: Verify Data Persistence
```bash
docker exec -it mysql-volume-demo mysql -uroot -proot
```
<img width="669" height="326" alt="image" src="https://github.com/user-attachments/assets/b9f4b411-9366-4409-984a-c0e05d7124d0" />

**Inside MySQL shell:**
```bash
SHOW DATABASES;
```
**✅ The KYC database is still present.** <br>
<img width="266" height="260" alt="image" src="https://github.com/user-attachments/assets/21727b7f-a810-4162-987b-ec6885cb3dbd" /> </br>
</br>

## Observations
- Database data persists beyond container lifecycle
- Volume lifecycle is independent of containers
- MySQL uses /var/lib/mysql to store data
