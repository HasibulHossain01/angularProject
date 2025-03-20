# University Student Management System - Technical Documentation

## Overview
The **University Student Management System** is a full-stack web application designed to manage universities and students. It provides functionality to add, view, and manage universities and students efficiently. The project is built using Angular for the frontend and Node.js with Express for the backend.

---

## Table of Contents
- [Project Purpose and Goals](#project-purpose-and-goals)
- [Technology Stack Details](#technology-stack-details)
- [System Architecture](#system-architecture)
- [API Documentation](#api-documentation)
- [Frontend Implementation Details](#frontend-implementation-details)
- [Backend Implementation Details](#backend-implementation-details)
- [Development and Build](#development-and-build)
- [Future Enhancements](#future-enhancements)

---

## Project Purpose and Goals

### Main Objective
The primary goal of the **University Student Management System** is to provide a platform for managing universities and students efficiently. It allows users to:
- Add, view, and manage universities and students.
- Provide a structured system for maintaining student records.
- Improve administrative workflows.

### Problem Solved
The application simplifies university and student management by eliminating manual record-keeping and offering a user-friendly interface for administrators.

### Intended Users
- **University Administrators**: To manage university details.
- **Students**: To view their details and registration information.
- **Developers**: To extend the application with additional features.

---

## Technology Stack Details

### Frontend
- **Framework**: Angular v18.2.0
- **UI Library**: Angular Material v18.2.14
- **Styling**: SCSS
- **State Management**: RxJS

### Backend
- **Framework**: Node.js v18.x with Express.js v4.21.2
- **Middleware**: CORS, `express.json()`

### Database
Currently, the application uses in-memory arrays for data storage. A database like MongoDB or MySQL is planned for future integration.

---

## System Architecture

### Frontend-Backend Communication
The frontend communicates with the backend via RESTful APIs. Angular's `HttpClient` is used for API requests.

### Backend Pattern
The backend follows an **MVC (Model-View-Controller)** pattern:
- **Models**: Represent data structures (`University`, `Student`).
- **Controllers**: Handle business logic.
- **Routes**: Define API endpoints.

### Authentication and Authorization
Currently not implemented. Future plans include using **JWT (JSON Web Tokens)** for authentication and role-based access control.

---

## API Documentation

### University API
- `GET /api/universities` - Fetch all universities.
- `POST /api/universities` - Add a new university.

### Student API
- `GET /api/students` - Fetch all students.
- `POST /api/students` - Add a new student.

### Error Handling
- **400 Bad Request** - Invalid request body.
- **500 Internal Server Error** - Unexpected server-side errors.

### Authentication
Not implemented yet. Future plans include securing API calls with JWT.

---

## Frontend Implementation Details

### Component Logic
- **University Module**
  - `UniversityComponent`: Parent component for universities.
  - `AddUniversityComponent`: Form to add a new university.
  - `UniversityListComponent`: Displays university list.
- **Student Module**
  - `StudentComponent`: Parent component for students.
  - `AddStudentComponent`: Form to add a student.
  - `StudentListComponent`: Displays student list.

### Angular Material
- Uses `MatTable`, `MatButton`, `MatInput`, etc.

### Forms
- Currently uses **Template-driven Forms**.
- Future plan: Convert to **Reactive Forms** for better validation.

---

## Backend Implementation Details

### Controller Logic
- `universityController.js`: Handles university-related requests.
- `studentController.js`: Handles student-related requests.

### Middleware
- **CORS**: Enables cross-origin requests.
- **JSON Parsing**: `express.json()` middleware.

### Database Operations
Currently, data is stored in memory. Future plans include:
- **MongoDB with Mongoose** or **MySQL with Sequelize**.

### Background Jobs
Not implemented yet. Future enhancements may include scheduled tasks like notifications.

---

## Development and Build

### Frontend
- **Development Server**: `ng serve`
- **Build**: `ng build`
- **Unit Tests**: `ng test`

### Backend
- **Start Server**: `node server.js`

---

## Future Enhancements
1. Add database integration (MongoDB, MySQL).
2. Implement authentication and authorization.
3. Add search and filter functionality.
4. Improve UI/UX with advanced Angular Material components.

---

This documentation provides a comprehensive overview of the **University Student Management System**. Let me know if you need any refinements!
