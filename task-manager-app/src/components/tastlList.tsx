import { useState } from "react";
import { useTaskContext } from "../context/taskContext";
import TaskItem from "./taskItem";



type Filter = "all" | "completed" | "pending";

const TaskList = () => {
    const { tasks } = useTaskContext();

    const [filter, setFilter] = useState<Filter>("all");

    const filterTasks = tasks.filter((tasks) => {
        if (filter === "completed") return tasks.completed;
        if (filter === "pending") return !tasks.completed;
        return true;
    });
    return (
        <div className="p-4">
            <div className="flex justify-start gap-6 mb-6">
                <button
                    onClick={() => setFilter("all")}
                    className={`px-4 py-2 rounded ${filter === "all" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    All Tasks
                </button>
                <button
                    onClick={() => setFilter("completed")}
                    className={`px-4 py-2 rounded ${filter === "completed" ? "bg-green-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Completed
                </button>
                <button
                    onClick={() => setFilter("pending")}
                    className={`px-4 py-2 rounded ${filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200 text-gray-700"}`}
                >
                    Pending...
                </button>
            </div>
            <ul>
                {
                    filterTasks.length > 0 ? (
                        filterTasks.map((tasks) => <TaskItem key={tasks.id} task={tasks} />)
                    ) : (
                        <li className="text-center text-gray-400">No task</li>
                    )
                }
            </ul>
        </div>
    );
};
export default TaskList;