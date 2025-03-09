"use client";
import {  Button, Typography, Box, Grid} from "@mui/material";
import Link from "next/link";

// Importamos el archivo JSON
import industriasData from '../data/industrias.json';
import blogsData from '../data/blogs.json';
import futurosproyectosData from '../data/futurosproyectos.json';

const futurosProyectos = futurosproyectosData;
const industrias = industriasData;

const blogPosts = blogsData;


export default function Home() {
  return (
    <div>
      <div
        className="h-[70vh] w-full flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-300 via-teal-200 to-green-200 relative"
      >
        {/* Contenido */}
        <div className="relative z-10 px-6" style={{ color: "#000080" }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
          !Helloo! Soy Cristóbal Núñez Vera
          </h1>
          <p className="text-lg md:text-xl mb-6">
          Bienvenido a mi portafolio, donde la ingeniería de software y la innovación se encuentran.
Explora mis proyectos y descubre cómo transformo ideas en soluciones tecnológicas.
          </p>


          <Link
            href="/proyectos"
            className="bg-blue-500 hover:bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg mb-8"
          >
            Ver Proyectos
          </Link>
        </div>
      </div>
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
