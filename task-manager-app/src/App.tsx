import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TaskProvider } from './context/taskContext';
import TaskInput from './components/taskInput';
import TaskList from './components/tastlList';

function App() {
  return (
    <TaskProvider>
      <div className='max-w-xl mx-auto mt-10 bg-white shadow-md rounded-xl p-4'>
        <h1 className='text-2xl font-bold text-center mb-4'>Task Manager</h1>
        <TaskInput />
        <TaskList />
      </div>
    </TaskProvider>
  );
}

export default App;
