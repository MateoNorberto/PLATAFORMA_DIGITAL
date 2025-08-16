import { useState } from 'react';
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import SearchBar from './componentes/SearchBar';
import Filters from './componentes/Filters';
import CoursesSection from './componentes/CoursesSection';

// Importa otros componentes según los necesites
// import Perfil from './componentes/Perfil';
// import Actividad from './componentes/Actividad';
// ...

function App() {
  const [activeSection, setActiveSection] = useState('Cursos'); // valor por defecto

  // Función para renderizar contenido dinámico
  const renderMainContent = () => {
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
        return <div>Contenido del Perfil</div>;
      case 'Actividad':
        return <div>Contenido de la Actividad</div>;
      case 'Organizaciones':
        return <div>Contenido de las Organizaciones</div>;
      case 'Calendario':
        return <div>Contenido del Calendario</div>;
      case 'Mensajes':
        return <div>Contenido de los Mensajes</div>;
      case 'Calificaciones':
        return <div>Contenido de las Calificaciones</div>;
      case 'Herramientas':
        return <div>Contenido de las Herramientas</div>;
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
