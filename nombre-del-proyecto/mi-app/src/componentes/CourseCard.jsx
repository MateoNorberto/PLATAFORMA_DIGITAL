import React from 'react';

const CourseCard = ({ course }) => {
  const handleClick = () => {
    // Abre una nueva ventana simulando redirección al curso
    const encodedCode = encodeURIComponent(course.code);
    window.open(`/course/${encodedCode}`, '_blank');
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        border: '1px solid #ddd',
        borderRadius: '6px',
        marginBottom: '12px',
        backgroundColor: '#ffffff',
        cursor: 'pointer',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
        transition: 'background-color 0.2s ease'
      }}
    >
      {/* Barra lateral de color */}
      <div style={{ width: '6px', height: '100%', backgroundColor: course.color, borderRadius: '3px', marginRight: '12px' }}></div>

      {/* Contenido */}
      <div style={{ flexGrow: 1 }}>
        <div style={{ fontSize: '13px', color: '#333', fontWeight: 500 }}>
          {course.code}
        </div>

        <div style={{ fontSize: '15px', fontWeight: 'bold', color: '#000', margin: '4px 0' }}>
          {course.title}
        </div>

        <div style={{ fontSize: '13px', color: '#666' }}>
          {course.status}
          {course.teacher && (
            <>
              {' '} | <span style={{ fontWeight: 500 }}>{course.teacher}</span>
            </>
          )}
          {' '} | <span style={{ color: '#007bff' }}>Más información ▼</span>
        </div>
      </div>

      {/* Icono de estrella */}
      <div style={{ marginLeft: '12px', color: '#888' }}>
        ⭐
      </div>
    </div>
  );
};

export default CourseCard;
