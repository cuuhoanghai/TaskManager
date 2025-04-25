import { useState } from "react";
import { useTaskContext } from "../context/taskContext";
import TaskItem from "./taskItem";



type Filter = "all" | "completed" | "pending" ;

const TaskList = () =>{
    const {tasks} = useTaskContext();

    const [filter,setFilter] = useState<Filter>("all");

    const filterTasks = tasks.filter((tasks) =>{
        if(filter === "completed") return tasks.completed;
        if(filter === "pending") return !tasks.completed;
        return true;
    });
    return(
        <div className="p-4">
            <div className="flex gap-4 mb-4">
                <button onClick={() => setFilter("all")} className={filter === "all" ? "font-bold" : ""}>
                    All Task
                </button>
                <button onClick={()=>setFilter("completed")} className={filter === "completed" ? "font-bold" : ""}>
                    Completed
                </button>
                <button onClick={ () => setFilter("pending")} className={filter === "pending" ? "font-bold" : ""}>
                    Pending...
                </button>

            </div>
            <ul>
                {
                    filterTasks.length > 0 ? (
                        filterTasks.map((tasks) => <TaskItem key = {tasks.id} task={tasks} />)
                    ) : (
                        <li className="text-center text-gray-400">No task</li>
                    )
                }
            </ul>
        </div>
    );
};
export default TaskList;