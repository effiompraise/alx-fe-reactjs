import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <h1>Recipe Sharing App</h1>
        <p>Share your favorite recipes with friends and family!</p>
      </header>
      
      <main>
        <AddRecipeForm />
        <RecipeList />
      </main>
      
      <footer>
        <p>© 2025 Recipe Sharing App</p>
      </footer>
    </div>
  );
}

export default App;