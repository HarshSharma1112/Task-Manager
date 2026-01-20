import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard({ onLogout }) {
  const [tasks, setTasks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
  });

  const user = JSON.parse(localStorage.getItem('user'));
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };
      const res = await axios.get('http://localhost:5000/api/tasks', config);
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      await axios.post('http://localhost:5000/api/tasks', formData, config);
      setFormData({ title: '', description: '', priority: 'medium' });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const toggleComplete = async (id, completed) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token,
        },
      };
      await axios.put(
        `http://localhost:5000/api/tasks/${id}`,
        { completed: !completed },
        config
      );
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteTask = async (id) => {
    try {
      const config = {
        headers: {
          'x-auth-token': token,
        },
      };
      await axios.delete(`http://localhost:5000/api/tasks/${id}`, config);
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1>Welcome back, {user?.name}!</h1>
          <p style={{ color: '#7f8c8d', marginTop: '5px' }}>
            Manage your tasks efficiently
          </p>
        </div>
        <button onClick={onLogout} className="btn-logout">
          Logout
        </button>
      </div>

      <div className="task-form">
        <h3>Create New Task</h3>
        <form onSubmit={onSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Task Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={onChange}
                placeholder="Enter task title"
                required
              />
            </div>
            <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={onChange}
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={onChange}
              placeholder="Enter task description"
            />
          </div>
          <button type="submit" className="btn-add">
            Add Task
          </button>
        </form>
      </div>

      {tasks.length === 0 ? (
        <div className="empty-state">
          <h3>No tasks yet</h3>
          <p>Create your first task to get started!</p>
        </div>
      ) : (
        <div className="tasks-grid">
          {tasks.map((task) => (
            <div
              key={task._id}
              className={`task-card ${task.completed ? 'completed' : ''} priority-${task.priority}`}
            >
              <div className="task-header">
                <h4 className="task-title">{task.title}</h4>
                <span className={`priority-badge priority-${task.priority}`}>
                  {task.priority}
                </span>
              </div>
              {task.description && (
                <p className="task-description">{task.description}</p>
              )}
              <div className="task-actions">
                <button
                  onClick={() => toggleComplete(task._id, task.completed)}
                  className="btn-small btn-complete"
                >
                  {task.completed ? 'Undo' : 'Complete'}
                </button>
                <button
                  onClick={() => deleteTask(task._id)}
                  className="btn-small btn-delete"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dashboard;