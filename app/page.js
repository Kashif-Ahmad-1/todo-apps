"use client";

import Head from 'next/head';
import Header from '../components/Header';
import TaskForm from '../components/TaskForm';
import TaskItem from '../components/TaskItem';
import { useTasks } from '../context/TaskContext';
import { FaTrashAlt } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

export default function Home() {
  const { tasks, clearCompleted } = useTasks();
  const pendingTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div className={styles.container}>
      <Head>
        <title>Todo List App</title>
        <meta name="description" content="A beautiful todo list app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header />
        <TaskForm />
        <div className={styles.taskStats}>
          <span>Pending: {pendingTasks}</span>
          <span>Completed: {completedTasks}</span>
          {completedTasks > 0 && (
            <button onClick={clearCompleted} className={styles.clearButton}>
              <FaTrashAlt /> Clear Completed
            </button>
          )}
        </div>
        <div className={styles.taskList}>
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} />
          ))}
          {tasks.length === 0 && (
            <p className={styles.empty}>No tasks yet! Add some above.</p>
          )}
        </div>
      </main>
    </div>
  );
}