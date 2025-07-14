import {
  Box,
  Container,
  Typography,
  IconButton,
  Stack,
  Divider,
  Grid,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box className="bg-gray-900 relative overflow-hidden py-20 px-4 text-gray-300">
      {/* Círculos de fondo */}

      <Container maxWidth="lg" className="relative z-10">
        <Grid container spacing={4} alignItems="center">
          {/* Columna Izquierda: Nombre y Descripción */}
          <Grid item xs={12} md={6} sx={{ mb: 2 }}>
            <Typography
              variant="h4"
              component="h2"
              sx={{ fontFamily: '"Times New Roman", Times, serif' }}
              className="text-white font-bold"
            >
              Cristóbal Eduardo Núñez Vera
            </Typography>
            <Typography variant="subtitle1" className="text-gray-400 mt-2">
              Software Engineer & Backend Developer
            </Typography>
          </Grid>

          {/* Columna Derecha: Íconos Sociales */}
          <Grid item xs={12} md={6} sx={{ mb: 2 }}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <IconButton
                component="a"
                href="https://www.linkedin.com/in/cristobalnunezvera/"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://github.com/totonunez"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://x.com/CritobalVera"
                target="_blank"
                rel="noopener"
                sx={{ color: "white" }}
              >
                <TwitterIcon />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>

        <Divider className="my-6 border-gray-700 bg-amber-50" />

        <Grid container spacing={4} alignItems="center" sx={{ mt: 2 }}>
          {/* Columna Izquierda: Nombre y Descripción */}
          <Grid item xs={12} md={6}>
            <Typography variant="body2" className="text-gray-400 ">
              © 2025 Cristóbal Eduardo Núñez Vera. Todos los derechos
              reservados.
            </Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack
              direction="row"
              spacing={2}
              justifyContent={{ xs: "flex-start", md: "flex-end" }}
            >
              <a href="#inicio" className="hover:text-white transition">
                Inicio
              </a>
              <a href="#proyectos" className="hover:text-white transition">
                Proyectos
              </a>
              <a href="#sobre-mi" className="hover:text-white transition">
                Sobre mí
              </a>
              <a href="#contacto" className="hover:text-white transition">
                Contacto
              </a>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
