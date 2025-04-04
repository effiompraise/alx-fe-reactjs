import { Link, NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Delicious Recipes</h1>
      
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 hover:scale-105 transform duration-300"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mb-4">{recipe.summary}</p>
              <Link 
                to={`/recipe/${recipe.id}`} 
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
              >
                View Recipe
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;