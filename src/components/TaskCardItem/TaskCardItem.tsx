import { Card, CardContent, Box } from "@mui/material"
import { useNavigate } from "react-router"
import type { TaskModel } from "../../models/TaskModel"
import TaskNumber from "./TaskNumber"
import TaskTitle from "./TaskTitle"

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
          <TaskNumber taskId={taskData.taskId} />
        </Box>
        <TaskTitle title={taskData.taskTitle} />
      </CardContent>
    </Card>
  )
}

export default TaskCardItem
