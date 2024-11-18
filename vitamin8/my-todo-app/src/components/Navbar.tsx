// src/components/Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/Showpicture">Show Picture</Link> {/* Link to a secret page */}
    </nav>
  );
};

export default Navbar;

