//external logic (storage)
//saving tasks with AsyncStorage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from '../hooks/useTasks';

const TASKS_KEY = "tasks";

//save tasks in storage
export const saveTasks = async (tasks: Task[]) => {
  try {
    const jsonValue = JSON.stringify(tasks); //AsyncStorage only stores strings
    await AsyncStorage.setItem(TASKS_KEY, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

//load tasks that are saved in storage
export const loadTasks = async (): Promise<Task[]> => {
  try {
    const jsonValue = await AsyncStorage.getItem(TASKS_KEY);

    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};