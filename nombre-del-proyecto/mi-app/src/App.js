import { useState, useEffect } from 'react'; // 👈 Agrega useEffect
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import SearchBar from './componentes/SearchBar';
import Filters from './componentes/Filters';
import CoursesSection from './componentes/CoursesSection';
import Perfil from './pages/Perfil'; 
import Actividad from './pages/Actividad';
import Organizaciones from './pages/Organizaciones';
import Calendario from './pages/Calendario';
import Mensajes from './pages/Mensajes';
import Calificaciones from './pages/Calificaciones';
import Herramientas from './pages/Herramientas';
import Login from './login'; // 👈 Tu login modificado

function App() {
  const [activeSection, setActiveSection] = useState('Cursos');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null); // 👈 Nuevo estado para el rol (admin, docente, estudiante)

  // 👈 Cargar rol desde localStorage al montar (para persistencia en recargas)
  useEffect(() => {
    const storedRole = localStorage.getItem('userRole');
    if (storedRole) {
      setIsAuthenticated(true);
      setUserRole(storedRole);
    }
  }, []);

  // Función para manejar login
  const handleLogin = (rol) => {
    setIsAuthenticated(true);
    setUserRole(rol);
    // Opcional: Cambiar sección inicial según rol
    if (rol === 'estudiante') {
      setActiveSection('Cursos'); // Ej. inicia en Cursos para estudiantes
    } else if (rol === 'docente') {
      setActiveSection('Actividad'); // Ej. para docentes
    } else if (rol === 'admin') {
      setActiveSection('Organizaciones'); // Ej. para admin
    }
  };

  // Función para cerrar sesión (agrega esto en Sidebar o Header)
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    setIsAuthenticated(false);
    setUserRole(null);
    setActiveSection('Cursos');
  };

  const renderMainContent = () => {
    console.log('Sección activa:', activeSection);
    switch (activeSection) {
      case 'Cursos':
        return (
          <>
            <SearchBar />
            <Filters />
            <CoursesSection />
          </>
        );
      case 'Perfil': return <Perfil />;
      case 'Actividad': return <Actividad />;
      case 'Organizaciones': return <Organizaciones />;
      case 'Calendario': return <Calendario />;
      case 'Mensajes': return <Mensajes />;
      case 'Calificaciones': return <Calificaciones />;
      case 'Herramientas': return <Herramientas />;
      default: return <div>Selecciona una sección</div>;
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />; // 👈 Pasa handleLogin que recibe el rol
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar 
        onSectionChange={setActiveSection} 
        activeSection={activeSection} 
        userRole={userRole} // 👈 Pasa el rol al Sidebar para personalizar opciones
        onLogout={handleLogout} // 👈 Pasa la función de logout
      />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header userRole={userRole} /> // 👈 Opcional: pasa rol a Header si necesitas
        <main style={{ padding: '1rem', flex: 1 }}>
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}

export default App;