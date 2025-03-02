import React, { useState } from 'react';
import useRecipeStore from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  // Get the updateRecipe function from our store
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  // State to store form input values, initialized with current recipe
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Don't save empty recipes
    if (!title.trim()) return;
    
    // Update the recipe with new values
    updateRecipe({ 
      ...recipe,
      title, 
      description 
    });
    
    // Exit editing mode
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <button 
        onClick={() => setIsEditing(true)}
        className="edit-btn"
      >
        Edit Recipe
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="edit-recipe-form">
      <h3>Edit Recipe</h3>
      
      <div className="form-group">
        <label htmlFor="edit-title">Recipe Title:</label>
        <input
          id="edit-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="edit-description">Description:</label>
        <textarea
          id="edit-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
        />
      </div>
      
      <div className="form-buttons">
        <button type="submit" className="save-btn">Save Changes</button>
        <button 
          type="button" 
          onClick={() => setIsEditing(false)}
          className="cancel-btn"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditRecipeForm;