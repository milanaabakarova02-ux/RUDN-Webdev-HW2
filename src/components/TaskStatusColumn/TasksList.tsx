import { Box } from "@mui/material"
import type { TaskModel } from "../../models/TaskModel"
import TaskCardItem from "../TaskCardItem/TaskCardItem"

type TasksListProps = {
  tasks: TaskModel[]
}

const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {tasks.map((task) => (
        <TaskCardItem key={task.taskId} taskData={task} />
      ))}
    </Box>
  )
}

export default TasksList
