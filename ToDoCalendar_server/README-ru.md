# README

**Языки документации**:

- [English](README.md)
- [Русский](README-ru.md)

**Меню**:

- [Задание](#задание)
- [Как запустить приложение](#как-запустить-приложение)
- [Стэк приложений](#стэк-приложений)
- [Структура проекта](#структура-проекта)

## Задание

- Поднять image фронтенда и бэкэнда, скачав его с DockerHub, через docker-compose.
- Реализовать автоскачивание image при появлении нового на DockerHub.

## Как запустить приложение

```bash
git clone https://github.com/ToDoCalendar/ToDoCalendar_server.git
#git clone git@github.com:ToDoCalendar/ToDoCalendar_server.git
cd ToDoCalendar_server
cp .env.example .env
docker-compose up -d
docker-compose ps
```

## Стэк приложений

- **[Docker, docker-compose](https://www.docker.com/)**

## Структура проекта

```bash
sudo apt install tree
tree --charset ascii -d
```

```
.

0 directories
```
