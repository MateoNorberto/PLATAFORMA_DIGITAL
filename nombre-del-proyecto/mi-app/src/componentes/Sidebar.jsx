import React from 'react';
import SidebarLogo from './SidebarLogo'; // ← IMPORTAS el logo personalizado
import SidebarMenuItem from './SidebarMenuItem'; // ← Para usar los ítems del menú
import { FaUniversity, FaUser, FaGlobe, FaBook, FaUsers, FaCalendarAlt, FaEnvelope, FaClipboardList, FaTools, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  const items = [
    {
      icon: <FaUniversity />,
      label: 'Página de la institución',
      onClick: () => window.open('https://www.sanluisgonzaga.edu.pe', '_blank'),
    },
    { icon: <FaUser />, label: 'ARIEL LEO NORBER...' },
    { icon: <FaGlobe />, label: 'Actividad' },
    { icon: <FaBook />, label: 'Cursos', active: true },
    { icon: <FaUsers />, label: 'Organizaciones' },
    { icon: <FaCalendarAlt />, label: 'Calendario' },
    { icon: <FaEnvelope />, label: 'Mensajes' },
    { icon: <FaClipboardList />, label: 'Calificaciones' },
    { icon: <FaTools />, label: 'Herramientas' },
    { icon: <FaSignOutAlt />, label: 'Cerrar sesión' },
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
      
      {/* Aquí usamos el componente SidebarLogo */}
      <SidebarLogo />

      {/* Listamos los items del menú */}
      {items.map((item, index) => (
        <SidebarMenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          active={item.active}
          onClick={item.onClick}
        />
      ))}

      {/* Pie de página del sidebar */}
      <div style={{ marginTop: 'auto', fontSize: '0.7rem', color: '#666', paddingTop: '1rem' }}>
        <div>Privacidad</div>
        <div>Condiciones</div>
        <div>Accesibilidad</div>
      </div>
    </aside>
  );
};

export default Sidebar;
