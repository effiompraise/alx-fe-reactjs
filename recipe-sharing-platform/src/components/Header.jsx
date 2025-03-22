import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-100">
          Recipe Sharing
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-100 transition-colors duration-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/add-recipe" className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition-colors duration-200">
                Add Recipe
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;