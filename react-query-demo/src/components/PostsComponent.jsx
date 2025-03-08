import React from 'react';
import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const PostsComponent = () => {
  const { 
    data: posts, 
    isLoading, 
    isError, 
    error, 
    refetch,
    isFetching 
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    staleTime: 60000,
    cacheTime: 300000,
    refetchOnWindowFocus: false,
    keepPreviousData: true
  });

  if (isLoading) return <div className="loading">Loading posts...</div>;
  
  if (isError) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="posts-container">
      <h2>Posts from JSONPlaceholder</h2>
      
      <div className="controls">
        <button 
          onClick={() => refetch()} 
          disabled={isFetching}
        >
          {isFetching ? 'Refreshing...' : 'Refresh Posts'}
        </button>
        <p className="status">
          {isFetching ? 'Fetching fresh data...' : 'Data is cached for 1 minute'}
        </p>
      </div>
      
      <ul className="posts-list">
        {posts.slice(0, 10).map(post => (
          <li key={post.id} className="post-item">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;