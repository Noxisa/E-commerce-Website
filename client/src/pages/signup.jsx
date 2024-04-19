import React, {useState} from 'react';
import './CSS/signup.css';

const Signup = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const { username, password } = formData;

    const userData = database.find((user) => user.username === username);

    if (userData) {
      if (userData.password !== password) {
        setErrorMessages({ password: "Invalid password" });
      } else {
        setIsSubmitted(true);
      }
    } else {
      setErrorMessages({ username: "Username not found" });
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const renderErrorMessage = (name) =>
    errorMessages[name] && <div className="error">{errorMessages[name]}</div>;

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          {renderErrorMessage("username")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
          {renderErrorMessage("password")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>User is successfully logged in</div>
        ) : (
          renderForm
        )}
      </div>
    </div>
  );
}

export default Signup;
