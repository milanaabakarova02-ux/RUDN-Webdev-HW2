import { Box, Button } from "@mui/material"

type TaskActionsProps = {
  currentStatus: number
  onChangeStatus: (status: number) => void
  onDelete: () => void
  onBack: () => void
}

const TaskActions = ({
  currentStatus,
  onChangeStatus,
  onDelete,
  onBack,
}: TaskActionsProps) => {
  const getStatusName = (status: number) => {
    if (status === 0) return "К выполнению"
    if (status === 1) return "В работе"
    if (status === 2) return "Выполнено"
    return ""
  }

  return (
    <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      {currentStatus !== 0 && (
        <Button
          variant="contained"
          onClick={() => onChangeStatus(0)}
          sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", fontWeight: 600 }}
        >
          {getStatusName(0)}
        </Button>
      )}

      {currentStatus !== 1 && (
        <Button
          variant="contained"
          onClick={() => onChangeStatus(1)}
          sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", fontWeight: 600 }}
        >
          {getStatusName(1)}
        </Button>
      )}

      {currentStatus !== 2 && (
        <Button
          variant="contained"
          onClick={() => onChangeStatus(2)}
          sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", fontWeight: 600 }}
        >
          {getStatusName(2)}
        </Button>
      )}

      <Button 
        variant="contained" 
        color="error" 
        onClick={onDelete}
        sx={{ fontWeight: 600 }}
      >
        Удалить
      </Button>

      <Button 
        variant="outlined" 
        onClick={onBack}
        sx={{ color: "#667eea", borderColor: "#667eea", fontWeight: 600, "&:hover": { borderColor: "#764ba2", color: "#764ba2" } }}
      >
        Назад
      </Button>
    </Box>
  )
}

export default TaskActions
