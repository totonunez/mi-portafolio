import { Box, Container, Typography, Link } from "@mui/material";

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: "#0D47A1", color: "white", py: 3, mt: 4 }}>
      <Container maxWidth="lg" sx={{ textAlign: "center" }}>
        <Typography variant="body1">
          © {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.
        </Typography>
        <Typography variant="body2">
          Desarrollado por{" "}
          <Link href="https://tuportafolio.com" color="inherit" underline="hover">
            Tu Nombre
          </Link>
        </Typography>
      </Container>
    </Box>
  );
}
