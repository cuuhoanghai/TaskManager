import React, { useState } from "react";
import { useTaskContext } from "../context/taskContext";



const TaskInput = () => {
    const {addTask} = useTaskContext();
    const [input, setInput] = useState("");

    const hanleSubmit = (e : React.FormEvent) =>{
        e.preventDefault();
        if(!input.trim()) return;
        addTask(input.trim());
        setInput(" ");
    };

    return (
        <form onSubmit={hanleSubmit} className="flex gap-2 p-4">
            <input type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Add new task"
                className="flex-grow p-2 rounded border border-gray-300 focus:outline-none"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add
            </button>
        </form>
    );
}
export default TaskInput;
