import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipeForm = () => {
  const navigate = useNavigate();
  
  
  const [formData, setFormData] = useState({
    title: '',
    summary: '',
    image: 'https://via.placeholder.com/150',
    ingredients: '',
    instructions: '',
    prepTime: '',
    cookTime: '',
    servings: ''
  });
  
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
    
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    
    if (!formData.title.trim()) {
      newErrors.title = 'Recipe title is required';
    }
    
    
    if (!formData.summary.trim()) {
      newErrors.summary = 'Recipe summary is required';
    }
    
    
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else {
      
      const ingredientsList = formData.ingredients
        .split('\n')
        .filter(item => item.trim().length > 0);
      
      if (ingredientsList.length < 2) {
        newErrors.ingredients = 'Please add at least two ingredients';
      }
    }
    
    
    if (!formData.instructions.trim()) {
      newErrors.instructions = 'Cooking instructions are required';
    } else {
      
      const instructionsList = formData.instructions
        .split('\n')
        .filter(item => item.trim().length > 0);
      
      if (instructionsList.length < 2) {
        newErrors.instructions = 'Please add at least two cooking steps';
      }
    }
    
    
    if (!formData.prepTime.trim()) {
      newErrors.prepTime = 'Preparation time is required';
    }
    
    
    if (!formData.cookTime.trim()) {
      newErrors.cookTime = 'Cooking time is required';
    }
    
    
    if (!formData.servings.trim()) {
      newErrors.servings = 'Number of servings is required';
    } else if (isNaN(formData.servings) || parseInt(formData.servings) <= 0) {
      newErrors.servings = 'Servings must be a positive number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validateForm()) {
      
      const newRecipe = {
        ...formData,
        
        ingredients: formData.ingredients
          .split('\n')
          .filter(item => item.trim().length > 0),
        instructions: formData.instructions
          .split('\n')
          .filter(item => item.trim().length > 0),
        
        servings: parseInt(formData.servings)
      };
      
      console.log('New Recipe:', newRecipe);
      
      
      alert('Recipe added successfully!');
      setFormData({
        title: '',
        summary: '',
        image: 'https://via.placeholder.com/150',
        ingredients: '',
        instructions: '',
        prepTime: '',
        cookTime: '',
        servings: ''
      });
      
      
      navigate('/');
    }
    
    setIsSubmitting(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Add New Recipe</h1>
      
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        
        <div className="mb-6">
          <label htmlFor="title" className="block text-gray-700 font-semibold mb-2">
            Recipe Title*
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.title ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="Enter recipe title"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="summary" className="block text-gray-700 font-semibold mb-2">
            Recipe Summary*
          </label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.summary ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="Write a brief description of your recipe"
            rows="2"
          ></textarea>
          {errors.summary && (
            <p className="text-red-500 text-sm mt-1">{errors.summary}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="image" className="block text-gray-700 font-semibold mb-2">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
            placeholder="Enter image URL (or leave default)"
          />
          <p className="text-gray-500 text-sm mt-1">
            Default placeholder will be used if left unchanged
          </p>
        </div>
        
        <div className="mb-6 md:flex md:space-x-4">
          
          <div className="mb-4 md:mb-0 md:w-1/3">
            <label htmlFor="prepTime" className="block text-gray-700 font-semibold mb-2">
              Prep Time*
            </label>
            <input
              type="text"
              id="prepTime"
              name="prepTime"
              value={formData.prepTime}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.prepTime ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
              placeholder="e.g. 15 minutes"
            />
            {errors.prepTime && (
              <p className="text-red-500 text-sm mt-1">{errors.prepTime}</p>
            )}
          </div>
          
          <div className="mb-4 md:mb-0 md:w-1/3">
            <label htmlFor="cookTime" className="block text-gray-700 font-semibold mb-2">
              Cook Time*
            </label>
            <input
              type="text"
              id="cookTime"
              name="cookTime"
              value={formData.cookTime}
              onChange={handleChange}
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.cookTime ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
              placeholder="e.g. 30 minutes"
            />
            {errors.cookTime && (
              <p className="text-red-500 text-sm mt-1">{errors.cookTime}</p>
            )}
          </div>
          
          <div className="md:w-1/3">
            <label htmlFor="servings" className="block text-gray-700 font-semibold mb-2">
              Servings*
            </label>
            <input
              type="number"
              id="servings"
              name="servings"
              value={formData.servings}
              onChange={handleChange}
              min="1"
              className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                errors.servings ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
              }`}
              placeholder="e.g. 4"
            />
            {errors.servings && (
              <p className="text-red-500 text-sm mt-1">{errors.servings}</p>
            )}
          </div>
        </div>
        
        
        <div className="mb-6">
          <label htmlFor="ingredients" className="block text-gray-700 font-semibold mb-2">
            Ingredients*
          </label>
          <p className="text-gray-500 text-sm mb-2">
            Add each ingredient on a new line. Include amount and name (e.g. 2 cups flour).
          </p>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.ingredients ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="200g flour
3 eggs
1 cup milk
2 tbsp sugar"
            rows="6"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>
        
        <div className="mb-6">
          <label htmlFor="instructions" className="block text-gray-700 font-semibold mb-2">
            Cooking Instructions*
          </label>
          <p className="text-gray-500 text-sm mb-2">
            Add each step on a new line. Be clear and detailed.
          </p>
          <textarea
            id="instructions"
            name="instructions"
            value={formData.instructions}
            onChange={handleChange}
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
              errors.instructions ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
            }`}
            placeholder="Preheat oven to 350°F.
Mix all dry ingredients in a bowl.
Add wet ingredients and stir until smooth."
            rows="8"
          ></textarea>
          {errors.instructions && (
            <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>
          )}
        </div>
        
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300 disabled:bg-blue-300"
          >
            {isSubmitting ? 'Adding Recipe...' : 'Add Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;