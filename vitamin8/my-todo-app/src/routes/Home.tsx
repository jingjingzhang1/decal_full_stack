import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    axios.get('/api/tasks').then((response) => {
      setTasks(response.data);
    });
  }, []);

  const addTask = () => {
    axios.post('/api/tasks', { task }).then((response) => {
      setTasks(response.data);
      setTask('');
    });
  };

  const deleteTask = (taskToDelete: string) => {
    axios.delete(`/api/tasks/${taskToDelete}`).then((response) => {
      setTasks(response.data);
    });
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t) => (
          <li key={t}>
            {t} <button onClick={() => deleteTask(t)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
