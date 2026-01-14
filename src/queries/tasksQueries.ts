import axios from "axios"
import { useQuery } from "@tanstack/react-query"
import type { TaskModel } from "../models/TaskModel"
import {
  getTasksFromMemory,
  saveTasksToMemory,
} from "../storage/tasksInMemoryStorage"

const fetchTasks = async () => {
  const savedTasks = getTasksFromMemory()

  if (savedTasks.length > 0) {
    return savedTasks
  }

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  )

  const newTasks: TaskModel[] = response.data
    .slice(0, 20)
    .map((item: { id: number; title: string; completed: boolean }) => {
      return {
        taskId: item.id,
        taskTitle: item.title,
        taskDescription: "",
        taskCreationDate: new Date(),
        taskStatus: item.completed ? 2 : 0,
      }
    })

  saveTasksToMemory(newTasks)

  return newTasks
}

export const useTasksList = () => {
  return useQuery({
    queryKey: ["tasksList"],
    queryFn: fetchTasks,
  })
}

