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

