import Navbar from "../components/Navbar";
import { Container, Grid } from "@mui/material";
import ProyectoCard from "../components/ProyectoCard";

const proyectos = [
  { id: 1, titulo: "Proyecto 1", descripcion: "Descripción del proyecto 1" },
  { id: 2, titulo: "Proyecto 2", descripcion: "Descripción del proyecto 2" },
];

export default function Proyectos() {
  return (
    <Container maxWidth="md">
      <Navbar />
      <Grid container spacing={3}>
        {proyectos.map((proyecto) => (
          <Grid item xs={12} md={6} key={proyecto.id}>
            <ProyectoCard proyecto={proyecto} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
