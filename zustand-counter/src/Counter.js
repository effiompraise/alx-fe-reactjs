import React from 'react';
import useCountStore from './store';

function Counter() {
  const count = useCountStore((state) => state.count);
  const increment = useCountStore((state) => state.increment);
  const decrement = useCountStore((state) => state.decrement);
  const resetCount = useCountStore((state) => state.resetCount);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment (+)</button>
      <button onClick={decrement}>Decrement (-)</button>
      <button onClick={resetCount}>Reset (0)</button>
    </div>
  );
}

export default Counter;