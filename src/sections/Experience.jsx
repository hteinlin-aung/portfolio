import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Chip from "@mui/material/Chip"

import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"
import { experience } from "../data/experience"

export default function Experience() {
  return (
    <Section id="experience" variant="plain">
      <SectionTitle
        title="Experience"
        subtitle="Where I've worked and volunteered."
      />

      <Stack spacing={2.5} sx={{ mt: 1, mb: { xs: 5, md: 4 } }}>
        {experience.map((job) => (
          <Paper
            key={job.role + job.org}
            elevation={0}
            sx={{
              p: { xs: 2.5, md: 3 },
              borderRadius: 2.5,
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
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "baseline",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 950, letterSpacing: 0.2 }}>
                {job.role}
              </Typography>

              <Typography sx={{ opacity: 0.6, fontWeight: 700 }}>
                {job.period}
              </Typography>
            </Box>

            <Typography sx={{ mt: 0.4, fontWeight: 700, opacity: 0.85 }}>
              {job.org} — {job.location}
            </Typography>

            <Box component="ul" sx={{ mt: 1.4, mb: 0, pl: 2.4 }}>
              {job.points.map((point) => (
                <Typography
                  component="li"
                  key={point}
                  sx={{ opacity: 0.78, lineHeight: 1.7, mb: 0.8 }}
                >
                  {point}
                </Typography>
              ))}
            </Box>

            {job.tech.length > 0 ? (
              <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: "wrap" }}>
                {job.tech.map((t) => (
                  <Chip
                    key={t}
                    label={t}
                    size="small"
                    sx={{
                      mb: 1,
                      borderRadius: 999,
                      fontWeight: 700,
                      bgcolor: "rgba(2,132,199,0.10)",
                      color: "#0f172a",
                      border: "1px solid",
                      borderColor: "rgba(2,132,199,0.25)",
                    }}
                  />
                ))}
              </Stack>
            ) : null}
          </Paper>
        ))}
      </Stack>
    </Section>
  )
}
