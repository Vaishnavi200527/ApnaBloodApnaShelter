import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-red-400">Home</Link></li>
              <li><Link to="/blood-banks" className="hover:text-red-400">Blood Banks</Link></li>
              <li><Link to="/donate-blood" className="hover:text-red-400">Donate Blood</Link></li>
              <li><Link to="/request-blood" className="hover:text-red-400">Request Blood</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Information</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-red-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-red-400">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-red-400">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-red-400">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: support@apnablood.com</li>
              <li>Phone: +91 1234567890</li>
              <li>Address: Mumbai, Maharashtra</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-red-400">Facebook</a>
              <a href="#" className="hover:text-red-400">Twitter</a>
              <a href="#" className="hover:text-red-400">Instagram</a>
              <a href="#" className="hover:text-red-400">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} ApnaBlood. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 