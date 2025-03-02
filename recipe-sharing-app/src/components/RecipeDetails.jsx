import React from 'react';
import useRecipeStore from './recipeStore';
import { useParams, useNavigate } from 'react-router-dom';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  // Get the recipe ID from the URL
  const { id } = useParams();
  const recipeId = parseInt(id);
  
  // For navigation after deletion
  const navigate = useNavigate();
  
  // Find the specific recipe
  const recipe = useRecipeStore(state => 
    state.recipes.find(recipe => recipe.id === recipeId)
  );
  
  // Handle if recipe not found
  if (!recipe) {
    return (
      <div className="recipe-not-found">
        <h2>Recipe Not Found</h2>
        <p>The recipe you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/')}>Back to Recipes</button>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      <h2>{recipe.title}</h2>
      <p className="recipe-description">{recipe.description}</p>
      
      <div className="recipe-actions">
        <EditRecipeForm recipe={recipe} />
        <DeleteRecipeButton 
          recipeId={recipe.id} 
          onDelete={() => navigate('/')} 
        />
      </div>
    </div>
  );
};

export default RecipeDetails;