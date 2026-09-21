import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Paper from "@mui/material/Paper"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"

import Section from "../components/Section"
import profileImg from "../assets/Profile.jpg" 

export default function About() {
  return (
    <Section id="about">

      <Box
        sx={{
          position: "relative",
          mb: { xs: 5, md: 5},
          overflow: "hidden",
          borderRadius: 4,
          px: { xs: 3, md: 6 },
          py: { xs: 7, md: 9 },
          background:
            "linear-gradient(135deg, #0ea5e9 0%, #2563eb 55%, #1d4ed8 100%)",
          color: "white",
          boxShadow: "0 25px 60px rgba(2,132,199,0.35)",

          "&::before": {
            content: '""',
            position: "absolute",
            width: 260,
            height: 260,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.18)",
            top: -60,
            left: -60,
          },

          "&::after": {
            content: '""',
            position: "absolute",
            width: 220,
            height: 220,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.14)",
            bottom: -80,
            right: -60,
          },
        }}
      >

        <Grid container spacing={4} alignItems="center">

          {/* LEFT TEXT */}
          <Grid size={{ xs: 12, md: 7 }}>

            <Typography variant="h3" sx={{ fontWeight: 950, lineHeight: 1.1 }}>
              Htain Lin Aung
            </Typography>

            <Typography sx={{ mt: 1, fontSize: 18, opacity: 0.85 }}>
              Frontend Developer  •  React & JavaScript
            </Typography>

            <Typography sx={{ mt: 2, fontSize: 16, opacity: 0.9, maxWidth: 620 }}>
              Final-year IT student at Stamford International University, graduating
              December 2026. I build responsive React applications — including a
              live commercial website and a business management system shipped
              during my internship at NK Software House.
            </Typography>

            <Stack direction="row" spacing={1.8} sx={{ mt: 3 }}>

              <Button
                variant="contained"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "#2563eb",

                  "&:hover": {
                    bgcolor: "#f1f5f9",
                  },
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                href="#contact"
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  color: "white",
                  borderColor: "white",

                  "&:hover": {
                    borderColor: "#e0f2fe",
                  },
                }}
              >
                Contact
              </Button>

            </Stack>
          </Grid>

    
          <Grid size={{ xs: 12, md: 5 }} sx={{ textAlign: "center" }}>

            <Avatar
              src={profileImg}
              alt="Htain Lin Aung"
              sx={{
                width: 250,
                height: 250,
                mx: "auto",
                border: "6px solid rgba(255,255,255,0.4)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
              }}
            />

            <Paper
              elevation={0}
              sx={{
                mt: 3,
                p: 2,
                borderRadius: 2,
                bgcolor: "rgba(255,255,255,0.15)",
                color: "white",
              }}
            >
              <Typography sx={{ fontWeight: 700 }}>
                Quick Info
              </Typography>

              <Typography sx={{ opacity: 0.85 }}>
                Location: Bangkok, Thailand
              </Typography>

              <Typography sx={{ opacity: 0.85 }}>
                Focus: React, JavaScript, REST APIs
              </Typography>

              <Typography sx={{ opacity: 0.85 }}>
                Email: hteinlin1124@gmail.com
              </Typography>
            </Paper>

          </Grid>

        </Grid>
      </Box>
    </Section>
  )
}