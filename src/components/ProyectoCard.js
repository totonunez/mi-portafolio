import { Card, CardContent, Typography } from "@mui/material";

export default function ProyectoCard({ proyecto }) {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{proyecto.titulo}</Typography>
        <Typography>{proyecto.descripcion}</Typography>
      </CardContent>
    </Card>
  );
}
