import { Task } from "../types/task";

export const getTasksFromStorage = (): Task[] => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
};
export const saveTasksToStorage = (tasks: Task[]) => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}