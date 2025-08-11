import React, { useState } from 'react';

const FilterTag = () => {
  // Estado para mantener los filtros activos
  const [activeFilters, setActiveFilters] = useState(['React', 'JavaScript', 'CSS']);

  // Función para eliminar un filtro
  const removeFilter = (filterToRemove) => {
    setActiveFilters(activeFilters.filter((filter) => filter !== filterToRemove));
  };

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
      padding: '10px',
    }}>
      {/* Mostrar etiquetas de filtros activos */}
      {activeFilters.map((filter, index) => (
        <div key={index} style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          color: '#333',
          borderRadius: '20px',
          padding: '5px 10px',
          fontSize: '14px',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        }}>
          <span>{filter}</span>
          {/* Botón de eliminar */}
          <button 
            onClick={() => removeFilter(filter)} 
            style={{
              background: 'none',
              border: 'none',
              color: '#333',
              fontSize: '14px',
              marginLeft: '8px',
              cursor: 'pointer',
            }}>
            &#10005; {/* Símbolo de "X" */}
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterTag;
