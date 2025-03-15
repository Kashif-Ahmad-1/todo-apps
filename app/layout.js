"use client";

import '../styles/globals.css';
import { TaskProvider } from '../context/TaskContext';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TaskProvider>
          {children}
        </TaskProvider>
      </body>
    </html>
  );
}