import React, { useState } from 'react';

import ResultsInfo from './ResultsInfo';
import FilterTag from './FilterTag';

const Filters = () => {
  const [totalResults] = useState(100);
  const [filteredResults] = useState(10);
  const [activeFilters, setActiveFilters] = useState(['Cursos actuales']);

  const removeFilter = (filterToRemove) => {
    setActiveFilters(activeFilters.filter((filter) => filter !== filterToRemove));
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <ResultsInfo filteredResults={filteredResults} />
      {activeFilters.map((filter, index) => (
        <FilterTag
          key={index}
          label={filter}
          onRemove={() => removeFilter(filter)}
        />
      ))}
    </div>
  );
};

export default Filters;
