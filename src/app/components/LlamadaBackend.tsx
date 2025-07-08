"use client";

import { useEffect, useState } from "react";
import { Box, Typography, Button, CircularProgress } from "@mui/material";

export default function LlamadaBackend() {
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const obtenerMensaje = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/");
      const data = await res.text(); // porque es texto plano
      setMensaje(data);
    } catch (error) {
      setMensaje("Error al conectar con el backend");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    obtenerMensaje();
  }, []);

  return (
    <Box sx={{ mt: 4, textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>
        Respuesta del backend:
      </Typography>

      {loading ? (
        <CircularProgress />
      ) : (
        <Box
          sx={{
            mt: 2,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
            backgroundColor: "#f9f9f9",
          }}
        >
          <Typography>{mensaje}</Typography>
        </Box>
      )}

      <Button
        onClick={obtenerMensaje}
        variant="contained"
        color="primary"
        sx={{ mt: 3 }}
      >
        Volver a consultar
      </Button>
    </Box>
  );
}
