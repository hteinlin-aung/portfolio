import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },

]

function scrollToId(id) {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: "smooth", block: "start" })
}

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.85)",
        color: "text.primary",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: 800, letterSpacing: 0.2 }}>
          Htain Lin Aung
        </Typography>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              onClick={() => scrollToId(item.id)}
              sx={{ textTransform: "none", fontWeight: 600 }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", gap: 0.5 }}>
          
            <IconButton aria-label="GitHub" href="https://github.com/hteinlin-aung" target="_blank">
                <GitHubIcon />
            </IconButton>
            <IconButton aria-label="LinkedIn" href="https://www.linkedin.com/in/htainlin-aung-9a7ba7272/" target="_blank">
                <LinkedInIcon />
            </IconButton>
            <IconButton aria-label="Email" href="mailto:hteinlin1124@gmail.com">
                <EmailIcon />
            </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  )
}