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

export type FormularioCiudadanoData = {
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

type Props = {
  onNext: (data: FormularioCiudadanoData) => void;
};

export default function Paso1Presidencial({ onNext }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormularioCiudadanoData>();

  const onSubmit = (data: FormularioCiudadanoData) => {
    onNext(data); // Pasa los datos al componente padre
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
        Paso 1: Información Ciudadana
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Edad"
          type="number"
          fullWidth
          margin="normal"
          {...register("edad", {
            required: "Este campo es obligatorio",
            valueAsNumber: true,
          })}
          error={!!errors.edad}
          helperText={errors.edad?.message}
        />

        <FormControl fullWidth margin="normal" error={!!errors.sexo}>
          <InputLabel id="sexo-label">Sexo / Género</InputLabel>
          <Select
            labelId="sexo-label"
            label="Sexo / Género"
            defaultValue=""
            {...register("sexo", {
              required: "Selecciona una opción",
            })}
          >
            <MenuItem value="">Seleccionar...</MenuItem>
            <MenuItem value="masculino">Masculino</MenuItem>
            <MenuItem value="femenino">Femenino</MenuItem>
            <MenuItem value="otro">Otro</MenuItem>
          </Select>
          {errors.sexo && (
            <p
              style={{
                color: "#d32f2f",
                fontSize: "0.75rem",
                margin: "3px 14px 0",
              }}
            >
              {errors.sexo.message}
            </p>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal" error={!!errors.educacion}>
          <InputLabel id="educacion-label">Nivel Educacional</InputLabel>
          <Select
            labelId="educacion-label"
            label="Nivel Educacional"
            defaultValue=""
            {...register("educacion", {
              required: "Selecciona un nivel educacional",
            })}
          >
            <MenuItem value="">Seleccionar...</MenuItem>
            <MenuItem value="basica">Educación Básica</MenuItem>
            <MenuItem value="media">Educación Media</MenuItem>
            <MenuItem value="superior">Educación Superior Incompleta</MenuItem>
            <MenuItem value="superiorcompleta">Título Profesional</MenuItem>
            <MenuItem value="magister">Magíster</MenuItem>
            <MenuItem value="doctorado">Doctorado</MenuItem>
          </Select>
          {errors.educacion && (
            <p
              style={{
                color: "#d32f2f",
                fontSize: "0.75rem",
                margin: "3px 14px 0",
              }}
            >
              {errors.educacion.message}
            </p>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal" error={!!errors.estadoCivil}>
          <InputLabel id="estadoCivil-label">Estado Civil</InputLabel>
          <Select
            labelId="estadoCivil-label"
            label="Estado Civil"
            defaultValue=""
            {...register("estadoCivil", {
              required: "Selecciona tu estado civil",
            })}
          >
            <MenuItem value="">Seleccionar...</MenuItem>
            <MenuItem value="soltero">Soltero</MenuItem>
            <MenuItem value="casado">Casado</MenuItem>
            <MenuItem value="conviviente">Conviviente</MenuItem>
            <MenuItem value="divorciado">Divorciado</MenuItem>
            <MenuItem value="unioncivil">Unión Civil</MenuItem>
            <MenuItem value="viudo">Viudo</MenuItem>
          </Select>
          {errors.estadoCivil && (
            <p
              style={{
                color: "#d32f2f",
                fontSize: "0.75rem",
                margin: "3px 14px 0",
              }}
            >
              {errors.estadoCivil.message}
            </p>
          )}
        </FormControl>

        <TextField
          label="Cantidad de hijos"
          type="number"
          fullWidth
          margin="normal"
          {...register("hijos", {
            required: "Este campo es obligatorio",
            valueAsNumber: true,
          })}
          error={!!errors.hijos}
          helperText={errors.hijos?.message}
        />

        <FormControl fullWidth margin="normal" error={!!errors.religion}>
          <InputLabel id="religion-label">Religiones / Creencias</InputLabel>
          <Select
            labelId="religion-label"
            label="Religiones / Creencias"
            defaultValue=""
            {...register("religion", {
              required: "Selecciona una religión o creencia",
            })}
          >
            <MenuItem value="">Seleccionar...</MenuItem>
            <MenuItem value="ninguna">Ninguna</MenuItem>
            <MenuItem value="catolicismo">Catolicismo</MenuItem>
            <MenuItem value="cristianismo">Cristianismo</MenuItem>
            <MenuItem value="islam">Islam</MenuItem>
            <MenuItem value="hinduismo">Hinduismo</MenuItem>
            <MenuItem value="budismo">Budismo</MenuItem>
            <MenuItem value="judaismo">Judaísmo</MenuItem>
            <MenuItem value="otros">Otros</MenuItem>
          </Select>
          {errors.religion && (
            <p
              style={{
                color: "#d32f2f",
                fontSize: "0.75rem",
                margin: "3px 14px 0",
              }}
            >
              {errors.religion.message}
            </p>
          )}
        </FormControl>

        <TextField
          label="Ocupación"
          fullWidth
          margin="normal"
          {...register("ocupacion", { required: "Este campo es obligatorio" })}
          error={!!errors.ocupacion}
          helperText={errors.ocupacion?.message}
        />

        <TextField
          label="Región"
          fullWidth
          margin="normal"
          {...register("region", { required: "Este campo es obligatorio" })}
          error={!!errors.region}
          helperText={errors.region?.message}
        />

        <TextField
          label="Comuna"
          fullWidth
          margin="normal"
          {...register("comuna", { required: "Este campo es obligatorio" })}
          error={!!errors.comuna}
          helperText={errors.comuna?.message}
        />

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: "#234966",
            fontFamily: '"Times New Roman", Times, serif',
            "&:hover": {
              backgroundColor: "#1c3a50", // un poco más oscuro en hover
            },
          }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Siguiente
        </Button>
      </form>
    </Box>
  );
}
