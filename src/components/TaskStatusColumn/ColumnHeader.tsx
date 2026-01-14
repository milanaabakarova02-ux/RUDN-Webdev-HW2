import { Box, Typography } from "@mui/material"

type ColumnHeaderProps = {
  title: string
  count: number
}

const ColumnHeader = ({ title, count }: ColumnHeaderProps) => {
  const getColumnColor = (columnTitle: string) => {
    if (columnTitle === "К выполнению") return "#FF6B6B"
    if (columnTitle === "В работе") return "#FFD93D"
    if (columnTitle === "Выполнено") return "#6BCB77"
    return "#667eea"
  }

  const color = getColumnColor(title)

  return (
    <Box sx={{ display: "flex", alignItems: "center", marginBottom: 3 }}>
      <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: color, marginRight: 1.5 }} />
      <Typography sx={{ fontWeight: 700, color: "#333", fontSize: 15, textTransform: "uppercase", letterSpacing: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ marginLeft: "auto", fontWeight: 600, color: color, fontSize: 13 }}>
        {count}
      </Typography>
    </Box>
  )
}

export default ColumnHeader
