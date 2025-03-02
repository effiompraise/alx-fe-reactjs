import React from 'react';
import useRecipeStore from './recipeStore';

const FavoriteButton = ({ recipeId }) => {
  // Get favorite functions from the store
  const isFavorite = useRecipeStore(state => state.isFavorite(recipeId));
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(recipeId);
    } else {
      addFavorite(recipeId);
    }
  };

  return (
    <button 
      onClick={toggleFavorite}
      className={`favorite-btn ${isFavorite ? 'favorited' : ''}`}
    >
      {isFavorite ? '★ Favorited' : '☆ Add to Favorites'}
    </button>
  );
};

export default FavoriteButton;