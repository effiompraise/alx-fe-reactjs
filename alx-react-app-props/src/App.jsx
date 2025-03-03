import UserProfile from './components/UserProfile'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Counter from './components/Counter'
import { UserContext } from './components/UserContext'
import ProfilePage from './components/ProfilePage'
function App() {
  const [count, setCount] = useState(0)
  const userData = { 
    name: "Jane Doe", 
    email: "jane.doe@example.com" 
  };

  const appStyles = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  };

  const profileContainerStyles = {
    display: 'flex',
    justifyContent: 'center', // Centers horizontally
    alignItems: 'center', // Centers vertically
    gap: '20px', // Space between profiles
    flexWrap: 'wrap', // Allows wrapping on smaller screens
    margin: '2rem 0' // Add some vertical spacing
  };

  return (
    <>
    
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>  
      <div style={appStyles}>
      <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>    
      <div style={profileContainerStyles}>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Professional chef and food blogger" 
        />
      </div>
      <h1>Vite + React</h1>
      <WelcomeMessage />
      <Header />, <MainContent />, <Footer />, <Counter />
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App