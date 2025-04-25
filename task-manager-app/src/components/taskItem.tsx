import React from "react";
import { use, useState } from "react";
import { Task } from "../types/task";
import { useTaskContext } from "../context/taskContext";
import { motion } from "framer-motion";

const TaskItem = ({task}:{task:Task}) =>{
    const {toggleTask, deleteTask,editTask} = useTaskContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);

    const handleEdit = () =>{
        if(editTitle.trim()){
            editTask(task.id , editTitle.trim());
            setIsEditing(false);
        }
    };
    return(
        <motion.li
            initial={{opacity: 0 , x: 20}}
            animate = {{opacity: 1, x:0}}
            exit={{opacity: 0, x: -20}}
            className="flex items-center justify-between p-2 border-b"
        >
        <div className="flex items-center gap-2 flex-grow">
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() =>toggleTask(task.id)}    
            
            />
            {isEditing ? (
                <input
                    className="border rounded px-2 py-1 w-full"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    onBlur={handleEdit}
                    onKeyDown={(e) => e.key === "Enter" && handleEdit()}
                    autoFocus
                />
            ) : (
                <span onDoubleClick={() => setIsEditing(true)}
                    className={`cursor-pointer ${task.completed ? "line-through text-gray-400" : ""}`}
                >
                    {task.title}
                </span>
            )}
            
        </div>
    
        <button onClick={() =>{
            const confirmDelete = window.confirm("Do you want to delete?");
            if(confirmDelete){
                deleteTask(task.id);
            }
        }} 
        title="Delete"
        className="text-red-500 hover:text-red-700">
        
        </button>            
        </motion.li>
    )
}
export default TaskItem;