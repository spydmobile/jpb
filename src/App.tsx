import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Art from './pages/Art';
import Music from './pages/Music';
import Store from './pages/Store';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Art" element={<Art />} />
        <Route path="/Music" element={<Music />} />
        <Route path="/store" element={<Store />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;