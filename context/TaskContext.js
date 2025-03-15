"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { loadTasks, saveTasks } from '../services/storageService';

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    if (isClient) {
      saveTasks(tasks);
    }
  }, [tasks, isClient]);

  const addTask = (title, category = 'General') => {
    if (isClient) {
      setTasks([...tasks, {
        id: Date.now(),
        title,
        category,
        completed: false
      }]);
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask, clearCompleted }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);