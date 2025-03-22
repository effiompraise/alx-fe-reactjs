import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
import AddRecipeForm from './components/AddRecipeForm';
import Header from './components/Header';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
