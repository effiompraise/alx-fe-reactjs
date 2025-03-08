import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders TodoList with initial todos', () => {
    render(<TodoList />);
    
    // Check if the title is rendered
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a todo app')).toBeInTheDocument();
    expect(screen.getByText('Practice testing')).toBeInTheDocument();
  });

  test('allows adding a new todo', () => {
    render(<TodoList />);
    
    // Get the input and add button
    const input = screen.getByPlaceholderText('Add a new todo');
    const addButton = screen.getByText('Add');
    
    // Type in the input and click the add button
    fireEvent.change(input, { target: { value: 'New test todo' } });
    fireEvent.click(addButton);
    
    // Check if the new todo is added
    expect(screen.getByText('New test todo')).toBeInTheDocument();
    
    // Check if the input is cleared
    expect(input.value).toBe('');
  });

  test('allows toggling a todo completion status', () => {
    render(<TodoList />);
    
    // Get the first todo
    const firstTodo = screen.getByTestId('todo-1');
    
    // Initially, the todo should not have the 'completed' class
    expect(firstTodo.parentElement).not.toHaveClass('completed');
    
    // Click the todo to toggle its completion status
    fireEvent.click(firstTodo);
    
    // Now the todo should have the 'completed' class
    expect(firstTodo.parentElement).toHaveClass('completed');
    
    // Click again to toggle back
    fireEvent.click(firstTodo);
    
    // The todo should not have the 'completed' class again
    expect(firstTodo.parentElement).not.toHaveClass('completed');
  });

  test('allows deleting a todo', () => {
    render(<TodoList />);
    
    // Get all delete buttons
    const deleteButtons = screen.getAllByText('Delete');
    
    // Get the text of the first todo
    const firstTodoText = screen.getByTestId('todo-1').textContent;
    
    // Click the delete button for the first todo
    fireEvent.click(deleteButtons[0]);
    
    // The first todo should no longer be in the document
    expect(screen.queryByText(firstTodoText)).not.toBeInTheDocument();
  });
});