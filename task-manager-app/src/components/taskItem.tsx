import React from "react";
import { use, useState } from "react";
import { Task } from "../types/task";
import { useTaskContext } from "../context/taskContext";
import { motion } from "framer-motion";
import { Pencil, Trash } from "lucide-react";

const TaskItem = ({ task }: { task: Task }) => {
    const { toggleTask, deleteTask, editTask } = useTaskContext();
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(task.title);
    const [editText, setEditText] = useState(task.title);

    const handleEdit = () => {
        if (isEditing && editText.trim() !== "") {
            editTask(task.id, editText);
        }
        setIsEditing(!isEditing);
    };
    return (
        <motion.li
            layout
            className={`flex items-center justify-between p-2 border-b ${task.completed ? "text-gray-400 line-through" : ""
                }`}
        >
            <div className="flex items-center gap-2 flex-grow">
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}

                />
                {isEditing ? (
                    <input
                        className="border rounded py-1"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}

                        onKeyDown={(e) => e.key === "Enter" && handleEdit()}
                        autoFocus
                    />
                ) : (
                    <span>
                        {task.title}
                    </span>
                )}

            </div>
            <div className="flex gap-2">
                <button onClick={handleEdit}
                    className="text-blue-500 hover:underline"
                    title={isEditing ? "Save" : "Edit"}
                >
                    <Pencil size={18} />


                </button>

                <button onClick={() => {
                    const confirmDelete = window.confirm("Do you want to delete?");
                    if (confirmDelete) {
                        deleteTask(task.id);
                    }
                }}
                    title="delete"
                    className="text-red-500 hover:text-red-700">
                    <Trash size={18} />

                </button>
            </div>


        </motion.li>
    )
}
export default TaskItem;