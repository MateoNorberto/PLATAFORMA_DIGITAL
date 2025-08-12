import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import SearchBar from './componentes/SearchBar';
import Filters from './componentes/Filters';
import CoursesSection from './componentes/CoursesSection'; // Nuevo import

function App() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Header />
        <main style={{ padding: '1rem', flex: 1 }}>
          <SearchBar />
          <Filters />
          <CoursesSection /> {/* Nuevo componente agregado */}
        </main>
      </div>
    </div>
  );
}

export default App;
