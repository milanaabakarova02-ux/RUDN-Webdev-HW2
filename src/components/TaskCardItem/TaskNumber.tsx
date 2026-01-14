import { Box } from "@mui/material"

type TaskNumberProps = {
  taskId: number
}

const TaskNumber = ({ taskId }: TaskNumberProps) => {
  return (
    <Box sx={{ width: 24, height: 24, borderRadius: "50%", backgroundColor: "#667eea", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700 }}>
      {taskId}
    </Box>
  )
}

export default TaskNumber
