import { Routes, Route, Navigate } from "react-router"
import AppHeader from "./components/AppHeader/AppHeader"
import TasksBoardPage from "./pages/TasksBoardPage/TasksBoardPage"
import CreateNewTaskPage from "./pages/CreateNewTaskPage/CreateNewTaskPage"
import TaskDetailsPage from "./pages/TaskDetailsPage/TaskDetailsPage"

const App = () => {
  return (
    <>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Navigate to="/board" />} />
        <Route path="/board" element={<TasksBoardPage />} />
        <Route path="/create" element={<CreateNewTaskPage />} />
        <Route path="/task/:taskId" element={<TaskDetailsPage />} />
      </Routes>
    </>
  )
}

export default App
