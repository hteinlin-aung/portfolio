import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import GitHubIcon from "@mui/icons-material/GitHub"

import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <Section id="projects" variant="plain">
      <SectionTitle
        title="Project Showcase"
        subtitle="Commercial applications I've built and shipped."
      />

      <Box sx={{ mt: 1, mb: 2.5 }}>
        <Grid container spacing={2.5}>
          {projects.map((p) => (
            <Grid key={p.title} size={{ xs: 12, md: 6 }}>
              <ProjectCard {...p} />
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          mb: { xs: 5, md: 4 },
          p: { xs: 2.5, md: 3 },
          borderRadius: 2.5,
          textAlign: "center",
          bgcolor: "rgba(255,255,255,0.92)",
          border: "1px solid rgba(15, 23, 42, 0.06)",
          boxShadow: "0 18px 55px rgba(15, 23, 42, 0.08)",
        }}
      >
        <Typography sx={{ opacity: 0.78, lineHeight: 1.7 }}>
         View more projects on GitHub, including personal projects and projects that I'm currently working on.
        </Typography>

        <Button
          variant="outlined"
          href="https://github.com/hteinlin-aung"
          target="_blank"
          rel="noopener noreferrer"
          startIcon={<GitHubIcon />}
          sx={{ mt: 2, textTransform: "none", fontWeight: 800, borderRadius: 2 }}
        >
          View on GitHub
        </Button>
      </Box>
    </Section>
  )
}
