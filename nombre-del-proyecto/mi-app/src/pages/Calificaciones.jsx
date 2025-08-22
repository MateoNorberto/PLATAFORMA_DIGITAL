import React, { useState } from 'react';

// Datos de ejemplo
const cursos = [
  {
    id: '202520-PIAD-625-TEC-NRC_13229',
    titulo: '#',
    color: '#FFD700',
    promedio: 0.0,
    trabajos: [
      { id: 'E01', titulo: '#', enviado: '16/8/25', nota: 0.0, icon: '📄' },
      { id: 'participacion', titulo: 'Participación', nota: 0.0, icon: '📄' },
      { id: 'IP_empresa', titulo: 'Nota IP_empresa', nota: 0.0, icon: '📄' },
    ],
    linkTrabajos: 9,
  },
  {
    id: 'PREVENCION-202510-25',
    titulo: '#',
    color: '#007BFF',
    promedio: null,
    trabajos: [],
    linkTrabajos: 1,
  },
  {
    id: '202520-CNIU-108-ACT-NRC_25914',
    titulo: '#',
    color: '#FF6600',
    promedio: null,
    trabajos: [],
    linkTrabajos: 6,
  },
  {
    id: '202520-PIAD-629-TAL-NRC_13825',
    titulo: '#',
    color: '#7DE0F3',
    promedio: 0.0,
    trabajos: [
      { id: 'IP01', titulo: '#', enviado: '9/8/25', nota: 0.0, icon: '📄' },
      { id: 'actitudes', titulo: 'Actitudes', nota: 0.0, icon: '📄' },
      { id: 'Tarea01', titulo: 'Tarea 01', enviado: '8/8/25', nota: 0.0, icon: '📅' },
    ],
    linkTrabajos: 0,
  },
  {
    id: '202520-PIAD-626-TEC-NRC_13230',
    titulo: '#',
    color: '#007BFF',
    promedio: null,
    trabajos: [
      { id: 'asistencia', titulo: 'Asistencia', nota: '00/100', icon: '📅' },
      { id: 'evalParcial', titulo: 'Evaluación Parcial T01', pendiente: '16/8/25' },
    ],
    linkTrabajos: 11,
  },
];

// Componente reutilizable del header
const Header = ({ titulo, onBack }) => (
  <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #ccc', marginBottom: 20 }}>
    {onBack ? (
      <button onClick={onBack} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" stroke="currentColor" fill="none"
             strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
    ) : (
      <div style={{ width: 24 }} />
    )}
    <h2 style={{ flexGrow: 1, textAlign: 'center', fontWeight: 'normal' }}>{titulo}</h2>
    <div style={{ width: 24 }} />
  </div>
);

// Vista secundaria
const HojaSecundaria = ({ onVolver }) => (
  <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
    <Header titulo="Hoja secundaria" onBack={onVolver} />
    <p style={{ textAlign: 'center', fontSize: 18 }}>
      Aquí se muestra una vista secundaria simulando ir "atrás" o una hoja distinta.
    </p>
  </div>
);

// Componente principal
const Calificaciones = () => {
  const [vistaSecundaria, setVistaSecundaria] = useState(false);

  const handleVerTodos = (curso) => {
    alert(`Ver todos los trabajos del curso:\n${curso.titulo} (${curso.id})`);
  };

  if (vistaSecundaria) return <HojaSecundaria onVolver={() => setVistaSecundaria(false)} />;

  return (
    <div style={{ maxWidth: 900, margin: '0 auto', padding: 20 }}>
      <Header titulo="Cursos y organizaciones actuales" onBack={() => setVistaSecundaria(true)} />

      {cursos.map((curso) => (
        <div key={curso.id} style={{ borderTop: `3px solid ${curso.color}`, marginBottom: 25, background: '#fff' }}>
          {/* Título y promedio */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 10, borderBottom: '1px solid #eee' }}>
            <div style={{ fontSize: 12, color: '#666' }}>{curso.id}</div>
            <div style={{ flex: 1, marginLeft: 15, fontWeight: 'bold' }}>{curso.titulo}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" stroke="currentColor" fill="none"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M21.21 15.89A10 10 0 1 1 8 2.05" />
                <path d="M22 12H12V2" />
              </svg>
              <span style={{
                backgroundColor: curso.promedio != null ? '#333' : '#eee',
                color: curso.promedio != null ? '#fff' : '#999',
                borderRadius: 12,
                padding: '2px 10px',
                minWidth: 40,
                textAlign: 'center',
              }}>
                {curso.promedio ?? '--'}
              </span>
            </div>
          </div>

          {/* Calificaciones */}
          <div style={{ borderBottom: '1px solid #eee', padding: '6px 15px', fontWeight: 'bold' }}>
            Calificaciones recientes
          </div>

          {curso.trabajos.length > 0 ? (
            curso.trabajos.map((trabajo) => (
              <div key={trabajo.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 15px', borderBottom: '1px solid #eee' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 30,
                    height: 30,
                    border: '1px solid #444',
                    borderRadius: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 16,
                  }}>
                    {trabajo.icon || '📄'}
                  </div>
                  <div>
                    <div style={{ fontWeight: '600' }}>{trabajo.titulo}</div>
                    {trabajo.enviado && <div style={{ fontSize: 12, color: '#888' }}>Enviado: {trabajo.enviado}</div>}
                    {trabajo.pendiente && <div style={{ fontSize: 12, color: '#888' }}>Pendiente: {trabajo.pendiente}</div>}
                  </div>
                </div>
                <div style={{
                  backgroundColor: '#333',
                  color: '#fff',
                  borderRadius: 20,
                  padding: '2px 10px',
                  fontWeight: '600',
                  minWidth: 40,
                  textAlign: 'center',
                }}>
                  {trabajo.nota ?? '--'}
                </div>
              </div>
            ))
          ) : (
            <div style={{
              padding: 20,
              textAlign: 'center',
              fontStyle: 'italic',
              color: '#666',
              background: 'repeating-linear-gradient(45deg, #f0f0f0, #f0f0f0 10px, #fafafa 10px, #fafafa 20px)',
            }}>
              Su trabajo calificado recientemente aparecerá aquí
            </div>
          )}

          {/* Botón ver todos */}
          <div style={{ padding: '10px 15px', textAlign: 'right' }}>
            <button
              onClick={() => handleVerTodos(curso)}
              style={{
                background: 'none',
                border: 'none',
                color: '#007bff',
                fontWeight: '600',
                cursor: 'pointer',
                textDecoration: 'underline',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              Ver todos los trabajos ({curso.linkTrabajos})
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" stroke="currentColor" fill="none"
                   strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calificaciones;
