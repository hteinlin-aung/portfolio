// import Box from "@mui/material/Box"
// import Container from "@mui/material/Container"
// import Typography from "@mui/material/Typography"

// export default function Footer() {
//   return (
//     <Box sx={{ borderTop: "1px solid", borderColor: "divider", py: 3 }}>
//       <Container maxWidth="lg">
//         <Typography sx={{ opacity: 0.7 }}>
//           © {new Date().getFullYear()} Htain Lin Aung. All rights reserved.
//         </Typography>
//       </Container>
//     </Box>
//   )
// }



import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
// import Stack from "@mui/material/Stack"
// import IconButton from "@mui/material/IconButton"
import Divider from "@mui/material/Divider"

// import GitHubIcon from "@mui/icons-material/GitHub"
// import LinkedInIcon from "@mui/icons-material/LinkedIn"
// import EmailIcon from "@mui/icons-material/Email"

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 1,
        borderTop: "1px solid",
        borderColor: "rgba(15, 23, 42, 0.10)",
        background:
          "linear-gradient(180deg, rgba(14,165,233,0.05) 0%, rgba(255,255,255,0.0) 100%)",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ py: 2 }}>
          

          <Divider sx={{ my: 1, borderColor: "rgba(15, 23, 42, 0.10)" }} />

          <Typography sx={{ opacity: 0.65, fontSize: 15 }}>
            © {new Date().getFullYear()} Htain Lin Aung. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}