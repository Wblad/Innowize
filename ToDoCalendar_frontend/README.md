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

- [Google Documents](https://docs.google.com/document/d/1UQgKfPkB8C36dyDDmPU40rjSw3_fXEH8/edit)

## How to run app

We start backend:

```bash
git clone https://github.com/ToDoCalendar/ToDoCalendar_server.git
#git clone git@github.com:ToDoCalendar/ToDoCalendar_server.git
cd ToDoCalendar_server
cp .env.example .env
docker-compose up -d
docker-compose ps
```

We start frontend:

```bash
git clone https://github.com/ToDoCalendar/ToDoCalendar_frontend.git
#git clone git@github.com:ToDoCalendar/ToDoCalendar_frontend.git
cd ToDoCalendar_frontend
npm ci
cp .env.example .env
npm run start
```

## Application stack

- **[VS Code](https://code.visualstudio.com/#alt-downloads)** - code editor
- **[Node JS](https://nodejs.org/en/)** - for application development
- **[React](https://reactjs.org/)** - frontend framework
- **[Firefox](https://www.mozilla.org/en-US/firefox/enterprise/)** - browser
- **[Docker](https://www.docker.com/)** - for building the front on DockerHub
- **[Docker-compose](https://www.docker.com/)** - to run the front on the server
- **[React-hook-form](https://react-hook-form.com/get-started)** - library for
  form validation
- **[Toastr](https://codeseven.github.io/toastr/demo.html)** - library to
  display messages on the screen that disappear on their own
- **[Font Awesome](https://fontawesome.com/)** - icons
- **[GitHub pages](https://pages.github.com/)** - Jekyll hosting from GitHub

## Folder structure

```bash
sudo apt install tree
tree --charset ascii -I "node_modules|build" -d
```

```
.
|-- public
`-- src
    |-- components
    |   |-- Container
    |   |-- DateFrame
    |   |-- DatePage
    |   |-- DefaultFrame
    |   |-- Error404Page
    |   |-- FooterPattern
    |   |-- Header
    |   |-- HomeRedirectPage
    |   |-- HoursPage
    |   |-- MonthFrame
    |   |-- MonthPage
    |   |-- SignPage
    |   |-- TaskPage
    |   |-- YearFrame
    |   `-- YearPage
    |-- consts
    `-- scripts
        |-- Calendar
        |-- Date
        |   |-- getMonthDays
        |   |-- getNextDate
        |   |-- getNextMonth
        |   |-- getNextYear
        |   |-- getPrevDate
        |   |-- getPrevMonth
        |   |-- getPrevYear
        |   |-- getStringDay
        |   |-- getStringMonth
        |   |-- setDate
        |   |-- toJson
        |   |-- toStringDate
        |   `-- toStringTime
        |-- Sign
        |-- Task
        |-- Toast
        |-- Verify
        `-- sleep

40 directories
```

- **components**:
  - **Description**: A folder with components that can be used several times
  - **Types of files**:
    - `*.jsx`
    - `*.module.css`
- **consts**:
  - **Description**: folder with constants
  - **Types of files**:
    - `*.css`
- **scripts**:
  - **Description**: A folder with application scripts that are repeated on
    several pages
  - **Types of files**:
    - `*.js`
