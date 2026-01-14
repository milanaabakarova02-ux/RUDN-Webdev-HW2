import { Box, TextField, Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router"
import { useQueryClient } from "@tanstack/react-query"
import {
  getTasksFromMemory,
  saveTasksToMemory,
} from "../../storage/tasksInMemoryStorage"

const CreateNewTaskPage = () => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const handleCreate = () => {
    if (title === "") {
      return
    }

    const tasks = getTasksFromMemory()
    let newId = 1
    
    if (tasks.length > 0) {
      const maxId = Math.max(...tasks.map((t) => t.taskId))
      newId = maxId + 1
    }

    const newTask = {
      taskId: newId,
      taskTitle: title,
      taskDescription: description,
      taskCreationDate: new Date(),
      taskStatus: 0,
    }

    const updatedTasks = [...tasks, newTask]
    saveTasksToMemory(updatedTasks)
    queryClient.invalidateQueries({ queryKey: ["tasksList"] })

    navigate("/board")
  }

  const handleCancel = () => {
    navigate("/board")
  }

  return (
    <Box sx={{ padding: 4, backgroundColor: "#fafbff", minHeight: "calc(100vh - 64px)", display: "flex", justifyContent: "center", alignItems: "flex-start", paddingTop: 8 }}>
      <Box sx={{ width: "100%", maxWidth: 500, backgroundColor: "white", padding: 4, borderRadius: 3, boxShadow: "0 8px 30px rgba(102, 126, 234, 0.15)" }}>
        <TextField
          label="Название задачи"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          sx={{ marginBottom: 3 }}
          variant="outlined"
        />

        <TextField
          label="Описание задачи"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          multiline
          rows={4}
          sx={{ marginBottom: 3 }}
          variant="outlined"
        />

        <Box sx={{ display: "flex", gap: 2 }}>
          <Button 
            variant="contained" 
            onClick={handleCreate} 
            sx={{ 
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              fontWeight: 600,
              paddingX: 4
            }}
          >
            Создать
          </Button>

          <Button
            variant="outlined"
            onClick={handleCancel}
            sx={{ 
              color: "#667eea",
              borderColor: "#667eea",
              fontWeight: 600,
              "&:hover": { borderColor: "#764ba2", color: "#764ba2" }
            }}
          >
            Отмена
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

export default CreateNewTaskPage
