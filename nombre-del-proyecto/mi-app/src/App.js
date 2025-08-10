import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import SearchBar from './componentes/SearchBar'; // ✅ Importación añadida

function App() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar /> {/* Menú lateral */}

      {/* Contenido principal */}
      <div style={{ flex: 1 }}>
        <Header /> {/* Encabezado superior */}

        <div style={{ padding: '1rem' }}>
          <SearchBar /> {/* ✅ Barra de búsqueda visible */}
        </div>
      </div>
    </div>
  );
}

export default App;
