// logic for adding/removing/toggling tasks
import { useState } from "react";

export type Task = {
  id: string;
  text: string;
  done: boolean;
};

type UseTasksReturn = {
  tasks: Task[];
  addTask: (text: string) => void;
  removeTask: (id: string) => void;
};

export const useTasks = (): UseTasksReturn => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (text: string) => {
    const newTask: Task = {
      id: Date.now().toString(),
      text,
      done: false,
    };

    setTasks((prev) => [newTask, ...prev]);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return {
    tasks,
    addTask,
    removeTask
  };
};
