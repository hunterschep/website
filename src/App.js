// App.js - Classic Academic Website
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Research from './components/Research';
import Projects from './components/Projects';
import Writing from './components/Writing';

function App() {
  return (
    <div className="main-container">
      <Navbar />
      <div className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/writing" element={<Writing />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
