import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../components/TodoList';
import '@testing-library/jest-dom';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  test('adds new todo', async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add new todo');
    const addButton = screen.getByRole('button', { name: /add todo/i });
    
    fireEvent.change(input, { target: { value: 'New Test Todo' } });
    fireEvent.click(addButton);
    
    expect(await screen.findByText('New Test Todo')).toBeInTheDocument();
  });

  test('toggles todo completion', () => {
    render(<TodoList />);
    const todoText = screen.getByText('Learn React');
    const listItem = todoText.closest('li');
    
    fireEvent.click(todoText);
    expect(listItem).toHaveClass('completed');
    
    fireEvent.click(todoText);
    expect(listItem).not.toHaveClass('completed');
  });

  test('does not add empty todo', () => {
    render(<TodoList />);
    const initialItems = screen.getAllByRole('listitem').length;
    const addButton = screen.getByRole('button', { name: /add todo/i });
    
    fireEvent.click(addButton);
    const currentItems = screen.getAllByRole('listitem').length;
    
    expect(currentItems).toBe(initialItems);
  });

  test('deletes todo', () => {
    render(<TodoList />);
    const deleteButtons = screen.getAllByRole('button', { name: /delete/i });
    const initialCount = deleteButtons.length;
    
    fireEvent.click(deleteButtons[0]);
    const remainingTodos = screen.getAllByRole('button', { name: /delete/i });
    
    expect(remainingTodos.length).toBe(initialCount - 1);
  });
});