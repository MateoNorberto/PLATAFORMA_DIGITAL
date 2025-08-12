import React, { useState } from 'react';

const ResultsInfo = ({ filteredResults }) => {
  return (
    <span style={{ fontSize: '14px', color: '#666' }}>
      {filteredResults} resultados
    </span>
  );
};

export default ResultsInfo;
