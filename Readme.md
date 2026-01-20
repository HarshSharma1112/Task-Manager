# Task Manager SaaS

A full-stack task management application built with the MERN stack (MongoDB, Express.js, React, Node.js). Users can register, login, and manage their personal tasks with priority levels.

## Features

- 🔐 User Authentication (Register/Login)
- ✅ Create, Read, Update, Delete Tasks
- 🎯 Set Task Priorities (Low, Medium, High)
- ✔️ Mark Tasks as Complete/Incomplete
- 📱 Responsive Design
- 🎨 Beautiful, Modern UI with Light Background

## Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Axios
- CSS3

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Bcrypt.js

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [VS Code](https://code.visualstudio.com/) (recommended)

## Installation

### 1. Clone or Download the Project

Download the `task-manager-saas` folder to your computer.

### 2. Install Backend Dependencies

Open terminal in VS Code and run:

```bash
cd backend
npm install
```

This installs: express, mongoose, bcryptjs, jsonwebtoken, cors, dotenv, nodemon

### 3. Install Frontend Dependencies

Open a new terminal and run:

```bash
cd frontend
npm install
```

This installs: react, react-router-dom, axios

### 4. Configure Environment Variables

The `backend/.env` file should contain:

```
MONGODB_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
PORT=5000
```

**Important:** Change `JWT_SECRET` to a random string in production!

### 5. Start MongoDB

**Windows:**
- Press `Windows + R`
- Type `services.msc` and press Enter
- Find "MongoDB Server" and click "Start"

**OR** run in Command Prompt as Administrator:
```bash
net start MongoDB
```

**Mac/Linux:**
```bash
brew services start mongodb-community
```

## Running the Application

You need to run both backend and frontend simultaneously.

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

You should see:
```
Server is running on port 5000
MongoDB connected successfully
```

### Terminal 2 - Frontend

```bash
cd frontend
npm start
```

The application will open automatically at `http://localhost:3000`

## Project Structure

```
task-manager-saas/
│
├── backend/
│   ├── models/
│   │   ├── User.js          # User schema
│   │   └── Task.js          # Task schema
│   ├── routes/
│   │   ├── auth.js          # Authentication routes
│   │   └── tasks.js         # Task CRUD routes
│   ├── middleware/
│   │   └── auth.js          # JWT verification middleware
│   ├── .env                 # Environment variables
│   ├── server.js            # Express server setup
│   └── package.json
│
└── frontend/
    ├── public/
    └── src/
        ├── components/
        │   ├── Login.js     # Login page
        │   ├── Register.js  # Registration page
        │   └── Dashboard.js # Main dashboard
        ├── App.js           # Main app component
        ├── App.css          # Styling
        ├── index.js         # Entry point
        └── index.css        # Global styles
```

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

### Tasks

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/tasks` | Get all user tasks | Yes |
| POST | `/api/tasks` | Create new task | Yes |
| PUT | `/api/tasks/:id` | Update task | Yes |
| DELETE | `/api/tasks/:id` | Delete task | Yes |

## Usage Guide

### 1. Register an Account
- Go to `http://localhost:3000/register`
- Enter your name, email, and password
- Click "Create Account"

### 2. Login
- Use your email and password
- Click "Sign In"

### 3. Create Tasks
- Fill in the task title
- Add a description (optional)
- Select priority level (Low, Medium, High)
- Click "Add Task"

### 4. Manage Tasks
- Click "Complete" to mark a task as done
- Click "Undo" to mark it as incomplete
- Click "Delete" to remove a task

### 5. Logout
- Click the "Logout" button in the top-right corner

## Common Issues & Solutions

### MongoDB Connection Error

**Problem:** `MongoDB connection error`

**Solution:**
- Ensure MongoDB is installed and running
- Check if MongoDB service is started
- Verify the connection string in `.env`

### Port Already in Use

**Problem:** `EADDRINUSE: Port 5000 is already in use`

**Solution:**
- Change PORT in `.env` to 5001 or another available port
- Or stop the process using port 5000

### Registration Failed

**Problem:** "Registration failed. Please try again."

**Solutions:**
1. Check if backend is running (`npm run dev` in backend folder)
2. Verify MongoDB is connected
3. Check browser console (F12) for error details
4. Ensure all backend files exist in correct locations

### User is Not Defined

**Problem:** `User is not defined` in terminal

**Solution:**
- Make sure `User.js` exists in `backend/models/`
- Check the import in `backend/routes/auth.js`:
  ```javascript
  const User = require('../models/User');
  ```

## Features Explained

### Authentication
- Passwords are hashed using bcrypt
- JWT tokens are used for session management
- Tokens are stored in localStorage
- Protected routes require valid tokens

### Task Management
- Each user has their own tasks (privacy)
- Tasks are sorted by creation date (newest first)
- Priority-based color coding
- Visual feedback for completed tasks

## Security Notes

⚠️ **For Production Use:**

1. Change `JWT_SECRET` to a strong, random string
2. Use environment variables for all secrets
3. Enable HTTPS
4. Set up proper CORS policies
5. Add rate limiting
6. Use MongoDB Atlas instead of local MongoDB
7. Add input validation and sanitization
8. Implement password strength requirements

## Future Enhancements

Possible features to add:
- [ ] Task due dates
- [ ] Task categories/tags
- [ ] Search and filter tasks
- [ ] Task sharing between users
- [ ] Email notifications
- [ ] Dark mode toggle
- [ ] Task statistics/analytics
- [ ] Profile management
- [ ] Password reset functionality
- [ ] File attachments to tasks

## License

This project is open source and available for educational purposes.

## Support

If you encounter any issues:
1. Check the terminal for error messages
2. Verify all dependencies are installed
3. Ensure MongoDB is running
4. Check that both backend and frontend are running
5. Clear browser cache and localStorage

## Credits

Built as a learning project demonstrating full-stack development with the MERN stack.

---

**Happy Task Managing! 🚀**