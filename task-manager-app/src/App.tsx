import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskProvider } from './context/taskContext';
import TaskInput from './components/taskInput';
import TaskList from './components/tastlList';
import { Toaster } from "react-hot-toast";
import { FaMoon, FaSun } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const saveMode = localStorage.getItem("darkMode");
    if (saveMode) {
      setDarkMode(JSON.parse(saveMode));
    }
  }, []);


  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);


  return (
    <TaskProvider>
      <div className={`max-w-xl mx-auto mt-10 shadow-md rounded-xl p-4 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <Toaster position="top-center" reverseOrder={false} />
        <h1 className='text-2xl font-bold text-center mb-4'>Task Manager</h1>
        <button
          className='absolute top-4 right-4 p-2 rounded-full bg-gray-300 dark:bg-gray-600'
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? (FaSun as any)({ size: 20 }) : (FaMoon as any)({ size: 20 })}
        </button>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
