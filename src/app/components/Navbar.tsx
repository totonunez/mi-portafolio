import { AppBar, Toolbar, Box, Button, Container } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#0D47A1" }}> {/* Azul oscuro */}
      <Toolbar>
        {/* Contenedor centrado con los botones */}
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Box sx={{ display: "flex", gap: 3 }}>
            <Button color="inherit" component={Link} href="/">Inicio</Button>
            <Button color="inherit" component={Link} href="/proyectos">Proyectos</Button>
            <Button color="inherit" component={Link} href="/contacto">Contacto</Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
