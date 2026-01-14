import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router"
import TaskIcon from "@mui/icons-material/Task"

const AppHeader = () => {
  const navigate = useNavigate()

  const goToBoard = () => {
    navigate("/board")
  }

  const goToCreate = () => {
    navigate("/create")
  }

  return (
    <AppBar position="static" sx={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
      <Toolbar>
        <TaskIcon sx={{ marginRight: 1, fontSize: 28 }} />
        <Typography sx={{ marginLeft: 1, marginRight: "auto", fontWeight: 700, fontSize: 22 }}>
          Доска задач
        </Typography>
        <Button 
          color="inherit" 
          onClick={goToBoard}
          sx={{ fontWeight: 600, fontSize: 15, "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" } }}
        >
          Все задачи
        </Button>
        <Button 
          color="inherit" 
          onClick={goToCreate} 
          sx={{ marginLeft: 2, fontWeight: 600, fontSize: 15, "&:hover": { backgroundColor: "rgba(255,255,255,0.2)" } }}
        >
          Создать задачу
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default AppHeader
