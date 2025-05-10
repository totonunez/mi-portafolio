"use client";

import React from "react";
import Image from "next/image";
import { Box, Typography, Button, Chip, Container, Paper } from "@mui/material";
import { styled } from "@mui/system";

const colors = {
  primaryBlue: "#1C3D5A",
  secondaryBeige: "#F4E8D3",
  waveCream: "#EFE1CD",
  buttonBrown: "#855C3D",
  white: "#FFFFFF",
};

const Wave = styled("div")({
  width: "100%",
  height: "100px",
  background: `linear-gradient(to right, ${colors.secondaryBeige} 50%, ${colors.waveCream})`,
  clipPath: "ellipse(55% 80% at 50% 0%)",
  marginTop: "-40px",
});
interface Proyecto {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imagenes: string[];
  icon: string;
  bgColor: string;
}

const ProjectUnitary = ({ proyecto }: { proyecto: Proyecto }) => {
  return (
    <Box
      sx={{ backgroundColor: colors.primaryBlue, color: colors.white, pb: 6 }}
    >
      <Container sx={{ textAlign: "center", pt: 8 }}>
        <Typography
          variant="h2"
          fontWeight="bold"
          gutterBottom
          sx={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          {proyecto.title}
        </Typography>

        <Box
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
          gap={1}
          my={2}
        >
          {proyecto.tech.map((tech: string, index: number) => (
            <Chip key={index} label={tech} color="primary" />
          ))}
        </Box>

        <Typography variant="h6" maxWidth={700} mx="auto" mb={4}>
          {proyecto.description}
        </Typography>

        <Box display="flex" justifyContent="center" gap={2}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: colors.buttonBrown,
              borderRadius: "25px",
              px: 4,
            }}
          >
            Ver galería
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: "white",
              borderColor: "white",
              borderRadius: "25px",
              px: 4,
            }}
          >
            Visitar sitio
          </Button>
        </Box>
      </Container>

      <Wave />

      <Box sx={{ backgroundColor: colors.secondaryBeige, py: 6 }}>
        <Container>
          <Paper
            elevation={3}
            sx={{ p: 4, borderRadius: "12px", backgroundColor: colors.white }}
          >
            <Typography
              variant="h5"
              fontWeight="bold"
              color={colors.primaryBlue}
              gutterBottom
            >
              Descripción del Proyecto
            </Typography>

            <Typography paragraph>{proyecto.description}</Typography>
          </Paper>
        </Container>
      </Box>

      <Box sx={{ backgroundColor: colors.secondaryBeige, py: 6 }}>
        <Container>
          <Typography
            variant="h4"
            fontWeight="bold"
            mt={7}
            sx={{ fontFamily: '"Times New Roman", Times, serif' }}
            color={colors.primaryBlue}
            gutterBottom
          >
            Galería del proyecto
          </Typography>

          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            gap={4}
            my={4}
          >
            {proyecto.imagenes.map((imagen: string, index: number) => (
              <Box
                key={index}
                sx={{
                  position: "relative",
                  width: { xs: "100%", sm: "100%", md: "70%" },
                  height: { xs: 300, sm: 400, md: 500 },
                  borderRadius: 3,
                  overflow: "hidden",
                  boxShadow: 4,
                }}
              >
                <Image
                  src={imagen}
                  alt={`Imagen ${index + 1} de ${proyecto.title}`}
                  fill
                  style={{ objectFit: "fill" }}
                />
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default ProjectUnitary;
