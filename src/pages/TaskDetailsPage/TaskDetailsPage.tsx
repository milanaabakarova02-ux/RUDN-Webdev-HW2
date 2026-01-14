import { Box, Typography, Card, CardContent } from "@mui/material"
import { useParams, useNavigate } from "react-router"
import { useQueryClient } from "@tanstack/react-query"
import {
  getTasksFromMemory,
  saveTasksToMemory,
} from "../../storage/tasksInMemoryStorage"
import TaskField from "../../components/TaskField/TaskField"
import StatusField from "../../components/StatusField/StatusField"
import TaskActions from "../../components/TaskActions/TaskActions"

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

          <TaskField label="НАЗВАНИЕ" value={task.taskTitle} />
          <TaskField label="ОПИСАНИЕ" value={task.taskDescription ? task.taskDescription : "Нет описания"} />
          <StatusField status={task.taskStatus} />
          <TaskField label="ДАТА СОЗДАНИЯ" value={task.taskCreationDate.toLocaleDateString("ru-RU")} />

          <Box sx={{ marginBottom: 4 }} />

          <TaskActions
            currentStatus={task.taskStatus}
            onChangeStatus={handleChangeStatus}
            onDelete={handleDelete}
            onBack={handleBack}
          />
        </CardContent>
      </Card>
    </Box>
  )
}

export default TaskDetailsPage
