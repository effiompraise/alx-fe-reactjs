const UserProfile = (props) => {
  const profileStyles = {
    backgroundColor: 'white',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5rem',
    width: '300px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    textAlige: 'center'
  };

  const nameStyles = {
    color: '#2c3e50',
    marginTop: 0
  };

  const textStyles = {
    color: '#666',
    lineHeight: '1.5'
  };

 

  return (
    <div style={profileStyles}>
      <h2 style={nameStyles}>{props.name}</h2>
      <p style={textStyles}>Age: {props.age}</p>
      <p style={textStyles}>Bio: {props.bio}</p>
    </div>
  );
};
  
  export default UserProfile;