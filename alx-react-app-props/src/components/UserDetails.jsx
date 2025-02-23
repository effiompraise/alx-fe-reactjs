import { useContext } from 'react';
import { UserContext } from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  const styles = {
    container: {
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      maxWidth: '400px',
      margin: '20px auto',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    text: {
      margin: '10px 0',
      color: '#333'
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.text}>Name: {userData.name}</p>
      <p style={styles.text}>Email: {userData.email}</p>
    </div>
  );
}

export default UserDetails;