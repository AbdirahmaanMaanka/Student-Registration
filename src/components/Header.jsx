// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold">Maanka</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
          <Link to="/register" className="text-white hover:text-gray-400">Register</Link>
          <Link to="/lists" className="text-white hover:text-gray-400">Student List</Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
