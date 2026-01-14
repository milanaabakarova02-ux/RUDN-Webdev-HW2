import { Box, Typography } from "@mui/material"

type StatusFieldProps = {
  status: number
}

const StatusField = ({ status }: StatusFieldProps) => {
  const getStatusName = (taskStatus: number) => {
    if (taskStatus === 0) return "К выполнению"
    if (taskStatus === 1) return "В работе"
    if (taskStatus === 2) return "Выполнено"
    return "Неизвестно"
  }

  return (
    <Box sx={{ marginBottom: 2 }}>
      <Typography sx={{ color: "gray", fontSize: 13, fontWeight: 600, marginBottom: 0.5 }}>
        СТАТУС
      </Typography>
      <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#667eea" }}>
        {getStatusName(status)}
      </Typography>
    </Box>
  )
}

export default StatusField
