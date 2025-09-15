import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{ backgroundColor: '#f0f0f0', border: '1px solid #ccc', padding: '10px', marginBottom: '20px' }}>
      <div style={{ textAlign: 'center', fontSize: '14px', fontFamily: 'Times New Roman, serif' }}>
        <Link to="/" style={{ margin: '0 15px' }}>Home</Link>
        <span style={{ color: '#666' }}>|</span>
        <Link to="/research" style={{ margin: '0 15px' }}>Research</Link>
        <span style={{ color: '#666' }}>|</span>
        <Link to="/projects" style={{ margin: '0 15px' }}>Projects</Link>
        <span style={{ color: '#666' }}>|</span>
        <a 
          href="https://drive.google.com/file/d/1Lkt3DRC1ncp7lVdHrS4-wtcaEkj0N5YL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 15px' }}
        >
          CV/Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
