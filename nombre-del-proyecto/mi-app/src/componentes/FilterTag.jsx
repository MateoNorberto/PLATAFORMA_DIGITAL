import React, { useState } from 'react';

const FilterTag = ({ label, onRemove }) => {
  return (
    <button
      style={{
        backgroundColor: '#1f1f1f',
        color: 'white',
        border: 'none',
        padding: '4px 10px',
        borderRadius: '20px',
        fontSize: '12px',
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        fontWeight: 'normal'
      }}
    >
      {label}
      <span
        onClick={onRemove}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
          color: 'white',
          borderRadius: '50%',
          marginLeft: '6px',
          fontSize: '12px',
          cursor: 'pointer'
        }}
      >
        &#x2715;
      </span>
    </button>
  );
};

export default FilterTag;
