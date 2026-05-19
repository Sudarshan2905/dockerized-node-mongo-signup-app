# Dockerized Node.js + MongoDB Signup App

A full-stack containerized application built using Node.js, Express, MongoDB, Docker, and Docker Compose.

This project demonstrates how to run frontend, backend, and database inside Docker containers and connect them using Docker networking.

---

## Features

- User Signup Form
- Node.js + Express Backend
- MongoDB Database
- Mongo Express GUI
- Dockerized Application
- Docker Compose Setup
- Docker Networking
- Docker Hub Image Publishing

---

## Tech Stack

- HTML
- Node.js
- Express.js
- MongoDB
- MongoDB Driver
- Docker
- Docker Compose

---

## Project Structure

```plaintext
NodeApp/

├── index.html
├── server.js
├── package.json
├── Dockerfile
├── mongo.yaml
├── .dockerignore
└── README.md
```

---

## Setup Instructions

### Clone Repository

```bash
git clone <YOUR_GITHUB_REPO>

cd NodeApp
```

---

## Run Application

Start all containers:

```bash
docker compose -f mongo.yaml up --build -d
```

Check running containers:

```bash
docker ps
```

---

## Access Application

Frontend:

```plaintext
http://localhost:3030
```

Mongo Express:

```plaintext
http://localhost:8081
```

---

## Docker Services

### Mongo

Stores application data.

Port:

```plaintext
27017
```

---

### Mongo Express

GUI to view MongoDB collections and documents.

Port:

```plaintext
8081
```

---

### Node App

Runs Express server.

Port:

```plaintext
3030
```

---

## API Routes

Get all users:

```plaintext
GET /getUsers
```

Add user:

```plaintext
POST /addUser
```

---

## Docker Hub Image

Pull Image:

```bash
docker pull shreedev29/my-nodeapp:4.0
```

Run:

```bash
docker run -p 3030:3030 shreedev29/my-nodeapp:4.0
```

---

## Learning Outcomes

- Docker Basics
- Dockerfile
- Docker Compose
- Docker Networking
- MongoDB Containers
- Docker Hub Publishing
- Debugging Containers
- Full Stack Container Deployment

---

## Future Improvements

- Add Mongoose
- Add Password Hashing
- Add Environment Variables (.env)
- Add React Frontend
- Deploy on AWS EC2

---

## Author

Sudarshan Herwade
Electronics Engineering Student | MERN | Docker | AWS | Full Stack Development