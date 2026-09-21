import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Chip from "@mui/material/Chip"
import Box from "@mui/material/Box"

import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import { skills } from "../data/skills"

import CodeIcon from "@mui/icons-material/Code"
import DnsIcon from "@mui/icons-material/Dns"
import TerminalIcon from "@mui/icons-material/Terminal"
import BuildIcon from "@mui/icons-material/Build"

const groupStyle = {
  Frontend: { icon: CodeIcon, color: "#0ea5e9" },
  "Backend & APIs": { icon: DnsIcon, color: "#22c55e" },
  Languages: { icon: TerminalIcon, color: "#8b5cf6" },
  "Tools & Workflow": { icon: BuildIcon, color: "#f59e0b" },
}

export default function Skills() {
  return (
    <Section id="skills" variant="tint">
      <SectionTitle
        title="Skills"
        subtitle="Skills and tools that I've acquired and using."
      />

      <Box sx={{ mb: { xs: 5, md: 4 } }}>
        <Grid container spacing={2.5}>
          {skills.map((group) => {
            const style = groupStyle[group.title]
            const Icon = style ? style.icon : CodeIcon
            const color = style ? style.color : "#0ea5e9"

            return (
              <Grid key={group.title} size={{ xs: 12, md: 6 }}>
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 2.5,
                    borderRadius: 2.5,
                    bgcolor: "rgba(255,255,255,0.92)",
                    border: "1px solid rgba(15, 23, 42, 0.06)",
                    boxShadow: "0 18px 50px rgba(15, 23, 42, 0.06)",
                    transition: "transform 180ms ease, box-shadow 180ms ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 28px 70px rgba(15, 23, 42, 0.10)",
                    },
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.2, mb: 2 }}>
                    <Box
                      sx={{
                        width: 34,
                        height: 34,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 2,
                        bgcolor: color + "1f",
                      }}
                    >
                      <Icon sx={{ color: color, fontSize: 19 }} />
                    </Box>

                    <Typography sx={{ fontWeight: 900, fontSize: 18 }}>
                      {group.title}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                    {group.items.map((item) => (
                      <Chip
                        key={item}
                        label={item}
                        size="small"
                        sx={{
                          borderRadius: 999,
                          fontWeight: 700,
                          bgcolor: "rgba(15, 23, 42, 0.04)",
                          color: "#0f172a",
                          border: "1px solid rgba(15, 23, 42, 0.08)",
                        }}
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            )
          })}
        </Grid>
      </Box>
    </Section>
  )
}
