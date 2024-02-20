import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Play from './pages/Play/Play';
import Stats from './pages/Statistiques';
import NotFound from './pages/NotFound/NotFound';
import './styles/styles.scss';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jouer" element={<Play />} />
        <Route path="/statistiques" element={<Stats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
