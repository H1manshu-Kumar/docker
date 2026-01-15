# LAB 02 – Bind Mount vs Volume (Understanding Storage Choices)

## 📌 Overview

This lab focuses on one of the **most commonly asked Docker interview topics**:  
👉 **Bind Mount vs Docker Volume**

As part of my DevOps learning journey, this lab helped me understand **how different storage mechanisms behave**, when to use them, and why **Docker volumes are preferred in production environments**.

---

## 🎯 Objective

- Understand the difference between **Bind Mounts** and **Docker Volumes**
- Perform hands-on experiments with both
- Observe behavior, portability, and management differences
- Identify real-world use cases for each approach

---

## 🧠 Key Concept

> Not all Docker storage is the same.  
> Choosing the right storage type impacts **portability, security, and production readiness**.

---

## 🛠️ Prerequisites

- Docker installed
- Basic knowledge of Docker containers
- Familiarity with Docker volumes (LAB 01)

---

## 🧪 Hands-On Steps

---

## 🔹 Part 1: Bind Mount (Host-Dependent Storage)

```bash
mkdir bind-data
```

### Step 2: Run Container Using Bind Mount
```bash
docker run -it -v $(pwd)/bind-data:/data alpine:latest sh
```

**Explanation:**
- **$(pwd)/bind-data** → Host directory
- **/data** → Container mount point

### Step 3: Write Data Inside Container
**Inside the container:**

```bash
echo "This data lives on the host" > /data/bind.txt
exit
```
  
### Step 4: Verify Data on Host
```bash
cat bind-data/bind.txt
```
**✅ Data is directly accessible from the host filesystem.**

## 🔹 Part 2: Docker Volume (Docker-Managed Storage)

### Step 1: Create a Docker Volume

```bash
docker volume create volume-data
```

### Step 2: Run container using named volume
```bash
docker run -it -v volume-data:/data alpine:latest sh
```

### Step 3: Write Data Inside Container
```bash
echo "This data lives in a Docker volume" > /data/volume.txt
exit
```

### Step 4: Verify Volume Data
```bash
docker run --rm -v volume-data:/data alpine:latest cat /data/volume.txt
```
**✅ Data persists and is managed entirely by Docker.**

## ✍️ Learning Outcome
**After completing this lab, You will confidently:**
- Understand the difference between bind mounts and volumes
- Choose the right storage option for a given scenario
- Apply production-grade storage best practices
