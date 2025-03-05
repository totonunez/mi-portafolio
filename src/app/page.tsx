"use client";
import {  Button, Typography, Box, Grid} from "@mui/material";
import Link from "next/link";

// Importamos el archivo JSON
import industriasData from '../data/industrias.json';

const futurosProyectos = [
  "Plataforma de Inteligencia Artificial para Negocios",
  "Sistema de Automatización de Procesos Empresariales",
  "Aplicación de Análisis de Datos en Tiempo Real"
];

const industrias = industriasData;

const blogPosts = [
  { titulo: "Tendencias en Inteligencia Artificial", link: "#" },
  { titulo: "El futuro del desarrollo web", link: "#" },
  { titulo: "Cómo mejorar la seguridad en aplicaciones web", link: "#" }
];


export default function Home() {
  return (
    <div>
      <h1>Bienvenido a mi portafolio</h1>
      <p>Explora mis proyectos</p>
      <Link href="/proyectos">Ver Proyectos</Link>
            {/* Sección de Proyectos que se vienen */}
      <Box my={5}>
        <Typography variant="h4" textAlign="center" mb={3}>Proyectos que se vienen</Typography>
        <ul>
          {futurosProyectos.map((proyecto, index) => (
            <li key={index}><Typography variant="body1">{proyecto}</Typography></li>
          ))}
        </ul>
      </Box>

      {/* Sección de Industrias */}
      <Box my={5}>
        <Typography variant="h4" textAlign="center" mb={3}>Industrias donde se aplica la Ingeniería de Software</Typography>
        <Grid container spacing={3} justifyContent="center">
          {industrias.map((industria, index) => (
            <Grid item key={index} xs={6} sm={4} md={2}>
              <Typography variant="h6" textAlign="center">{industria}</Typography>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Sección de Blog */}
      <Box my={5}>
        <Typography variant="h3" textAlign="center" mb={3}>Para conocer más sobre las nuevas tecnologías</Typography>
        <Typography variant="h6" textAlign="center" mb={2}> Te invito a leer algún de nuestros artículos</Typography>
        
        <ul>
          {blogPosts.map((post, index) => (
            <li key={index}>
              <Link href={post.link} passHref>
                <Button variant="text" color="primary">{post.titulo}</Button>
              </Link>
            </li>
          ))}
        </ul>
      </Box>
    </div>
  );
}
