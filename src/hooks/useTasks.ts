// logic for adding/removing/toggling tasks
import { useState } from "react";

export type Task = {
  id: string;
  text: string;
  done: boolean;
};

type UseTasksReturn = {
  tasks: Task[];
  filteredTasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
  setFilter: (filter: Filter) => void;
};

export type Filter = "all" | "pending" | "done";


export const useTasks = (): UseTasksReturn => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  const addTask = (text: string) => {
    if (!text || text.trim().length === 0) return;

    const newTask: Task = {
      id: Date.now().toString(),
      text: text.trim(),
      done: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  };

  const filterTasks = (tasks: Task[], filter: Filter): Task[] => {
    if (filter === "pending") return tasks.filter((t) => !t.done);
    if (filter === "done") return tasks.filter((t) => t.done);
    return tasks;
  };

  const filteredTasks = filterTasks(tasks, filter);

  return {
    tasks,
    filteredTasks,
    addTask,
    removeTask,
    toggleTask,
    setFilter,
  };
};
