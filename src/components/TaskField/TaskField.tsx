import { Box, Typography } from "@mui/material"

type TaskFieldProps = {
  label: string
  value: string
}

const TaskField = ({ label, value }: TaskFieldProps) => {
  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ color: "gray", fontSize: 13, fontWeight: 600, marginBottom: 0.5 }}>
        {label}
      </Typography>
      <Typography sx={{ fontSize: 15, color: "#555" }}>
        {value}
      </Typography>
    </Box>
  )
}

export default TaskField
