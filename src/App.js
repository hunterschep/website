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
    // Parent container with relative positioning and min-height to cover the viewport
    <div className="relative min-h-screen">
      {/* Background component rendered behind everything */}
      <Background />

      {/* Main content container with a higher z-index */}
      <div className="relative z-10">
        {/* Horizontal Navbar at the top */}
        <Navbar />

        {/* Page content below the navbar */}
        <div className="p-8">
          <Routes>
            {/* Default route shows the About page */}
            <Route path="/" element={<About />} />
            {/* Other routes */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            {/* Optionally add a route for /contact */}
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
