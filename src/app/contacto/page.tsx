// src/components/Contact.tsx
'use client'
import { Typography} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";


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
            <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6 mr-2" />Linkedin
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
            <FontAwesomeIcon icon={faGithub} className="w-6 h-6 mr-2" />Github
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
            backgroundColor: '#333',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px'
          }}>
            <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6 mr-2" />Correo
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
            backgroundColor: '#333',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '8px'
          }}>
            <FontAwesomeIcon icon={faPhone} className="w-6 h-6 mr-2" />Celular
          </a>
        </li>
      </ul>
    </div>

  );
}

