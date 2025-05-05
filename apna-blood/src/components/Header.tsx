import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-red-600 text-white">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-2xl font-bold">
              ApnaBlood
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="hover:text-red-200">Home</Link>
              <Link to="/blood-banks" className="hover:text-red-200">Blood Banks</Link>
              <Link to="/donate-blood" className="hover:text-red-200">Donate Blood</Link>
              <Link to="/request-blood" className="hover:text-red-200">Request Blood</Link>
              <Link to="/campaigns" className="hover:text-red-200">Campaigns</Link>
              <Link to="/about" className="hover:text-red-200">About Us</Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hover:text-red-200">Login</Link>
            <Link to="/register" className="bg-white text-red-600 px-4 py-2 rounded hover:bg-red-50">
              Register
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 