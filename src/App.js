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
      {/* Background with stars - positioned fixed and covers entire viewport */}
      <Background />
      
      {/* Content container */}
      <div className="App relative" style={{ backgroundColor: 'transparent', minHeight: '100vh' }}>
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
