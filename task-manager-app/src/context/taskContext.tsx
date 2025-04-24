import React, { createContext } from "react";
import { Task } from "../types/task";

interface TaskContextProps{
    task:Task[];
    addTask:(title:string) => void;
    toggleTask:(id:string) => void;
    editTask:(id: string, title:string) => void;
    deleteTask:(id: string) => void;
 }

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

