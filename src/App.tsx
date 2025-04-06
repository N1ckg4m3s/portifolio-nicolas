import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPortifolio from './pages/main/main';
import DetalheProjetos from './pages/detalhes_projetos/detalheProjetos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPortifolio />} />
        <Route path="/detalhes-projeto" element={<DetalheProjetos />} />
      </Routes>
    </Router>
  );
}

export default App;
