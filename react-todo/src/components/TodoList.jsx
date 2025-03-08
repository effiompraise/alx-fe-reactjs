import { useState } from 'react';

const TodoList = () => {
  // ... existing state and functions ...

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          aria-label="New todo input"
        />
        <button type="submit" aria-label="Add todo">
          Add Todo
        </button>
      </form>
      <ul role="list">
        {todos.map(todo => (
          <li 
            key={todo.id} 
            className={todo.completed ? 'completed' : ''}
            role="listitem"
          >
            <span 
              onClick={() => toggleTodo(todo.id)}
              role="button" 
              tabIndex={0}
              aria-label={`Toggle ${todo.text}`}
            >
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              aria-label={`Delete ${todo.text}`}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};