import React from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const FavoritesList = () => {
  // Get favorites data from the store
  const favorites = useRecipeStore(state => {
    // Get the favorite IDs
    const favIds = state.favorites;
    // Find the corresponding recipe objects
    return favIds.map(id => 
      state.recipes.find(recipe => recipe.id === id)
    ).filter(Boolean); // Remove any undefined results
  });

  if (favorites.length === 0) {
    return (
      <div className="favorites-section">
        <h2>My Favorites</h2>
        <p>You haven't added any favorites yet! Click the star on recipes you love.</p>
      </div>
    );
  }

  return (
    <div className="favorites-section">
      <h2>My Favorites</h2>
      <div className="favorites-grid">
        {favorites.map(recipe => (
          <div key={recipe.id} className="favorite-card">
            <h3>
              <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description.substring(0, 60)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;