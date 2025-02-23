import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const counterStyles = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '2rem',
    marginBottom: '2rem',
    textAlign: 'center'
  };

  const buttonStyles = {
    backgroundColor: '#2c3e50',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    margin: '0 0.5rem',
    borderRadius: '4px',
    cursor: 'pointer'
  };

  return (
    <div style={counterStyles}>
      <h2>Counter Component</h2>
      <p>Count: {count}</p>
      <div>
        <button 
          style={buttonStyles} 
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button 
          style={buttonStyles} 
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button 
          style={{...buttonStyles, backgroundColor: '#e74c3c'}} 
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter