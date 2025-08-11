import React from 'react';

const ResultsInfo = ({ totalResults, filteredResults }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px',
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      marginBottom: '10px',
    }}>
      <span style={{ fontSize: '14px', color: '#666' }}>
        Mostrando {filteredResults} de {totalResults} resultados
      </span>
    </div>
  );
};

export default ResultsInfo;
