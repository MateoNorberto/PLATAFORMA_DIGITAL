import React, { useState } from 'react';
import ResultsInfo from './ResultsInfo';  // Importa ResultsInfo
import FilterTag from './FilterTag';  // Importa FilterTag

const Filters = () => {
  // Estado para los filtros
  const [totalResults] = useState(100);  // Total de resultados
  const [filteredResults] = useState(10);  // Resultados filtrados

  return (
    <div style={{
      padding: '20px',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }}>
      {/* Información de resultados */}
      <ResultsInfo 
        totalResults={totalResults} 
        filteredResults={filteredResults} 
      />

      {/* Barra de búsqueda y filtro */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: '10px',
      }}>
        <span style={{ fontSize: '14px', color: '#666', marginRight: '10px' }}>
          10 resultados
        </span>
        <button style={{
          backgroundColor: '#333',
          color: 'white',
          border: '1px solid #ccc',
          padding: '6px 12px',
          borderRadius: '20px',
          fontSize: '12px',
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
        }}>
          Cursos actuales
          <span style={{
            backgroundColor: '#f8f2f2ff',
            color: '#080808ff',
            borderRadius: '50%',
            marginLeft: '8px',
            padding: '5px 6px',
            fontSize: '10px',
          }}>X</span>
        </button>
      </div>
    </div>
  );
};

export default Filters;
