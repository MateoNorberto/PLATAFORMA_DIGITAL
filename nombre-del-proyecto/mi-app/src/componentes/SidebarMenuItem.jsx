import React from 'react';

const SidebarMenuItem = ({ icon, label, active, onClick }) => {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.7rem 0.6rem',
    marginBottom: '0.3rem',
    backgroundColor: active ? '#0066ff' : 'transparent',
    color: active ? '#fff' : '#ccc',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '0.9rem',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    transition: 'all 0.2s ease-in-out',
    transform: 'translateX(0)',
  };

  const hoverStyle = {
    backgroundColor: active ? '#0066ff' : '#333',
    transform: 'translateX(5px)',
  };

  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      style={{
        ...baseStyle,
        ...(hovered ? hoverStyle : {}),
      }}
      onClick={() => {
        console.log(`Clic en: ${label}`); // Depuración
        onClick();
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={label}
    >
      <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default SidebarMenuItem;