"use client";

import { useState, useEffect } from "react";
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
interface Region {
  codigo: string;
  nombre: string;
}
interface Comuna {
  codigo: string;
  nombre: string;
}

type Props = {
  onNext: (data: FormularioCiudadanoData) => void;
};
const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:4000"
    : "https://atreusocean.com";

export default function Paso1Presidencial({ onNext }: Props) {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormularioCiudadanoData>();

  const [regiones, setRegiones] = useState<Region[]>([]);
  const [comunas, setComunas] = useState<Comuna[]>([]);
  const selectedRegion = watch("region");

  useEffect(() => {
    const loadRegiones = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/regiones`);
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
        const data = await res.json();
        setRegiones(data);
      } catch (err) {
        console.error("Error cargando regiones:", err);
      }
    };
    loadRegiones();
  }, []);

  useEffect(() => {
    if (!selectedRegion) {
      setComunas([]);
      return;
    }

    const loadComunas = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/comunas/${selectedRegion}`);
        if (!res.ok) throw new Error(`Error HTTP ${res.status}`);
        const data = await res.json();
        setComunas(data);
      } catch (err) {
        console.error("Error cargando comunas:", err);
      }
    };
    loadComunas();
  }, [selectedRegion]);

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
            required: "La edad es obligatoria",
            valueAsNumber: true,
            min: { value: 0, message: "La edad no puede ser negativa" },
            max: { value: 120, message: "La edad máxima es 120" },
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
            min: {
              value: 0,
              message: "La cantidad de hijos no puede ser negativa",
            },
            max: { value: 120, message: "La cantidad máxima es 10" },
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

        <FormControl fullWidth margin="normal" error={!!errors.ocupacion}>
          <InputLabel id="ocupacion-label">Ocupación</InputLabel>
          <Select
            labelId="ocupacion-label"
            defaultValue=""
            {...register("ocupacion", {
              required: "Selecciona una ocupación",
            })}
          >
            <MenuItem value="">Seleccionar...</MenuItem>
            <MenuItem value="profesional_ti">Profesional de TI</MenuItem>
            <MenuItem value="docente">Docente / Profesor</MenuItem>
            <MenuItem value="salud">Profesional de la Salud</MenuItem>
            <MenuItem value="administrativo">Empleado Administrativo</MenuItem>
            <MenuItem value="comercio">Vendedor / Comercio</MenuItem>
            <MenuItem value="agricultor">
              Agricultor / Trabajador Agropecuario
            </MenuItem>
            <MenuItem value="operario">Operario / Manufactura</MenuItem>
            <MenuItem value="seguridad">Seguridad / Vigilancia</MenuItem>
            <MenuItem value="estudiante">Estudiante</MenuItem>
            <MenuItem value="jubilado">Jubilado</MenuItem>
            <MenuItem value="otros">Otros</MenuItem>
          </Select>

          {errors.ocupacion && (
            <p
              style={{
                color: "#d32f2f",
                fontSize: "0.75rem",
                margin: "3px 14px 0",
              }}
            >
              {errors.ocupacion.message}
            </p>
          )}
        </FormControl>

        <FormControl fullWidth margin="normal" error={!!errors.region}>
          <InputLabel>Región</InputLabel>
          <Select
            defaultValue=""
            {...register("region", { required: "Selecciona una región" })}
            onChange={(e) => setValue("region", e.target.value)}
          >
            <MenuItem value="">Seleccionar...</MenuItem>
            {regiones.map((region) => (
              <MenuItem key={region.codigo} value={region.codigo}>
                {region.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl fullWidth margin="normal" error={!!errors.comuna}>
          <InputLabel>Comuna</InputLabel>
          <Select
            defaultValue=""
            {...register("comuna", { required: "Selecciona una comuna" })}
          >
            <MenuItem value="">Seleccionar...</MenuItem>
            {comunas.map((comuna) => (
              <MenuItem key={comuna.codigo} value={comuna.nombre}>
                {comuna.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
