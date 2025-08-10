import React from 'react';
import { FaThLarge } from 'react-icons/fa'; // Ícono de catálogo (grilla)

const Header = () => {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between', // Esto separa los elementos (título y botón)
      alignItems: 'center',
      borderBottom: '1px solid #ddd',
      padding: '1rem 2rem',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Título */}
      <h1 style={{
        fontSize: '1.5rem',
        fontWeight: '600',
        color: '#333',
        margin: 0,
      }}>
        Cursos
      </h1>

      {/* Botón "Catálogo de cursos" */}
      <button
        onClick={() => window.open('https://tucatalogo.com', '_blank')}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f5f5f5',                   
          padding: '1.8rem 1rem',
          fontSize: '0.9rem',
          color: '#424242',
          cursor: 'pointer',
          transition: 'background-color 0.3s',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
      >
        <FaThLarge style={{ marginRight: '0.5rem' }} />
        Catálogo de cursos
      </button>
    </header>
  );
};

export default Header;
