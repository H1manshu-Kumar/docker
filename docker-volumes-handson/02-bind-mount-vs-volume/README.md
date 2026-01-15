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
<img width="608" height="79" alt="image" src="https://github.com/user-attachments/assets/7690b6ad-f882-4174-8584-bc3cba7cdd7a" />   

**Explanation:**
- **$(pwd)/bind-data** → Host directory
- **/data** → Container mount point

### Step 3: Write Data Inside Container
**Inside the container:**

```bash
echo "This data lives on the host" > /data/bind.txt
exit
```
<img width="608" height="62" alt="image" src="https://github.com/user-attachments/assets/a857ae2d-12ef-4223-a90f-105bcebb90aa" />

### Step 4: Verify Data on Host
```bash
cat bind-data/bind.txt
```
<img width="279" height="41" alt="image" src="https://github.com/user-attachments/assets/7d023864-3128-4596-a5fd-9adc68c08a44" />

**✅ Data is directly accessible from the host filesystem.**

## 🔹 Part 2: Docker Volume (Docker-Managed Storage)

### Step 1: Create a Docker Volume

```bash
docker volume create volume-data
```
<img width="643" height="176" alt="image" src="https://github.com/user-attachments/assets/4065ba69-7f9e-4781-bb7b-21cc9628b94b" />

### Step 2: Run container using named volume
```bash
docker run -it -v volume-data:/data alpine:latest sh
```
<img width="607" height="61" alt="image" src="https://github.com/user-attachments/assets/cb28bf81-ca17-497e-9587-3aa72e6c3066" />

### Step 3: Write Data Inside Container
```bash
echo "This data lives in a Docker volume" > /data/volume.txt
exit
```
<img width="688" height="61" alt="image" src="https://github.com/user-attachments/assets/d031f8cd-623f-4562-81f5-39d26ee0b4ec" />

### Step 4: Verify Volume Data
```bash
docker run --rm -v volume-data:/data alpine:latest cat /data/volume.txt
```
<img width="736" height="41" alt="image" src="https://github.com/user-attachments/assets/af1e5693-b454-45d7-8cb6-2e01e551ae23" />

**✅ Data persists and is managed entirely by Docker.**

## ✍️ Learning Outcome
**After completing this lab, You will confidently:**
- Understand the difference between bind mounts and volumes
- Choose the right storage option for a given scenario
- Apply production-grade storage best practices
