import React from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Paper,
  Avatar,
} from "@mui/material";
import { amber } from "@mui/material/colors";
import Image from "next/image";

export default function SobreMi() {
  return (
    <Box
      sx={{
        fontFamily: '"Times New Roman", Times, serif',
        backgroundColor: "#0b3556",
        py: 8,
        position: "relative",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={4} textAlign="center">
            <Avatar
              src="/images/sobremi.png"
              alt="Foto de perfil"
              sx={{
                width: 150,
                height: 150,
                mx: "auto",
                bgcolor: amber[100],
                border: "4px solid #8C6239",
              }}
            />
          </Grid>

          <Grid item xs={12} md={8}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{
                color: "#f8e8c9",
                fontFamily: '"Times New Roman", Times, serif',
              }}
            >
              Sobre mí
            </Typography>
            <Typography
              sx={{
                color: "#fff",
              }}
              paragraph
            >
              Soy un ingeniero de software con sólida experiencia en desarrollo
              backend, especializado en frameworks como Laravel y NestJS, y con
              un dominio avanzado de lenguajes de programación como Python,
              JavaScript y PHP. Aunque mi enfoque principal ha sido el backend,
              también cuento con experiencia en el desarrollo frontend
              utilizando tecnologías como React y Vue, lo que me permite
              colaborar eficazmente en equipos full stack.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
              }}
              paragraph
            >
              Tengo conocimientos robustos en Machine Learning, aplicando
              diversas librerías especializadas como Scikit-learn, TensorFlow y
              Pandas para proyectos de análisis predictivo y automatización
              inteligente. Además, poseo experiencia en la implementación de
              soluciones sobre plataformas Cloud, integrando servicios para
              asegurar escalabilidad, seguridad y eficiencia operativa.
            </Typography>

            <Grid container spacing={2} mt={2}>
              {[
                { name: "React", icon: "/icons/react.svg" },
                { name: "PHP", icon: "/icons/php.svg" },
                { name: "Node.js", icon: "/icons/nodejs.svg" },
                { name: "Postgresql", icon: "/icons/postgresql.svg" },
              ].map((tech) => (
                <Grid item xs={6} md={3} key={tech.name}>
                  <Paper
                    sx={{
                      p: 2,
                      textAlign: "center",
                      backgroundColor: "#234966",
                      borderRadius: "10px",
                      color: "#fff",
                    }}
                  >
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={50}
                        height={50}
                      />
                    </Box>
                    <Typography variant="subtitle1" mt={1}>
                      {tech.name}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>

            <Button
              variant="contained"
              href="mailto:cristobalnunezvera@icloud.com"
              sx={{
                mt: 4,
                backgroundColor: "#8C6239",
                "&:hover": { backgroundColor: "#A67C52" },
              }}
            >
              Contáctame por correo
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
