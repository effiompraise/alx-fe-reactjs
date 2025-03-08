import { useParams } from 'react-router-dom';

export default function PostDetails() {
  const { postId } = useParams();
  
  return (
    <div>
      <h3>Post Details for ID: {postId}</h3>
      {/* Fetch and display actual post data here */}
    </div>
  );
}