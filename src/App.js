
import { useState, useEffect, useRef } from 'react';
import './App.css';
// import "./index.css";


function App() {
  
  const [state, setState] = useState(false);

  const toggleButton = (event) => {
    setState(current => !current);

    event.preventDefault();

    console.log("running")
  }

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return; // 👈️ return early if first render
    }

    console.log('state: ', state);
  }, [state]);

  return (
    <div class="form-container">
      <form class="register-form">
       
        {state && <div class="success-message">Success! Thank you for registering</div>} 
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        
       { !state && <span id="first-name-error">Please enter a first name</span>}
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
       
        {!state && <span id="last-name-error">Please enter a last name</span>}
        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        
         {!state && <span id="email-error">Please enter an email address</span>}        
         <button class="form-field" type="submit" onClick={toggleButton}>
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
