import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <span className="nav-separator"> | </span>
      <Link to="/research">Research</Link>
      <span className="nav-separator"> | </span>
      <Link to="/projects">Software</Link>
      <span className="nav-separator"> | </span>
      <Link to="/writing">Writing</Link>
      <span className="nav-separator"> | </span>
      <a 
        href="https://drive.google.com/file/d/1Lkt3DRC1ncp7lVdHrS4-wtcaEkj0N5YL/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
      >
        CV
      </a>
      <span className="nav-separator"> | </span>
      <a href="mailto:hunter.scheppat@bc.edu">Contact</a>
    </div>
  );
};

export default Navbar;
