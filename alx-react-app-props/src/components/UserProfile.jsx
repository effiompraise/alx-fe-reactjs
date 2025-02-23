import { useContext } from 'react';
import { UserContext } from './UserContext';

const UserProfile = (props) => {
  const userData = useContext(UserContext);
  const profileStyles = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '10px',
    margin: '10px',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlige: 'center'
  };

  const nameStyles = {
    color: 'blue',
    marginTop: 0
  };

  const textStyles = {
    color: '#666',
    lineHeight: '1.5'
  };

 

  return (
    <div style={profileStyles}>
      <h2 style={nameStyles}>{props.name}</h2>
      <p style={textStyles}>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p style={textStyles}>Bio: {props.bio}</p>
    </div>
  );
};
  
  export default UserProfile;