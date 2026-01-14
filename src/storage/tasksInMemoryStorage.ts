import type { TaskModel } from "../models/TaskModel"

let tasksInApplicationMemory: TaskModel[] = []

export const getTasksFromMemory = () => {
  return tasksInApplicationMemory
}

export const saveTasksToMemory = (newTasksList: TaskModel[]) => {
  tasksInApplicationMemory = newTasksList
}
