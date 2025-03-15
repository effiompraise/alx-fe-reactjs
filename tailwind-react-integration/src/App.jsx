import { useState } from 'react'
import UserProfile from './components/UserProfile'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-4 sm:p-6">
      
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8 items-center justify-center">
        {/* User Profile Section */}
        <div className="w-full md:w-1/2">
          <UserProfile />
        </div>
        
        {/* Vite + React Demo Section */}
        <div className="w-full md:w-1/2 text-center">
          <div className="flex gap-6 justify-center mb-6">
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
              <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform duration-200">
              <img src={reactLogo} className="h-16 w-16 animate-spin-slow" alt="React logo" />
            </a>
          </div>
          
          <h1 className="text-3xl font-bold mb-6 text-gray-800">Vite + React</h1>
          
          <div className="card bg-white p-6 rounded-xl shadow-lg mb-6 hover:shadow-xl transition-shadow duration-300">
            <button 
              onClick={() => setCount((count) => count + 1)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Count is {count}
            </button>
            <p className="mt-4 text-gray-600">
              Edit <code className="font-mono bg-gray-100 px-2 py-1 rounded text-blue-600">src/App.jsx</code> and save to test HMR
            </p>
          </div>
          
          <p className="text-gray-500 hover:text-gray-700 transition-colors duration-200">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>
      
      <footer className="mt-10 text-center text-gray-500 text-sm">
        <p>Built with Tailwind CSS & React</p>
      </footer>
    </div>
  )
}

export default App