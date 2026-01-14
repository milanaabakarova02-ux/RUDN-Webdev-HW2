import { Typography } from "@mui/material"

type TaskTitleProps = {
  title: string
}

const TaskTitle = ({ title }: TaskTitleProps) => {
  return (
    <Typography sx={{ color: "#333", fontWeight: 500, fontSize: 14, lineHeight: 1.4 }}>
      {title}
    </Typography>
  )
}

export default TaskTitle
