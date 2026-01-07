# Docker Volumes - Hands-On Learning Repository

## 📌 Overview

This repository documents my **hands-on learning of Docker Volumes**. This repository focuses on **practical labs**, **real use-cases**, and **realtime-relevant concepts**, while also building a strong foundation for **Kubernetes Persistent Volumes (PV/PVC)**.

---

## 🎯 Goals of This Repository

- Understand **why containers are stateless**
- Learn **how Docker volumes provide persistence**
- Compare **Bind Mounts vs Named Volumes**
- Use volumes with **real applications**
- Manage volume **lifecycle and cleanup**
- Prepare conceptually for **Kubernetes storage**

---

## 🧠 Key Concepts Covered

- Docker Volume architecture
- Container filesystem vs persistent storage
- Named volumes and bind mounts
- Volume lifecycle independent of containers
- Production storage best practices
- Mapping Docker storage concepts to Kubernetes

---

## 🧪 Hands-On Labs

Each lab is placed in a **separate folder** and focuses on one core concept.

### 📁 Lab 01 – Basic Volume Persistence
**Folder:** `01-basic-volume-persistence`

**What you will learn:**
- Creating Docker volumes
- Mounting volumes to containers
- Proving data persistence after container deletion

**Why it matters:**
- Demonstrates why application data must not live inside containers

---

### 📁 Lab 02 – Bind Mount vs Volume
**Folder:** `02-bind-mount-vs-volume`

**What you will learn:**
- Differences between bind mounts and named volumes
- When to use each approach
- Portability and production implications

**Why it matters:**
- Frequently asked interview topic
- Helps choose correct storage strategy

---

### 📁 Lab 03 – Volume with Database (MySQL)
**Folder:** `03-volume-with-database`

**What you will learn:**
- Using volumes with stateful applications
- Persisting database data across container restarts
- Understanding application-specific data paths

**Why it matters:**
- Real-world use case
- Direct foundation for Kubernetes StatefulSets and PVCs

---

### 📁 Lab 04 – Logs Persistence with Nginx
**Folder:** `04-logs-persistence-with-nginx`

**What you will learn:**
- Persisting application logs using volumes
- Using Docker Compose with volumes
- Separating application lifecycle from log data

**Why it matters:**
- Production logging
- Debugging and monitoring readiness

---

### 📁 Lab 05 – Volume Lifecycle Management
**Folder:** `05-volume-lifecycle-management`

**What you will learn:**
- Inspecting Docker volumes
- Removing unused volumes
- Preventing disk space leaks

**Why it matters:**
- Operational maturity
- Resource management in long-running systems

---

## 🔁 Docker to Kubernetes Concept Mapping

This repository also prepares for Kubernetes storage concepts.

| Docker Concept | Kubernetes Equivalent |
|--------------|----------------------|
| Volume | PersistentVolume (PV) |
| Named Volume | PersistentVolumeClaim (PVC) |
| `-v volume:/path` | `volumeMounts` |
| Volume lifecycle | StorageClass |

> Understanding Docker volumes makes Kubernetes storage concepts much easier to grasp.

---

## 🧑‍💼 Highlights (Derived from This Repo)

- Implemented Docker volume-based persistence for stateful containers
- Designed storage strategies using named volumes and Docker Compose
- Demonstrated production-ready container storage patterns
- Built strong conceptual foundation for Kubernetes Persistent Volumes

---

## 📎 Repository Structure

```
docker-volumes-handson/
├── README.md
├── 01-basic-volume-persistence/
│   └── README.md
├── 02-bind-mount-vs-volume/
│   └── README.md
├── 03-volume-with-database/
│   └── README.md
├── 04-logs-persistence-with-nginx/
│   ├── docker-compose.yml
│   └── README.md
├── 05-volume-lifecycle-management/
│   └── README.md
```

---

## ✍️ Author

**Himanshu Kumar** - Learning by building, documenting, and sharing 🚀
