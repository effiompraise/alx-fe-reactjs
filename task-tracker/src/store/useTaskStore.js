import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import useMessageStore from './useMessageStore';

const useTaskStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (task) => {
        if (!task.title.trim()) {
          useMessageStore.getState().setMessage('Task title cannot be empty', 'error');
          return;
        }
        
        try {
          set((state) => ({ tasks: [...state.tasks, task] }));
          useMessageStore.getState().setMessage('Task added successfully', 'success');
        } catch (error) {
          useMessageStore.getState().setMessage('Failed to add task', 'error');
        }
      },
      removeTask: (id) => {
        try {
          set((state) => ({ tasks: state.tasks.filter(task => task.id !== id) }));
          useMessageStore.getState().setMessage('Task removed successfully', 'success');
        } catch (error) {
          useMessageStore.getState().setMessage('Failed to remove task', 'error');
        }
      },
      toggleTask: (id) => {
        try {
          set((state) => ({
            tasks: state.tasks.map(task =>
              task.id === id ? { ...task, completed: !task.completed } : task
            )
          }));
          useMessageStore.getState().setMessage('Task status updated', 'success');
        } catch (error) {
          useMessageStore.getState().setMessage('Failed to update task', 'error');
        }
      },
      fetchTasks: async () => {
        // Only fetch if we don't already have tasks (from localStorage)
        if (get().tasks.length === 0) {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            const data = await response.json();
            set({ tasks: data.slice(0, 5) });
            useMessageStore.getState().setMessage('Tasks fetched successfully', 'success');
          } catch (error) {
            console.error('Error fetching tasks:', error);
            useMessageStore.getState().setMessage('Error fetching tasks', 'error');
          }
        }
      },
    }),
    {
      name: 'task-storage', // name of the item in localStorage
      getStorage: () => localStorage, // storage to use
    }
  )
);

export default useTaskStore;