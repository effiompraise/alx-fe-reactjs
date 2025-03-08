import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div
        className="todo-text"
        onClick={() => toggleTodo(todo.id)}
        data-testid={`todo-${todo.id}`}
      >
        {todo.text}
      </div>
      <button
        className="delete-button"
        onClick={() => deleteTodo(todo.id)}
        aria-label={`Delete ${todo.text}`}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;