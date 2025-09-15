// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Research from './components/Research';

function App() {
  return (
    <>
      {/* Classic academic website background */}
      <Background />
      
      {/* Content container - simple and clean */}
      <div style={{ fontFamily: 'Times New Roman, serif', minHeight: '100vh', position: 'relative', zIndex: 10 }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
