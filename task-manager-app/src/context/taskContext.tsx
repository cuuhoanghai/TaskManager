import React, { createContext, useContext, useEffect, useState } from "react";
import { Task } from "../types/task";
import { getTasksFromStorage, saveTasksToStorage } from "../ultils/localStorage";
import toast from "react-hot-toast";

interface TaskContextProps {
    tasks: Task[];
    addTask: (title: string) => void;
    toggleTask: (id: string) => void;
    editTask: (id: string, title: string) => void;
    deleteTask: (id: string) => void;
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        const storeTasks = getTasksFromStorage();
        if (storeTasks.length > 0) {
            setTasks(storeTasks);
        }

    }, []);

    useEffect(() => {
        saveTasksToStorage(tasks);
        console.log(tasks);
    }, [tasks]);

    const addTask = (title: string) => {
        const newTask: Task = { id: Date.now().toString(), title, completed: false };
        setTasks(prev => [...prev, newTask]);
        toast.success("Add task completed!");

    };

    const toggleTask = (id: string) => {
        setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
    };
    const deleteTask = (id: string) => {
        setTasks(prev => prev.filter(task => task.id !== id));
        toast.success("Delete taskk completed!");

    };

    const editTask = (id: string, title: string) => {
        setTasks(prev => prev.map(task => task.id === id ? { ...task, title } : task));
        toast.success("Edit task completedd");
    };
    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, toggleTask }}>
            {children}

        </TaskContext.Provider>
    );
};

export const useTaskContext = () => {
    const context = useContext(TaskContext);
    if (!context) throw new Error("useTaskConnText must use with TaskProviderr");
    return context;

}
