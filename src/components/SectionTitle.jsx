import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"

export default function SectionTitle({ title, subtitle }) {
  return (
    <Box sx={{ mb: 3 }}>
      <Typography variant="h4" sx={{ fontWeight: 900 }}>
        {title}
      </Typography>
      {subtitle ? (
        <Typography sx={{ mt: 0.8, opacity: 0.75 }}>{subtitle}</Typography>
      ) : null}
    </Box>
  )
}