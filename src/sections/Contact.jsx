import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Box from "@mui/material/Box"
import Divider from "@mui/material/Divider"
import Tooltip from "@mui/material/Tooltip"

import Section from "../components/Section"
import SectionTitle from "../components/SectionTitle"

import GitHubIcon from "@mui/icons-material/GitHub"
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import EmailIcon from "@mui/icons-material/Email"

const links = [
  {
    key: "github",
    href: "https://github.com/hteinlin-aung",
    icon: <GitHubIcon fontSize="medium" />,
    title: "GitHub",
    subtitle: "View my projects",
  },
  {
    key: "linkedin",
    href: "https://www.linkedin.com/in/htainlin-aung-9a7ba7272/",
    icon: <LinkedInIcon fontSize="medium" />,
    title: "LinkedIn",
    subtitle: "Connect professionally",
  },
  {
    key: "email",
    href: "mailto:hteinlin1124@gmail.com",
    icon: <EmailIcon fontSize="medium" />,
    title: "Email",
    subtitle: "Send me a message",
  },
]

export default function Contact() {
    return (
        <Section id="contact" variant="paper">
        <SectionTitle
            title="Contact"
            subtitle="The quickest ways to reach me."
        />

        <Paper
            elevation={0}
            sx={{
            p: { xs: 2.5, md: 3 },
            borderRadius: 2.5,
            bgcolor: "rgba(255,255,255,0.92)",
            border: "1px solid rgba(15, 23, 42, 0.06)",
            boxShadow: "0 18px 55px rgba(15, 23, 42, 0.08)",
            }}
        >
        
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 2,
                flexWrap: "wrap",
            }}
            >
            <Box>
                <Typography sx={{ fontWeight: 950, fontSize: 18 }}>Let’s connect</Typography>
                <Typography sx={{ opacity: 0.7, mt: 0.4 }}>
                  Choose any platform below — I usually reply within a day.
                </Typography>
            </Box>


            </Box>

        <Divider sx={{ my: 2.5 }} />

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
            gap: 1.6,
          }}
        >
          {links.map((item) => (
            <Tooltip
              key={item.key}
              title={item.href.startsWith("mailto:") ? "Open email" : "Open in new tab"}
              arrow
            >
              <Box
                component="a"
                href={item.href}
                target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                sx={{ textDecoration: "none", color: "inherit" }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    height: "100%",
                    p: 2.1,
                    borderRadius: 3,
                    border: "1px solid rgba(255, 255, 255, 0.35)",
                    background:
                      "linear-gradient(135deg, rgba(255,255,255,0.62), rgba(255,255,255,0.22))",
                    backdropFilter: "blur(14px)",
                    WebkitBackdropFilter: "blur(14px)",
                    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.10)",
                    transition: "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                    "&:hover": {
                      transform: "translateY(-4px)",
                      boxShadow: "0 24px 55px rgba(15, 23, 42, 0.16)",
                      borderColor: "rgba(14, 165, 233, 0.45)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={1.4} alignItems="center">
                    <Box
                      sx={{
                        width: 46,
                        height: 46,
                        borderRadius: 3,
                        display: "grid",
                        placeItems: "center",
                        background:
                          "linear-gradient(135deg, rgba(14,165,233,0.22), rgba(14,165,233,0.08))",
                        border: "1px solid rgba(14, 165, 233, 0.28)",
                        boxShadow: "0 10px 24px rgba(14, 165, 233, 0.12)",
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box sx={{ minWidth: 0 }}>
                      <Typography sx={{ fontWeight: 950, lineHeight: 1.1 }}>
                        {item.title}
                      </Typography>
                      <Typography sx={{ opacity: 0.72, fontSize: 13, mt: 0.35 }}>
                        {item.subtitle}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Box>
            </Tooltip>
          ))}
        </Box>

      </Paper>
    </Section>
  )
}