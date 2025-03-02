import { useEffect } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Snackbar from './components/Snackbar';
import useTaskStore from './store/useTaskStore';

const App = () => {
  const fetchTasks = useTaskStore(state => state.fetchTasks);

  // Load tasks when the app starts
  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Task Tracker</h1>
          <p className="text-gray-600 text-sm mt-1">Keep track of what you need to do</p>
        </div>
        <div className="mb-4">
          <TaskForm />
          <TaskList />
        </div>
        <Snackbar />
      </div>
    </div>
  );
}

export default App;