import React from 'react';
import SidebarLogo from './SidebarLogo';
import SidebarMenuItem from './SidebarMenuItem';
import {
  FaUniversity, FaUser, FaGlobe, FaBook, FaUsers,
  FaCalendarAlt, FaEnvelope, FaClipboardList, FaTools, FaSignOutAlt
} from 'react-icons/fa';

const Sidebar = ({ onSectionChange, activeSection }) => {
  const items = [
    {
      icon: <FaUniversity />,
      label: 'Página de la institución',
      onClick: () => window.open('https://www.sanluisgonzaga.edu.pe', '_blank'),
    },
    {
      icon: <FaUser />,
      label: 'Perfil',
      onClick: () => onSectionChange('Perfil'),
    },
    {
      icon: <FaGlobe />,
      label: 'Actividad',
      onClick: () => onSectionChange('Actividad'),
    },
    {
      icon: <FaBook />,
      label: 'Cursos',
      onClick: () => onSectionChange('Cursos'),
    },
    {
      icon: <FaUsers />,
      label: 'Organizaciones',
      onClick: () => onSectionChange('Organizaciones'),
    },
    {
      icon: <FaCalendarAlt />,
      label: 'Calendario',
      onClick: () => onSectionChange('Calendario'),
    },
    {
      icon: <FaEnvelope />,
      label: 'Mensajes',
      onClick: () => onSectionChange('Mensajes'),
    },
    {
      icon: <FaClipboardList />,
      label: 'Calificaciones',
      onClick: () => onSectionChange('Calificaciones'),
    },
    {
      icon: <FaTools />,
      label: 'Herramientas',
      onClick: () => onSectionChange('Herramientas'),
    },
    {
      icon: <FaSignOutAlt />,
      label: 'Cerrar sesión',
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

export default Sidebar;