import { useState } from 'react'
import UserProfile from './components/UserProfile'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      
      <UserProfile />
      
      
      <div className="mt-8 text-center">
        <div className="flex gap-4 justify-center mb-4">
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Vite + React</h1>
        
        <div className="card bg-white p-6 rounded-lg shadow-md mb-4">
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
          >
            Count is {count}
          </button>
          <p className="mt-4 text-gray-600">
            Edit <code className="font-mono bg-gray-100 px-2 py-1 rounded">src/App.jsx</code> and save to test HMR
          </p>
        </div>
        
        <p className="read-the-docs text-gray-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App