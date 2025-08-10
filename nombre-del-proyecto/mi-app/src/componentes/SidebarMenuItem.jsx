

const SidebarMenuItem = ({ icon, label, active, onClick }) => {
  const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '0.7rem 0.1rem',
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

  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateX(5px)';
    e.currentTarget.style.backgroundColor = '#333';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateX(0)';
    e.currentTarget.style.backgroundColor = active ? '#0066ff' : 'transparent';
  };

  return (
    <div
      style={baseStyle}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      title={label}
    >
      <span style={{ marginRight: '1rem', fontSize: '1.2rem' }}>{icon}</span>
      <span>{label}</span>
    </div>
  );
};

export default SidebarMenuItem;
