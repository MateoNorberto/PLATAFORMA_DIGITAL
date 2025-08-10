
import { FaSearch, FaList, FaTh } from 'react-icons/fa';

const FilterBar = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      backgroundColor: '#f9f9f9',
      padding: '16px 2px',     
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif',
      fontSize: '14px',
      color: '#333',
      width: '100%'
    }}>
      {/* 1. Botones de vista */}
      <div style={{
        display: 'flex',
        gap: '0px',
      }}>
        <button style={iconButtonStyle}><FaList /></button>
        <button style={iconButtonStyle}><FaTh /></button>
      </div>

      {/* 2. Campo búsqueda */}
      <div style={searchBarStyle}>
        <FaSearch style={{ color: '#555', marginRight: 8, fontSize: 17 }} />
        <input 
          type="text" 
          placeholder="Busque sus cursos" 
          style={searchInputStyle}
        />
      </div>

      {/* 3. Dropdown Períodos */}
      <div style={dropdownContainerStyle}>
        <label style={labelStyle}>Períodos</label>
        <select style={selectStyle}>
          <option>Cursos actuales</option>
          <option>Curso pasado</option>
          <option>Curso futuro</option>
        </select>
      </div>

      {/* 4. Dropdown Filtros */}
      <div style={dropdownContainerStyle}>
        <label style={labelStyle}>Filtros</label>
        <select style={selectStyle}>
          <option>Todos los cursos</option>
          <option>Cursos activos</option>
          <option>Cursos finalizados</option>
        </select>
      </div>

      {/* 5. Selector cantidad por página */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <select style={smallSelectStyle}>
          <option>10</option>
          <option>20</option>
          <option selected>50</option>
          <option>100</option>
        </select>
        <span>elementos por página</span>
      </div>
    </div>
  );
};

// Estilos para reutilizar
const iconButtonStyle = {
  backgroundColor: '#eee',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '6px 10px',
  cursor: 'pointer',
  fontSize: '14px',
  color: '#555',
};

const searchBarStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#fff',
  border: '1px solid #ccc',
  borderRadius: '4px',
  padding: '0.5rem 0.75rem',
  height: '40px',
  minWidth: '350px',
  boxSizing: 'border-box',
};

const searchInputStyle = {
  border: 'none',
  outline: 'none',
  fontSize: '14px',
  width: '100%',
  color: '#333',
  backgroundColor: 'transparent',
};

const dropdownContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  fontSize: '12px',
  color: '#555',
};

const labelStyle = {
  marginBottom: '2px',
  fontWeight: '500',
};

const selectStyle = {
  padding: '6px 10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '14px',
  backgroundColor: '#fff',
  cursor: 'pointer',
  minWidth: '160px',
};

const smallSelectStyle = {
  ...selectStyle,
  minWidth: '70px',
};

export default FilterBar;
