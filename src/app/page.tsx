"use client";
import {  Button, Typography, Box, Grid, Paper} from "@mui/material";
import Link from "next/link";

// Importamos el archivo JSON

import blogsData from '../data/blogs.json';
import futurosproyectosData from '../data/futurosproyectos.json';
import CardProximosDesafios from "./components/CardProximosDesafios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcaseMedical } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';

const categories = [
  { icon: faSuitcaseMedical, title: 'Salud' },
  { icon: faPiggyBank, title: 'Finanzas' },
  { icon: faGraduationCap, title: 'Educación' },
  { icon: faShoppingCart, title: 'E-commerce' },
  { icon: faCar, title: 'Automotriz' }
];


const blogPosts = blogsData;
const desafios = futurosproyectosData;

export default function Home() {
  return (
    <div>
      <div
        className="h-[70vh] w-full flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-300 via-teal-200 to-green-200 relative"
      >
        {/* Contenido */}
        <div className="relative z-10 px-6" style={{ color: "#000080" }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Soy Cristóbal Núñez Vera
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
      <main className="p-4">

        <Box my={5}>
              <div className="py-10">
                <CardProximosDesafios desafios={desafios} />
              </div>
        </Box>

        <Box my={5} textAlign="center">
          <h2 className="text-4xl font-bold text-center text-[#1E3A8A] mb-6">
            Industrias
          </h2>
          <Grid container spacing={3} justifyContent="center">
            {categories.map((category, index) => (
              <Grid item key={index} xs={12} sm={6} md={4} lg={2}>
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center', borderRadius: 2 }}>
                  <FontAwesomeIcon icon={category.icon} style={{ fontSize: '2rem', color: '#1E3A8A', marginBottom: '10px' }} />
                  <Typography variant="h6">{category.title}</Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Sección de Blog */}
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
      </main>
    </div>
  );
}
