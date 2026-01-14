import { Box } from "@mui/material"
import type { TaskModel } from "../../models/TaskModel"
import ColumnHeader from "./ColumnHeader"
import TasksList from "./TasksList"

type TaskStatusColumnProps = {
  columnTitle: string
  tasksForColumn: TaskModel[]
}

const TaskStatusColumn = ({
  columnTitle,
  tasksForColumn,
}: TaskStatusColumnProps) => {
  return (
    <Box 
      sx={{ 
        width: 380,
        padding: 3,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        border: `2px solid ${getColumnBorderColor(columnTitle)}20`
      }}
    >
      <ColumnHeader title={columnTitle} count={tasksForColumn.length} />
      <TasksList tasks={tasksForColumn} />
    </Box>
  )
}

const getColumnBorderColor = (title: string) => {
  if (title === "К выполнению") return "#FF6B6B"
  if (title === "В работе") return "#FFD93D"
  if (title === "Выполнено") return "#6BCB77"
  return "#667eea"
}

export default TaskStatusColumn

