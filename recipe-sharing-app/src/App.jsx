import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Recipe Sharing App</h1>
          <p>Share your favorite recipes with friends and family!</p>
        </header>
        
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <AddRecipeForm />
                <RecipeList />
                <RecommendationsList />
                
                <RecipeDetails />
              </>
            } />
            <Route path="/recipes" element={<RecipeList />} />
            {/* Add additional routes as needed, for example: */}
            {/* <Route path="/recipes/:id" element={<RecipeDetail />} /> */}
          </Routes>
        </main>
        
        <footer>
          <p>© 2025 Recipe Sharing App</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;