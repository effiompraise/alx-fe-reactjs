import React, { useState } from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';
import './App.css';

function App() {
  const [showFormik, setShowFormik] = useState(false);
  
  return (
    <div className="app-container">
      <h1>Form Handling in React</h1>
      
      <div className="toggle-container">
        <button onClick={() => setShowFormik(false)} className={!showFormik ? 'active' : ''}>
          Controlled Component
        </button>
        <button onClick={() => setShowFormik(true)} className={showFormik ? 'active' : ''}>
          Formik
        </button>
      </div>
      
      {showFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;