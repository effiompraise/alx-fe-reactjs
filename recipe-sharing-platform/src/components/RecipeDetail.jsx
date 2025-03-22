import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const recipeId = parseInt(id);
    const foundRecipe = recipeData.find(r => r.id === recipeId);
    
    if (foundRecipe) {
      setRecipe(foundRecipe);
    }
    
    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold text-red-500">Recipe not found</h2>
        <p className="mt-4">
          <Link to="/" className="text-blue-500 hover:underline">
            Return to Home Page
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/" className="inline-block mb-6 text-blue-500 hover:underline">
        &larr; Back to Recipes
      </Link>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold mb-2">{recipe.title}</h1>
            <p className="text-gray-600 mb-4">{recipe.summary}</p>
            
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-700">
                <span className="font-semibold">Prep:</span> {recipe.prepTime}
              </div>
              <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-700">
                <span className="font-semibold">Cook:</span> {recipe.cookTime}
              </div>
              <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-700">
                <span className="font-semibold">Servings:</span> {recipe.servings}
              </div>
            </div>
          </div>
        </div>
        
        
        <div className="p-6 md:flex">
          
          <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block w-4 h-4 mt-1 mr-2 bg-blue-500 rounded-full flex-shrink-0"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-gray-200">Instructions</h2>
            <ol className="space-y-4">
              {recipe.instructions.map((step, index) => (
                <li key={index} className="flex">
                  <span className="inline-flex items-center justify-center w-6 h-6 mr-3 mt-0.5 bg-blue-500 text-white rounded-full flex-shrink-0 font-bold text-sm">
                    {index + 1}
                  </span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;