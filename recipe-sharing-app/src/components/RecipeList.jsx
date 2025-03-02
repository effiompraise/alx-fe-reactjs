import React from 'react';
import useRecipeStore from '../store/recipeStore';

const RecipeList = () => {
  // Get the recipes from our store
  const recipes = useRecipeStore(state => state.recipes);

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      
      {recipes.length === 0 ? (
        <p>No recipes yet. Add your first recipe above!</p>
      ) : (
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;