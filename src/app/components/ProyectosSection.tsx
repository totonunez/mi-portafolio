import {
  Box,
  Container,
  Grid,
  Typography,
  Chip,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
import Link from "next/link";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

const projects = [
  {
    id: "1",
    title: "Unibag ERP",
    description:
      "Este proyecto es un ERP (Enterprise Resource Planning) desarrollado en PHP con una base de datos MySQL, diseñado para optimizar la gestión empresarial. Permite administrar órdenes de compra, facturación, generación de estadísticas y la asignación de roles de administración con diferentes niveles de acceso. ",
    tech: ["NextJS", "React", "Tailwind"],
    imagenes: ["/images/Unibag1.png", "/images/Unibag3.png"],
    icon: <LaptopMacIcon sx={{ fontSize: 50, color: "white" }} />,
    bgColor: "#1b3e63",
  },
  {
    id: "2",
    title: "Dashboard BI Unibag",
    description:
      "Este proyecto de Business Intelligence (BI) utiliza Looker Studio para transformar datos empresariales en información clave para la toma de decisiones. Se conecta directamente a una base de datos para extraer, procesar y visualizar métricas fundamentales del negocio en tiempo real.",
    tech: ["React", "Redux", "Stripe"],
    imagenes: ["/images/unibaglooker2.png"],
    icon: <StorefrontIcon sx={{ fontSize: 50, color: "white" }} />,
    bgColor: "#885A2D",
  },
  {
    id: "3",
    title: "Comoquiero",
    description:
      "El proyecto de comoquiero se diversificó en la aplicación de planificación de menus y recetas, que es un proyecto desarrollado en Vue.js y NEST y en el desarrollo de la landing page de la empresa matriz (qcart), la cual fue implementada con tecnologías de desarrollo web ( HTML, CSS y Javascript) levantada en infraestructura AWS.",
    tech: ["React Native", "Firebase", "Expo"],
    imagenes: ["/images/comoquiero1.png", "/images/comoquiero2.png"],
    icon: <SmartphoneIcon sx={{ fontSize: 50, color: "white" }} />,
    bgColor: "#1c1c1c",
  },
];

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
                  {project.icon}
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
                  <Link href={`/proyectos/${project.id}`}>Ver detalles</Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
