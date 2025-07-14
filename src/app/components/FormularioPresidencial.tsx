"use client";

import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material";

// ✅ 1. Define el tipo del formulario
type FormularioCiudadanoData = {
  edad: number;
  sexo: string;
  educacion: string;
  estadoCivil: string;
  hijos: number;
  religion: string;
  ocupacion: string;
  tipoContrato: string;
  region: string;
  comuna: string;
};

export default function FormularioCiudadano() {
  // ✅ 2. Usa el tipo en useForm
  const { register, handleSubmit, reset } = useForm<FormularioCiudadanoData>();

  // ✅ 3. Usa el tipo también en la función
  const onSubmit = async (data: FormularioCiudadanoData) => {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:4000"
        : "https://atreusocean.com";

    const res = await fetch(`${baseUrl}/api/form`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Datos guardados correctamente");
      console.log("Datos enviados:", data);
      reset();
    } else {
      alert("Error al guardar");
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        mt: 4,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" component="h1" gutterBottom>
        Formulario Ciudadano
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Edad"
          type="number"
          fullWidth
          margin="normal"
          {...register("edad", { valueAsNumber: true })}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Sexo / Género</InputLabel>
          <Select defaultValue="" {...register("sexo")} label="Sexo / Género">
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="femenino">Femenino</MenuItem>
            <MenuItem value="otro">Otro</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Nivel Educacional</InputLabel>
          <Select
            defaultValue=""
            {...register("educacion")}
            label="Nivel Educacional"
          >
            <MenuItem value="basica">Educación Básica</MenuItem>
            <MenuItem value="media">Educación Media</MenuItem>
            <MenuItem value="superior">Educación Superior Incompleta</MenuItem>
            <MenuItem value="superiorcompleta">Título Profesional</MenuItem>
            <MenuItem value="magister">Magíster</MenuItem>
            <MenuItem value="doctorado">Doctorado</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal">
          <InputLabel>Estado Civil</InputLabel>
          <Select
            defaultValue=""
            {...register("estadoCivil")}
            label="Estado Civil"
          >
            <MenuItem value="soltero">Soltero</MenuItem>
            <MenuItem value="casado">Casado</MenuItem>
            <MenuItem value="conviviente">Conviviente</MenuItem>
            <MenuItem value="divorciado">Divorciado</MenuItem>
            <MenuItem value="unioncivil">Unión Civil</MenuItem>
            <MenuItem value="viudo">Viudo</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Cantidad de hijos"
          type="number"
          fullWidth
          margin="normal"
          {...register("hijos", { valueAsNumber: true })}
        />

        <FormControl fullWidth margin="normal">
          <InputLabel>Religiones / Creencias</InputLabel>
          <Select
            defaultValue=""
            {...register("religion")}
            label="Religión / creencias"
          >
            <MenuItem value="ninguna">Ninguna</MenuItem>
            <MenuItem value="catolicismo">Catolicismo</MenuItem>
            <MenuItem value="cristianismo">Cristianismo</MenuItem>
            <MenuItem value="islam">Islam</MenuItem>
            <MenuItem value="hinduismo">Hinduismo</MenuItem>
            <MenuItem value="budismo">Budismo</MenuItem>
            <MenuItem value="judaismo">Judaísmo</MenuItem>
            <MenuItem value="otros">Otros</MenuItem>
          </Select>
        </FormControl>

        <TextField
          label="Ocupación / Rubro laboral"
          fullWidth
          margin="normal"
          {...register("ocupacion")}
        />
        <TextField
          label="Región"
          fullWidth
          margin="normal"
          {...register("region")}
        />
        <TextField
          label="Comuna"
          fullWidth
          margin="normal"
          {...register("comuna")}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Guardar
        </Button>
      </form>
    </Box>
  );
}
