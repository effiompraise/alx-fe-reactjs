import { useState } from 'react';
import './App.css';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // This will be connected to the GitHub API search in a future step
    console.log('Searching for:', searchQuery);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>GitHub User Search</h1>
        <p>Search for GitHub users and view their profiles</p>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder="Search GitHub users..." 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
          <button type="submit">Search</button>
        </form>
        {searchQuery && (
          <p>Current search: {searchQuery}</p>
        )}
      </main>
    </div>
  );
}

export default App;