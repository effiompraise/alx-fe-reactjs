import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';
import SearchBar from './SearchBar';

const RecipeList = () => {
  // Get the filtered recipes and search term from the store
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const searchTerm = useRecipeStore(state => state.searchTerm);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);
  
  // Make sure recipes are filtered when component mounts
  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div className="recipe-list">
      <h2>All Recipes</h2>
      
      <SearchBar />
      
      {filteredRecipes.length === 0 ? (
        <p>
          {searchTerm 
            ? `No recipes found matching "${searchTerm}"` 
            : "No recipes yet. Add your first recipe above!"}
        </p>
      ) : (
        <div className="recipe-grid">
          {filteredRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <h3>
                <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
              </h3>
              <p>{recipe.description.substring(0, 100)}...</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;