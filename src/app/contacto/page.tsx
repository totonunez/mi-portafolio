// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
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

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Contact Information</h2>
      <ul style={{ listStyleType: 'none', padding: 0, display:'flex' }}>
        <li>
          <a
            href="https://www.linkedin.com/in/cristobalnunezvera/"
            target="_blank"
            rel="noopener noreferrer"
            style={LinkedinStyle}
          >
            <i className="fa fa-linkedin" style={iconStyle}></i>LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/totonunez"
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
          >
            GitHub
          </a>
        </li>
        <li>
          <a href="mailto:cristobalnunezvera@gmail.com" style={buttonStyle}>
            Correo
          </a>
        </li>
        <li>
          <a href="tel:+56990369590" style={buttonStyle}>
            Teléfono celular
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
