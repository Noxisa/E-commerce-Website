import React, {useState} from 'react';
import './CSS/signup.css'; 

function Signup() {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isSubmitted, setIsSubmitted] = useState(false); 

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true); 
  };

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {!isSubmitted && ( 
          <>
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <label>Username </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={(event) => setFormData({ ...formData, username: event.target.value })}
                  required
                />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={(event) => setFormData({ ...formData, password: event.target.value })}
                  required
                />
              </div>
              <div className="button-container">
                <input type="submit" />
              </div>
              <div className="registration-link">
              Don't have an account? <a href="/registration">Register here</a>
              </div>
            </form>
          </>
        )}
        {isSubmitted && (
          <div>User is successfully logged in</div>
        )}
      </div>
    </div>
  );
}

export default Signup;