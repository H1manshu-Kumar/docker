# LAB 05 – Docker Volume Lifecycle Management

## 📌 Overview

This lab focuses on the **operational side of Docker volumes** - how to inspect, manage, clean up, and maintain them properly.

In real-world DevOps environments, unmanaged volumes can lead to:
- Disk space leaks
- Orphaned data
- Production instability

This lab builds the mindset of **operational maturity**, not just container execution.

---

## 🎯 Objective

- Inspect Docker volumes
- Understand volume lifecycle independent of containers
- Remove unused volumes safely
- Prevent disk space and resource leaks

---

## 🧠 Key Concept

> Volumes live beyond containers.  
> If not managed properly, they silently consume system resources.

---

## 🛠️ Prerequisites

- Docker installed
- Completion of LAB 01–03 (Volumes fundamentals)
- Basic understanding of Docker storage

---

## 🧪 Hands-On Steps

---

## 🔹 Step 1: List All Docker Volumes

```bash
docker volume ls
```
<img width="748" height="326" alt="image" src="https://github.com/user-attachments/assets/38c2679c-7ed5-4991-9a06-a3b82b84613c" />

**This shows all volumes present on the system.**

## 🔹 Step 2: Inspect a Volume
```bash
docker volume inspect <volume_name>
```
**Example:**

```bash
docker volume inspect mysql_data_demo
```

**What to Observe:**
- Mountpoint
- Driver
- Labels
- Scope

<img width="705" height="213" alt="image" src="https://github.com/user-attachments/assets/6c095bb3-b600-4c74-b781-88ebdbe17da7" />

## 🔹 Step 3: Identify Unused (Dangling) Volumes
```bash
docker volume ls -f dangling=true
```
<img width="758" height="231" alt="image" src="https://github.com/user-attachments/assets/6ea842e9-6645-4ed4-b9a9-88cdc482c53c" />

**Dangling volumes are not attached to any container and are safe candidates for cleanup.**

## 🔹 Step 4: Remove a Specific Volume
```bash
docker volume rm <volume_name>
```
Example:
```bash
docker volume rm minikube
```
**Warning: ⚠️ Ensure the volume is not used by any running container.**

<img width="292" height="43" alt="image" src="https://github.com/user-attachments/assets/83bc956d-9e54-4018-b6dd-7ac89640d85a" /> </br>

<img width="748" height="214" alt="image" src="https://github.com/user-attachments/assets/166d4485-63f6-4730-888e-4fbdacbd986a" />

## 🔹 Step 5: Prune All Unused Volumes

```bash
docker volume prune
```

<img width="864" height="214" alt="image" src="https://github.com/user-attachments/assets/b95d17cd-0c62-4a9c-967c-bb436aec39eb" /> </br>

This removes:
- All unused volumes
- Frees disk space
- Helps prevent storage leaks


## ✍️ Observations
- Volumes remain even after containers are deleted
- Docker does not auto-remove unused volumes
- Manual or automated cleanup is required
