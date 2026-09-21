import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"

export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <Card
      elevation={0}
      sx={{
        height: "100%",
        borderRadius: 2.5,
        p: 0.5,
        bgcolor: "rgba(255,255,255,0.92)",
        border: "1px solid rgba(15, 23, 42, 0.06)",
        boxShadow: "0 18px 55px rgba(15, 23, 42, 0.08)",
        transition: "transform 180ms ease, box-shadow 180ms ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 30px 80px rgba(15, 23, 42, 0.12)",
        },
      }}
    >
      <CardContent sx={{ p: 2.5 }}>
        <Typography variant="h6" sx={{ fontWeight: 950, letterSpacing: 0.2 }}>
          {title}
        </Typography>

        <Typography sx={{ mt: 1.1, opacity: 0.78, lineHeight: 1.7 }}>
          {description}
        </Typography>

        <Stack
          direction="row"
          spacing={1}
          sx={{ mt: 2, flexWrap: "wrap" }}
        >
          {tech.map((t) => (
            <Chip
              key={t}
              label={t}
              size="small"
              sx={{
                mb: 1,
                borderRadius: 999,
                fontWeight: 700,
                bgcolor:
                  t === "React"
                    ? "#e0f2fe"
                    : t === "JavaScript"
                    ? "#fef9c3"
                    : t === "HTML"
                    ? "#ffe4e6"
                    : t === "CSS"
                    ? "#ede9fe"
                    : t === "MySQL"
                    ? "#e0f2fe"
                    : t === "PHP"
                    ? "#ecfeff"
                    : t === "XAMPP"
                    ? "#fff7ed"
                    : t === "Vite"
                    ? "#f3e8ff"
                    : t === "MUI"
                    ? "#e0f2fe"
                    : "rgba(2,132,199,0.10)",
                color: "#0f172a",
                border: "1px solid",
                borderColor:
                  t === "JavaScript"
                    ? "#fde047"
                    : t === "React"
                    ? "#38bdf8"
                    : t === "HTML"
                    ? "#fb7185"
                    : t === "CSS"
                    ? "#a78bfa"
                    : t === "MySQL"
                    ? "#38bdf8"
                    : t === "PHP"
                    ? "#06b6d4"
                    : t === "XAMPP"
                    ? "#fdba74"
                    : t === "Vite"
                    ? "#c084fc"
                    : t === "MUI"
                    ? "#38bdf8"
                    : "rgba(2,132,199,0.25)",
              }}
            />
          ))}
        </Stack>
      </CardContent>

      <CardActions sx={{ px: 2.5, pb: 2.5, pt: 0 }}>
        <Box sx={{ display: "flex", gap: 1 }}>
          {github ? (
            <Button
              variant="outlined"
              size="small"
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                fontWeight: 800,
                borderRadius: 2,
              }}
            >
              GitHub
            </Button>
          ) : null}

          {demo ? (
            <Button
              variant="contained"
              size="small"
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                textTransform: "none",
                fontWeight: 900,
                borderRadius: 2,
                bgcolor: "#22c55e",
                color: "white",
                "&:hover": { bgcolor: "#16a34a" },
              }}
            >
              Demo
            </Button>
          ) : null}
        </Box>
      </CardActions>
    </Card>
  )
}