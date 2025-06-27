import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import MainPortifolio from './pages/main/main';
import MainPortifolio from './pages/main/mainIndex';
import DetalheProjetos from './pages/detalhes_projetos/detalheProjetos';
import ProjetosPaginados from './pages/projetos/projetos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortifolio />} />
        <Route path="/detalhes-projeto" element={<DetalheProjetos />} />
        <Route path="/projetos" element={<ProjetosPaginados />} />
      </Routes>
    </Router>
  );
}

export default App;
