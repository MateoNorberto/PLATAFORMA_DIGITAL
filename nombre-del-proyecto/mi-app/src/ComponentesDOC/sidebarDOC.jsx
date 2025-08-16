import React from 'react';
import SidebarLogo from '../componentes/SidebarLogo';
import SidebarMenuItem from '../componentes/SidebarMenuItem';
import {
  FaTachometerAlt, FaBookOpen, FaPlusCircle, FaFolderOpen,
  FaClipboardList, FaStar, FaComments, FaChartLine,
  FaCog, FaSignOutAlt
} from 'react-icons/fa';

const SidebarDOC = ({ onSectionChange, activeSection }) => {
  const items = [
    {
      icon: <FaTachometerAlt />,
      label: 'Dashboard',
      onClick: () => onSectionChange('Dashboard'),
    },
    {
      icon: <FaBookOpen />,
      label: 'Mis Cursos',
      onClick: () => onSectionChange('Mis Cursos'),
    },
    {
      icon: <FaPlusCircle />,
      label: 'Crear Curso',
      onClick: () => onSectionChange('Crear Curso'),
    },
    {
      icon: <FaFolderOpen />,
      label: 'Contenido del Curso',
      onClick: () => onSectionChange('Contenido del Curso'),
    },
    {
      icon: <FaClipboardList />,
      label: 'Tareas y Exámenes',
      onClick: () => onSectionChange('Tareas y Exámenes'),
    },
    {
      icon: <FaStar />,
      label: 'Calificaciones',
      onClick: () => onSectionChange('Calificaciones'),
    },
    {
      icon: <FaComments />,
      label: 'Foros y Mensajes',
      onClick: () => onSectionChange('Foros y Mensajes'),
    },
    {
      icon: <FaChartLine />,
      label: 'Seguimiento de Estudiantes',
      onClick: () => onSectionChange('Seguimiento de Estudiantes'),
    },
    {
      icon: <FaCog />,
      label: 'Configuración',
      onClick: () => onSectionChange('Configuración'),
    },
    {
      icon: <FaSignOutAlt />,
      label: 'Cerrar Sesión',
      onClick: () => alert('Sesión cerrada'),
    },
  ];

  return (
    <aside style={{
      width: '220px',
      height: '100vh',
      background: '#1c1c1c',
      color: '#ccc',
      display: 'flex',
      flexDirection: 'column',
      padding: '1rem',
      boxSizing: 'border-box',
      fontFamily: 'Arial, sans-serif'
    }}>
      <SidebarLogo />
      {items.map((item, index) => (
        <SidebarMenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          onClick={item.onClick}
          active={item.label === activeSection}
        />
      ))}
      <div style={{ marginTop: 'auto', fontSize: '0.7rem', color: '#666', paddingTop: '1rem' }}>
        <div>Privacidad</div>
        <div>Condiciones</div>
        <div>Accesibilidad</div>
      </div>
    </aside>
  );
};

export default SidebarDOC;
