# README

**Documentation languages**:

- [English](README.md)
- [Русский](README-ru.md)

**Menu**:

- [Task](#task)
- [How to run app](#how-to-run-app)
- [Application stack](#application-stack)
- [Folder structure](#folder-structure)

## Task

- Raise the image of the frontend and backend by downloading it from DockerHub via docker-compose.
- Implement image auto-download when a new one appears on DockerHub.

## How to run app

```bash
git clone https://github.com/ToDoCalendar/ToDoCalendar_server.git
#git clone git@github.com:ToDoCalendar/ToDoCalendar_server.git
cd ToDoCalendar_server
cp .env.example .env
docker-compose up -d
docker-compose ps
```

## Application stack

- **[Docker, docker-compose](https://www.docker.com/)**

## Folder structure

```bash
sudo apt install tree
tree --charset ascii -d
```

```
.

0 directories
```
