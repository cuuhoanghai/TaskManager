import { Task } from "../types/task";

export const getTasksFromStorage = (): Task[] => {
    try {
        const data = localStorage.getItem("tasks");
        if (!data) return [];
        const parsed = JSON.parse(data);
        return Array.isArray(parsed) ? parsed : [];
      } catch (error) {
        console.error("Failed to parse tasks from storage", error);
        return [];
      }
};
export const saveTasksToStorage = (tasks: Task[]) => {
    console.log("Saving to localStorage:", tasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}