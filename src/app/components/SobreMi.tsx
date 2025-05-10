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
import ReactIcon from "@/data/icons/react.svg"; // Asegúrate de importar correctamente tus íconos
import PHPIcon from "@/data/icons/php.svg";
import NodeIcon from "@/data/icons/nodejs.svg";
import PostgresIcon from "@/data/icons/postgresql.svg";
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
              Soy Cristóbal Núñez Vera, desarrollador frontend especializado en
              crear experiencias web atractivas y funcionales. Con más de 5 años
              de experiencia en el desarrollo web, me apasiona combinar diseño y
              tecnología para crear soluciones digitales innovadoras.
            </Typography>
            <Typography
              sx={{
                color: "#fff",
              }}
              paragraph
            >
              Mi enfoque se centra en la creación de interfaces intuitivas y
              responsivas, utilizando las últimas tecnologías como React, NextJS
              y herramientas modernas de desarrollo frontend.
            </Typography>

            <Grid container spacing={2} mt={2}>
              {[
                { name: "React", icon: ReactIcon },
                { name: "JavaScript", icon: PHPIcon },
                { name: "Node.js", icon: NodeIcon },
                { name: "Figma", icon: PostgresIcon },
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
