import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds new todo', () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByText('Add Todo');
    
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    
    fireEvent.click(todo);
    expect(todo).toHaveClass('completed');
    
    fireEvent.click(todo);
    expect(todo).not.toHaveClass('completed');
  });

  test('deletes todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByText('Delete');
    const initialCount = deleteButtons.length;
    
    fireEvent.click(deleteButtons[0]);
    const remainingTodos = screen.getAllByText('Delete');
    
    expect(remainingTodos.length).toBe(initialCount - 1);
  });
});