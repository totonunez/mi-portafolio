// src/components/Contact.tsx
'use client'
import { Typography} from "@mui/material";

const buttonStyle = {
  padding: '10px 20px',
  margin: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ccc',
  backgroundColor: '#f0f0f0',
  textDecoration: 'none',
  display: 'inline-block',
};
const LinkedinStyle = {
  padding: '10px 20px',
  margin: '5px',
  fontSize: '16px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #0077b5', // Color de LinkedIn
  backgroundColor: '#0077b5', // Color de LinkedIn
  color: '#fff', // Texto blanco
  display: 'inline-flex',
  alignItems: 'center',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
};
const iconStyle = {
  marginRight: '8px',
  fontSize: '18px', // Tamaño del ícono
};

export default function Contact(){

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', textAlign: 'center' }}>
      <Typography variant="h4" textAlign="center" mb={3}>Información de contacto</Typography>
      <ul style={{  
        listStyleType: 'none', 
        padding: 0, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        gap: '15px' // Espaciado entre botones
      }}>
        <li>
          <a
            href="https://www.linkedin.com/in/cristobalnunezvera/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '200px',
              padding: '12px',
              fontSize: '18px',
              backgroundColor: '#0077B5',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px'
            }}
          >
            <i className="fa fa-linkedin" style={{ marginRight: '10px' }}></i> LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/totonunez"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '200px',
              padding: '12px',
              fontSize: '18px',
              backgroundColor: '#333',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px'
            }}
          >
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:cristobalnunezvera@gmail.com" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            padding: '12px',
            fontSize: '18px',
            backgroundColor: '#D44638',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px'
          }}>
            Correo
          </a>
        </li>
        <li>
          <a href="tel:+56990369590" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            padding: '12px',
            fontSize: '18px',
            backgroundColor: '#4CAF50',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px'
          }}>
            Teléfono celular
          </a>
        </li>
      </ul>
    </div>

  );
}

