"use client";

import { TaskProvider } from '../context/TaskContext';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
}