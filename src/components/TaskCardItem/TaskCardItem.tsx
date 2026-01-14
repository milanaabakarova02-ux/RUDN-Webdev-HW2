import { Card, CardContent, Typography, Box } from "@mui/material"
import { useNavigate } from "react-router"
import type { TaskModel } from "../../models/TaskModel"

type TaskCardItemProps = {
  taskData: TaskModel
}

const TaskCardItem = ({ taskData }: TaskCardItemProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/task/${taskData.taskId}`)
  }

  return (
    <Card 
      sx={{ 
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        backgroundColor: "#fafbfc"
      }}
      onClick={handleClick}
    >
      <CardContent sx={{ padding: "14px 16px", "&:last-child": { paddingBottom: "14px" } }}>
        <Box sx={{ display: "flex", alignItems: "center", marginBottom: 1 }}>
          <Box sx={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#667eea", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, marginRight: 1 }}>
            {taskData.taskId}
          </Box>
        </Box>
        <Typography sx={{ color: "#333", fontWeight: 500, fontSize: 14, lineHeight: 1.4 }}>
          {taskData.taskTitle}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TaskCardItem
