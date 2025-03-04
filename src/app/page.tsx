import Navbar from "../components/Navbar";
import { Container, Typography } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="md">
      <Navbar />
      <Typography variant="h3" align="center" gutterBottom>
        ¡Hola, soy Cristóbal Eduardo Núñez Vera!
      </Typography>
      <Typography align="center">
        Soy un desarrollador backend especializado en Spring Boot y Next.js.
      </Typography>
    </Container>
  );
}
