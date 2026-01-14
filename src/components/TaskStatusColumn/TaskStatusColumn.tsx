import { Box, Typography } from "@mui/material"
import type { TaskModel } from "../../models/TaskModel"
import TaskCardItem from "../TaskCardItem/TaskCardItem"

type TaskStatusColumnProps = {
  columnTitle: string
  tasksForColumn: TaskModel[]
}

const TaskStatusColumn = ({
  columnTitle,
  tasksForColumn,
}: TaskStatusColumnProps) => {
  const getColumnColor = (title: string) => {
    if (title === "К выполнению") return "#FF6B6B"
    if (title === "В работе") return "#FFD93D"
    if (title === "Выполнено") return "#6BCB77"
    return "#667eea"
  }

  const color = getColumnColor(columnTitle)

  return (
    <Box 
      sx={{ 
        width: 380,
        padding: 3,
        borderRadius: 2,
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 12px rgba(0, 0, 0, 0.08)",
        border: `2px solid ${color}20`
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: color, marginRight: 1.5 }} />
        <Typography sx={{ fontWeight: 700, color: "#333", fontSize: 15, textTransform: "uppercase", letterSpacing: 0.5 }}>
          {columnTitle}
        </Typography>
        <Typography sx={{ marginLeft: "auto", fontWeight: 600, color: color, fontSize: 13 }}>
          {tasksForColumn.length}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {tasksForColumn.map((task) => (
          <TaskCardItem key={task.taskId} taskData={task} />
        ))}
      </Box>
    </Box>
  )
}

export default TaskStatusColumn

