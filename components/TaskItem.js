"use client";

import { useTasks } from '../context/TaskContext';
import { FaTrash } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export default function TaskItem({ task }) {
  const { deleteTask, toggleTask } = useTasks();

  return (
    <div className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      <div className={styles.taskContent}>
        <span>{task.title}</span>
        <small className={styles.category}>{task.category}</small>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className={styles.deleteButton}
      >
        <FaTrash />
      </button>
    </div>
  );
}