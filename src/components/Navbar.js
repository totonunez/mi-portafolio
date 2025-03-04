import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Portafolio
        </Typography>
        <Button color="inherit">
          <Link href="/">Inicio</Link>
        </Button>
        <Button color="inherit">
          <Link href="/proyectos">Proyectos</Link>
        </Button>
        <Button color="inherit">
          <Link href="/contacto">Contacto</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
