# LAB 05 – Docker Volume Lifecycle Management

## 📌 Overview

This lab focuses on the **operational side of Docker volumes** — how to inspect, manage, clean up, and maintain them properly.

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

