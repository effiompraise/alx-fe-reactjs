import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const DeleteRecipeButton = ({ recipeId, onDelete }) => {
  // Get the deleteRecipe function from our store
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  
  // State to track if confirmation dialog is open
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = () => {
    // Delete the recipe
    deleteRecipe(recipeId);
    
    // Call the onDelete callback (usually to navigate away)
    if (onDelete) onDelete();
  };

  if (!showConfirm) {
    return (
      <button 
        onClick={() => setShowConfirm(true)}
        className="delete-btn"
      >
        Delete Recipe
      </button>
    );
  }

  return (
    <div className="delete-confirmation">
      <p>Are you sure you want to delete this recipe?</p>
      <div className="confirm-buttons">
        <button 
          onClick={handleDelete}
          className="confirm-delete-btn"
        >
          Yes, Delete
        </button>
        <button 
          onClick={() => setShowConfirm(false)}
          className="cancel-btn"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteRecipeButton;