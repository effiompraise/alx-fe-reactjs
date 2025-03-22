import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HomePage from './components/HomePage'
import RecipeDetail from './components/RecipeDetail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
        </Routes>
      </Router>
    </div>
    </>
  )
}

export default App
