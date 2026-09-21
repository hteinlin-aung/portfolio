import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Container from "@mui/material/Container"
import Box from "@mui/material/Box"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import About from "./sections/About"
import Experience from "./sections/Experience"
import Projects from "./sections/Projects"
import Education from "./sections/Education"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"


const theme = createTheme({
  palette:{
    mode: "light",
    background: {
      default: "#fafafa"
    },
  },
  typography:{
    fontFamily: [

    ].join(","),
  },
  shape: { borderRadius: 14 },
}

)


export default function App(){

  return(
     <ThemeProvider theme={theme}>
      <CssBaseline />

      <Navbar />

      <Box
        sx={{
          animation: "pageFade 700ms ease-out both",
          "@keyframes pageFade": {
            from: { opacity: 0, transform: "translateY(10px)" },
            to: { opacity: 1, transform: "translateY(0px)" },
          },
          "@media (prefers-reduced-motion: reduce)": {
            animation: "none",
          },
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ py: 6 }}>
            <About />
            <Education />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </Box>
        </Container>
      </Box>

      <Footer />
    </ThemeProvider>
  )

}


