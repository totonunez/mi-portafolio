"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  RadioGroup,
  FormControl,
  FormLabel,
  Dialog,
  DialogTitle,
  DialogContent,
  useMediaQuery,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

type PreferenciasPoliticas = {
  seguridad: number;
  estado: number;
  aborto: number;
  ffaa: number;
  afp: number;
  partidos: number;
  justicia_social: number;
  meritocracia: number;
};

type Props = {
  datos: PreferenciasPoliticas;
  pasoAnterior: () => void;
  onFinish: (data: PreferenciasPoliticas) => void;
  onReiniciar: () => void;
  candidatoSugerido: string | null;
};

const FormularioPresidencial = ({
  datos,
  pasoAnterior,
  onFinish,
  onReiniciar,
  candidatoSugerido,
}: Props) => {
  const [formData, setFormData] = useState<PreferenciasPoliticas>(datos);
  const [open, setOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  // Sincronizar con cambios externos
  useEffect(() => {
    setFormData(datos);
  }, [datos]);

  const handleChangeRadio =
    (key: keyof PreferenciasPoliticas) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({
        ...formData,
        [key]: Number(event.target.value), // convertir a número
      });
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validación simple
    if (isSubmitted) return;

    setIsSubmitted(true);
    onFinish(formData); // 🔹 Calcula o trae desde backend
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReiniciar = () => {
    setOpen(false);
    onReiniciar();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        bgcolor: "background.paper",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <Typography variant="h5" gutterBottom>
        Página 2: Preferencias de tendencia de ideas
      </Typography>
      <Typography variant="body2" gutterBottom>
        Califica del 1 (poca importancia o desacuerdo) al 10 (mucha importancia
        o acuerdo):
      </Typography>
      {(
        Object.entries({
          seguridad: "Orden y seguridad pública",
          estado: "Intervención del Estado en la economía",
          aborto: "Apoyo al aborto libre",
          ffaa: "Confianza en Carabineros y FFAA",
          afp: "Confianza y seguridad en sistema de AFP",
          partidos: "Confianza en partidos políticos tradicionales",
          justicia_social: "Interés por justicia social y redistribución",
          meritocracia: "Valor por la eficiencia, innovación y meritocracia",
        }) as [keyof PreferenciasPoliticas, string][]
      ).map(([key, label]) => (
        <FormControl component="fieldset" fullWidth key={key} sx={{ mt: 3 }}>
          <FormLabel component="legend">{label}</FormLabel>

          {/* Contenedor con scroll horizontal en móviles */}
          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              py: 1,
            }}
          >
            <RadioGroup
              row
              name={key}
              value={formData[key]}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFormData({ ...formData, [key]: Number(event.target.value) })
              }
              sx={{
                display: "flex",
                flexWrap: "nowrap", // evita que se rompa a otra línea
                gap: 1, // separación entre radios
              }}
            >
              {[...Array(10)].map((_, index) => (
                <FormControlLabel
                  key={index + 1}
                  value={index + 1}
                  control={<Radio sx={{ color: "#234966" }} />}
                  label={index + 1}
                  labelPlacement="bottom"
                  sx={{ minWidth: 32 }} // asegura que cada radio tenga un ancho mínimo
                />
              ))}
            </RadioGroup>
          </Box>
        </FormControl>
      ))}

      <Box display="flex" justifyContent="space-between" mt={4}>
        <Button
          type="button"
          onClick={pasoAnterior}
          variant="outlined"
          sx={{
            color: "#234966",
            borderColor: "#234966",
            fontFamily: '"Times New Roman", Times, serif',
            "&:hover": {
              borderColor: "#1c3a50",
              color: "#1c3a50",
            },
          }}
        >
          Volver
        </Button>

        <Button
          type="submit"
          variant="contained"
          sx={{
            fontFamily: '"Times New Roman", Times, serif',
            backgroundColor: "#234966",
            "&:hover": {
              backgroundColor: "#082941", // un tono más oscuro en hover
            },
          }}
          disabled={isSubmitted}
        >
          Finalizar
        </Button>
      </Box>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="popup-titulo"
      >
        <DialogTitle id="popup-titulo">🎯 Resultado de la Encuesta</DialogTitle>
        <DialogContent>
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontFamily: '"Times New Roman", Times, serif' }}
            className="text-black font-bold"
          >
            Según tus respuestas, tu candidato sugerido es:
          </Typography>

          <Box
            sx={{
              minHeight: "70vh", // altura mínima para centrar en pantalla
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center", // centra el texto dentro de los componentes
              px: 2, // padding horizontal responsivo
            }}
          >
            <Typography
              variant="h4"
              color="#234966"
              fontWeight="bold"
              sx={{ mb: 2 }} // margen inferior para separar del botón
            >
              {candidatoSugerido ?? "Cargando..."}
            </Typography>

            <Button
              onClick={handleReiniciar}
              variant="contained"
              sx={{
                fontFamily: '"Times New Roman", Times, serif',
                backgroundColor: "#234966",
                "&:hover": {
                  backgroundColor: "#082941",
                },
                textAlign: "center",
                px: 3,
                width: {
                  xs: "100%",
                  sm: "auto",
                },
              }}
            >
              Volver a hacer la encuesta
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default FormularioPresidencial;
