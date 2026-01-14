import { Box, Typography, Button, Card, CardContent } from "@mui/material"
import { useParams, useNavigate } from "react-router"
import { useQueryClient } from "@tanstack/react-query"
import {
  getTasksFromMemory,
  saveTasksToMemory,
} from "../../storage/tasksInMemoryStorage"

const TaskDetailsPage = () => {
  const { taskId } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const tasks = getTasksFromMemory()
  const task = tasks.find((t) => t.taskId === Number(taskId))

  if (!task) {
    return (
      <Box sx={{ padding: 4 }}>
        <Typography>Задача не найдена</Typography>
      </Box>
    )
  }

  const getStatusName = (status: number) => {
    if (status === 0) return "К выполнению"
    if (status === 1) return "В работе"
    if (status === 2) return "Выполнено"
    return "Неизвестно"
  }

  const handleChangeStatus = (newStatus: number) => {
    const updatedTasks = tasks.map((t) => {
      if (t.taskId === task.taskId) {
        return { ...t, taskStatus: newStatus }
      }
      return t
    })

    saveTasksToMemory(updatedTasks)
    queryClient.invalidateQueries({ queryKey: ["tasksList"] })
    navigate("/board")
  }

  const handleDelete = () => {
    const updatedTasks = tasks.filter((t) => t.taskId !== task.taskId)
    saveTasksToMemory(updatedTasks)
    queryClient.invalidateQueries({ queryKey: ["tasksList"] })
    navigate("/board")
  }

  const handleBack = () => {
    navigate("/board")
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "#fafbff", minHeight: "calc(100vh - 64px)", display: "flex", justifyContent: "center", paddingTop: 6 }}>
      <Card sx={{ width: "100%", maxWidth: 600, boxShadow: "0 8px 30px rgba(102, 126, 234, 0.15)", borderRadius: 3 }}>
        <CardContent sx={{ padding: 4 }}>
          <Typography sx={{ fontWeight: 700, marginBottom: 3, fontSize: 24, color: "#667eea" }}>
            Задача #{task.taskId}
          </Typography>

          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: "gray", fontSize: 13, fontWeight: 600, marginBottom: 0.5 }}>
              НАЗВАНИЕ
            </Typography>
            <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#333" }}>
              {task.taskTitle}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: "gray", fontSize: 13, fontWeight: 600, marginBottom: 0.5 }}>
              ОПИСАНИЕ
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#555" }}>
              {task.taskDescription ? task.taskDescription : "Нет описания"}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 2 }}>
            <Typography sx={{ color: "gray", fontSize: 13, fontWeight: 600, marginBottom: 0.5 }}>
              СТАТУС
            </Typography>
            <Typography sx={{ fontSize: 15, fontWeight: 600, color: "#667eea" }}>
              {getStatusName(task.taskStatus)}
            </Typography>
          </Box>

          <Box sx={{ marginBottom: 4 }}>
            <Typography sx={{ color: "gray", fontSize: 13, fontWeight: 600, marginBottom: 0.5 }}>
              ДАТА СОЗДАНИЯ
            </Typography>
            <Typography sx={{ fontSize: 15, color: "#555" }}>
              {task.taskCreationDate.toLocaleDateString("ru-RU")}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            {task.taskStatus !== 0 && (
              <Button
                variant="contained"
                onClick={() => handleChangeStatus(0)}
                sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", fontWeight: 600 }}
              >
                К выполнению
              </Button>
            )}

            {task.taskStatus !== 1 && (
              <Button
                variant="contained"
                onClick={() => handleChangeStatus(1)}
                sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", fontWeight: 600 }}
              >
                В работе
              </Button>
            )}

            {task.taskStatus !== 2 && (
              <Button
                variant="contained"
                onClick={() => handleChangeStatus(2)}
                sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", fontWeight: 600 }}
              >
                Выполнено
              </Button>
            )}

            <Button 
              variant="contained" 
              color="error" 
              onClick={handleDelete}
              sx={{ fontWeight: 600 }}
            >
              Удалить
            </Button>

            <Button 
              variant="outlined" 
              onClick={handleBack}
              sx={{ color: "#667eea", borderColor: "#667eea", fontWeight: 600, "&:hover": { borderColor: "#764ba2", color: "#764ba2" } }}
            >
              Назад
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default TaskDetailsPage
