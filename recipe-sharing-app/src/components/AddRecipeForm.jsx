import React, { useState } from 'react';
import useRecipeStore from '../store/recipeStore';

const AddRecipeForm = () => {
  // Get the addRecipe function from our store
  const addRecipe = useRecipeStore(state => state.addRecipe);
  
  // State to store form input values
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Don't add empty recipes
    if (!title.trim()) return;
    
    // Create a new recipe with a unique ID and add it to the store
    addRecipe({ 
      id: Date.now(), 
      title, 
      description 
    });
    
    // Clear the form fields
    setTitle('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <h2>Add a New Recipe</h2>
      
      <div className="form-group">
        <label htmlFor="title">Recipe Title:</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter recipe title"
          required
        />
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your recipe..."
          rows="4"
        />
      </div>
      
      <button type="submit" className="submit-btn">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;