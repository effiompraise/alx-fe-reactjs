import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Posts from './components/Posts';
import PostDetails from './components/PostDetails';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'posts', element: <Posts /> },
      { path: 'posts/:postId', element: <PostDetails /> },
      { 
        path: 'profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
        children: [
          { index: true, element: <ProfileDetails /> },
          { path: 'settings', element: <ProfileSettings /> }
        ]
      },
      { path: 'login', element: <Login /> }
    ]
  }
]);

function Layout() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/profile">Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default function App() {
  return <RouterProvider router={router} />;
}