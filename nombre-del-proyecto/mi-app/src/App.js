import { useState } from 'react';
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import SearchBar from './componentes/SearchBar';
import Filters from './componentes/Filters';
import CoursesSection from './componentes/CoursesSection';
import Perfil from './pages/Perfil'; // Importamos los componentes de pages/
import Actividad from './pages/Actividad';
import Organizaciones from './pages/Organizaciones';
import Calendario from './pages/Calendario';
import Mensajes from './pages/Mensajes';
import Calificaciones from './pages/Calificaciones';
import Herramientas from './pages/Herramientas';

function App() {
  const [activeSection, setActiveSection] = useState('Cursos');

  // Función para renderizar contenido dinámico
  const renderMainContent = () => {
    console.log('Sección activa:', activeSection); // Depuración
    switch (activeSection) {
      case 'Cursos':
        return (
          <>
            <SearchBar />
            <Filters />
            <CoursesSection />
          </>
        );
      case 'Perfil':
        return <Perfil />;
      case 'Actividad':
        return <Actividad />;
      case 'Organizaciones':
        return <Organizaciones />;
      case 'Calendario':
        return <Calendario />;
      case 'Mensajes':
        return <Mensajes />;
      case 'Calificaciones':
        return <Calificaciones />;
      case 'Herramientas':
        return <Herramientas />;
      default:
        return <div>Selecciona una sección</div>;
    }
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar onSectionChange={setActiveSection} activeSection={activeSection} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ padding: '1rem', flex: 1 }}>
          {renderMainContent()}
        </main>
      </div>
    </div>
  );
}

export default App;