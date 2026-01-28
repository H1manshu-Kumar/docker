# Docker Networking Learning Steps

## 1. Create Custom Network
```bash
docker network create task-network
```

## 2. Build and Run Database
```bash
cd database
docker build -t task-db .
docker run -d --name task-db --network task-network task-db
```

## 3. Build and Run Frontend
```bash
cd ../frontend
docker build -t task-app .
docker run -d --name task-app --network task-network -p 3000:3000 task-app
```

## 4. Test the App
Visit: http://localhost:3000

## Key Learning Points:
- **Custom Network**: Both containers use `task-network`
- **Service Discovery**: Frontend connects to database using hostname `task-db`
- **Port Mapping**: Only frontend port 3000 exposed to host
- **Internal Communication**: Database accessible only within network

## Cleanup:
```bash
docker stop task-app task-db
docker rm task-app task-db
docker network rm task-network
```
