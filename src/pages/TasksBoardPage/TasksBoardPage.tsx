import { Box } from "@mui/material"
import { useTasksList } from "../../queries/tasksQueries"
import TaskStatusColumn from "../../components/TaskStatusColumn/TaskStatusColumn"

const TasksBoardPage = () => {
  const { data: allTasks } = useTasksList()

  const tasks = allTasks ? allTasks : []

  const toDoTasks = tasks.filter((task) => task.taskStatus === 0)
  const inProgressTasks = tasks.filter((task) => task.taskStatus === 1)
  const doneTasks = tasks.filter((task) => task.taskStatus === 2)

  return (
    <Box sx={{ padding: 4, display: "flex", gap: 4, backgroundColor: "#fafbff", minHeight: "calc(100vh - 64px)" }}>
      <TaskStatusColumn columnTitle="К выполнению" tasksForColumn={toDoTasks} />
      <TaskStatusColumn columnTitle="В работе" tasksForColumn={inProgressTasks} />
      <TaskStatusColumn columnTitle="Выполнено" tasksForColumn={doneTasks} />
    </Box>
  )
}

export default TasksBoardPage

