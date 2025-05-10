import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Link from "next/link";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import InsightsIcon from "@mui/icons-material/Insights";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import { ArrowForwardIos } from "@mui/icons-material";
import proyectos from "../../data/proyectos.json";
import type { ReactElement } from "react";

const iconMap: { [key: string]: ReactElement } = {
  LaptopMacIcon: <LaptopMacIcon sx={{ fontSize: 50, color: "white" }} />,
  StorefrontIcon: <StorefrontIcon sx={{ fontSize: 50, color: "white" }} />,
  SmartphoneIcon: <SmartphoneIcon sx={{ fontSize: 50, color: "white" }} />,
  InsightsIcon: <InsightsIcon sx={{ fontSize: 50, color: "white" }} />,
  QuestionAnswerIcon: (
    <QuestionAnswerIcon sx={{ fontSize: 50, color: "white" }} />
  ),
  LocalMoviesIcon: <LocalMoviesIcon sx={{ fontSize: 50, color: "white" }} />,
};

const projects = proyectos;

export default function ProjectsSection() {
  return (
    <Box sx={{ backgroundColor: "#f9eddc", py: 8 }}>
      <Container>
        <Typography
          variant="h3"
          align="center"
          color="#1b3e63"
          fontWeight="bold"
          sx={{ fontFamily: '"Times New Roman", Times, serif' }}
          gutterBottom
        >
          Mis Proyectos
        </Typography>
        <Typography variant="subtitle1" align="center" color="#885A2D" mb={6}>
          Una selección de mis trabajos más recientes y destacados.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ borderRadius: 4, boxShadow: 3 }}>
                <Box
                  sx={{
                    backgroundColor: project.bgColor,
                    p: 4,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {newFunction(project)}
                </Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  <Box
                    mt={2}
                    sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}
                  >
                    {project.tech.map((tech, i) => (
                      <Chip key={i} label={tech} color="primary" />
                    ))}
                  </Box>
                </CardContent>
                <CardActions sx={{ px: 2, pb: 2 }}>
                  <Link
                    href={`/proyectos/${project.id}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      fontSize: 18,
                      color: "#8e5e1c", // Café mostaza
                      fontWeight: 800,
                      textDecoration: "none",
                    }}
                  >
                    Ver detalles{" "}
                    <ArrowForwardIos sx={{ fontSize: 18, color: "#8C6239" }} />
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );

  function newFunction(project: {
    id: string;
    title: string;
    description: string;
    tech: string[];
    icon: string;
    bgColor: string;
    imagenes: string[];
  }) {
    return iconMap[project.icon];
  }
}
