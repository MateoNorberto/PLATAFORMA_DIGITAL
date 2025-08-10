

const SidebarLogo = () => {
  return (
    <div
      style={{
        fontWeight: 'bold',
        fontSize: '1.5rem',
        color: '#fff',
        marginBottom: '2rem',
        textAlign: 'center',
        cursor: 'pointer',
        transition: 'transform 0.2s ease-in-out',
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      onClick={() => window.location.reload()} // O puedes dirigirlo a otra ruta
    >
      San Luis Gonzaga
    </div>
  );
};

export default SidebarLogo;
