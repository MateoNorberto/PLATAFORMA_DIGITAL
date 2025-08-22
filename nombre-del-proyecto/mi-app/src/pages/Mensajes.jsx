import React from 'react';

const mensajes = [
  {
    id: '202520-PIAD-629-TAL-NRC_13825',
    titulo: '#',
    color: '#7DE0F3',
  },
  {
    id: '202520-PIAD-626-TEC-NRC_13230',
    titulo: '#',
    color: '#007BFF',
  },
  {
    id: 'IND_ALUMNOS-202510-25',
    titulo: '#',
    color: '#7DE0F3',
  },
  {
    id: '202520-PIAD-625-TEC-NRC_13229',
    titulo: '#',
    color: '#FFD700',
  },
  {
    id: '202520-CNIU-108-ACT-NRC_25914',
    titulo: '#',
    color: '#FF6600',
  },
  {
    id: '202520-CGEU-241-TEC-NRC_13827',
    titulo: '#',
    color: '#6FD1C1',
  },
  {
    id: 'PREVENCION-202510-25',
    titulo: '#',
    color: '#9B59B6',
  },
  {
    id: '202520-CNIU-126-ACT-NRC_28271',
    titulo: '#',
    color: '#9B59B6',
  },
];

const styles = {
  container: {
    width: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  },
  tarjeta: (color) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeft: `6px solid ${color}`,
    backgroundColor: '#fff',
    padding: '15px 20px',
    marginBottom: 15,
    boxShadow: '0 2px 6px rgba(0,0,0,0.07)',
    borderRadius: 4,
    width: '100%',
    boxSizing: 'border-box',
  }),
  textoContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1, // que el texto ocupe todo el espacio posible
  },
  id: {
    fontSize: 13,
    color: '#666',
    marginBottom: 6,
    whiteSpace: 'nowrap',
  },
  titulo: {
    fontWeight: '700',
    fontSize: 18,
    color: '#222',
    whiteSpace: 'normal',
  },
  boton: {
    background: 'none',
    border: 'none',
    color: '#555',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    fontWeight: '600',
    fontSize: 15,
    padding: 0,
    marginLeft: 20,
    whiteSpace: 'nowrap',
  },
  icono: {
    marginRight: 8,
  },
};

const Mensajes = () => {
  return (
    <div style={styles.container}>
      {mensajes.map(({ id, titulo, color }) => (
        <div key={id} style={styles.tarjeta(color)}>
          <div style={styles.textoContainer}>
            <div style={styles.id}>ID: {id}</div>
            <div style={styles.titulo}>{titulo}</div>
          </div>
          <button
            style={styles.boton}
            onClick={() => alert(`Nuevo mensaje para ${id}`)}
            aria-label={`Nuevo mensaje para ${titulo}`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
              style={styles.icono}
              aria-hidden="true"
              focusable="false"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1l-8 5-8-5V4zm0 3.234v4.532A2 2 0 0 0 2 14h12a2 2 0 0 0 2-2v-4.532l-8 5-8-5z" />
            </svg>
            Nuevo mensaje
          </button>
        </div>
      ))}
    </div>
  );
};

export default Mensajes;
