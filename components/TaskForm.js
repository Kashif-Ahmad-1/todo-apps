"use client";

import { useState } from 'react';
import { useTasks } from '../context/TaskContext';
import { FaPlus } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export default function TaskForm() {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('General');
  const { addTask } = useTasks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTask(title, category);
      setTitle('');
      setCategory('General');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
        className={styles.taskInput}
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className={styles.categorySelect}
      >
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button type="submit" className={styles.addButton}>
        <FaPlus /> Add
      </button>
    </form>
  );
}