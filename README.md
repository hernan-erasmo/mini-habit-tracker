# Habit Tracker App

## Overview
Mini habit-tracker application which allows users to create and track their habits, with features for daily check-ins.

## Project Structure
```
mini-habit-tracker
├── backend
│   ├── app
│   │   ├── __init__.py
│   │   ├── config.py
│   │   ├── models.py
│   │   ├── routes
│   │   │   ├── __init__.py
│   │   │   └── habits.py
│   │   └── services
│   │       ├── __init__.py
│   │       └── habit_service.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── run.py
├── frontend
│   ├── public
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src
│   │   ├── components
│   │   │   ├── HabitForm.tsx
│   │   │   ├── HabitList.tsx
│   │   │   └── HabitItem.tsx
│   │   ├── pages
│   │   │   ├── Dashboard.tsx
│   │   │   └── HabitDetail.tsx
│   │   ├── services
│   │   │   └── api.ts
│   │   ├── types
│   │   │   └── index.ts
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── Dockerfile
│   ├── package.json
│   └── tsconfig.json
├── docker-compose.yml
└── README.md
```

## Getting Started

### Prerequisites
- Docker
- Docker Compose

### Setup
1. Clone the repository:
   ```
   git clone https://github.com/hernan-erasmo/mini-habit-tracker
   cd mini-habit-tracker
   ```

2. Build and run the application using Docker Compose:
   ```
   docker-compose up --build
   ```

3. Access the frontend at `http://localhost:3000` and the backend API at `http://localhost:5000`.

### API Endpoints
- **Habits**
  - `POST /habits`: Create a new habit.
  - `GET /habits`: Retrieve all habits.
  - `GET /habits/<id>`: Retrieve a specific habit by ID.
  - `PUT /habits/<id>`: Update a specific habit by ID.
  - `DELETE /habits/<id>`: Delete a specific habit by ID.
  - `POST /habits/<id>/check-in`: Record a check-in for a specific habit.
