import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"
import Divider from "@mui/material/Divider"

import SecurityIcon from "@mui/icons-material/Security"
import NetworkCheckIcon from "@mui/icons-material/NetworkCheck"
import StorageIcon from "@mui/icons-material/Storage"
import CodeIcon from "@mui/icons-material/Code"
import ArchitectureIcon from "@mui/icons-material/Architecture"
import SettingsIcon from "@mui/icons-material/Settings"

import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"

export default function Education() {
  return (
    <Section id="education" variant="tint">
      <SectionTitle
        title="Education"
        subtitle="Academic background."
      />

      <Paper
        elevation={0}
        sx={{
          p: { xs: 2.5, md: 3 },
        mb: { xs: 5, md: 4 },
          borderRadius: 2.5,
          bgcolor: "rgba(255,255,255,0.88)",
          border: "1px solid rgba(15, 23, 42, 0.06)",
          boxShadow: "0 18px 55px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
       
          <Box sx={{ pt: 0.6 }}>
            <Box
              sx={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                bgcolor: "#0ea5e9",
                boxShadow: "0 10px 20px rgba(14,165,233,0.35)",
              }}
            />
            <Box
              sx={{
                width: 2,
                height: { xs: 120, md: 140 },
                mx: "auto",
                mt: 1,
                borderRadius: 999,
                bgcolor: "rgba(14,165,233,0.25)",
              }}
            />
          </Box>

         
          <Box sx={{ flex: 1 }}>
            <Typography sx={{ fontWeight: 950, fontSize: 18 }}>
              Stamford International University
            </Typography>

            <Typography sx={{ mt: 0.6, opacity: 0.85 }}>
              Bachelor’s Degree — <b>(Information Technology)</b>
            </Typography>

            <Typography sx={{ mt: 0.4, opacity: 0.65 }}>
              2023 – 2026 · Completed, graduating December 2026
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography sx={{ fontWeight: 900, mb: 1 }}>
              Relevant Coursework
            </Typography>

            <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap" }}>
              {[
                {
                  name: "Networking",
                  icon: <NetworkCheckIcon fontSize="small" />,
                  bg: "#e0f2fe",
                  border: "#38bdf8",
                },
                {
                  name: "Information Security",
                  icon: <SecurityIcon fontSize="small" />,
                  bg: "#fef9c3",
                  border: "#fde047",
                },
                {
                  name: "System Administration",
                  icon: <SettingsIcon fontSize="small" />,
                  bg: "#ede9fe",
                  border: "#a78bfa",
                },
                {
                  name: "Software Architecture",
                  icon: <ArchitectureIcon fontSize="small" />,
                  bg: "#ecfeff",
                  border: "#06b6d4",
                },
                {
                  name: "Database Systems",
                  icon: <StorageIcon fontSize="small" />,
                  bg: "#e0f2fe",
                  border: "#38bdf8",
                },
                {
                  name: "Web Development",
                  icon: <CodeIcon fontSize="small" />,
                  bg: "#fff7ed",
                  border: "#fdba74",
                },
              ].map((c) => (
                <Chip
                  key={c.name}
                  icon={c.icon}
                  label={c.name}
                  sx={{
                    mb: 1,
                    borderRadius: 999,
                    bgcolor: c.bg,
                    border: `1px solid ${c.border}`,
                    fontWeight: 700,
                    px: 1,
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Box>
      </Paper>
    </Section>
  )
}