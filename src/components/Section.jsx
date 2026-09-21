import Box from "@mui/material/Box"

export default function Section({ id, children }) {
  return (
    <Box
      id={id}
      sx={{
        scrollMarginTop: "90px", 
        py: { xs: 1, md: 2 },
      }}
    >
      {children}
    </Box>
  )
}