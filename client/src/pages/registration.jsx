import React, { useState } from 'react';
import './CSS/registration.css';

const Registration = () => {
    const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", username: "", password: "" });
    const [errorMessages, setErrorMessages] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });

        // Resetujemy komunikat o błędzie, jeśli użytkownik zaczyna ponownie wprowadzać dane
        setErrorMessage(name, ""); 
    };

    const renderErrorMessage = (name) =>
        errorMessages[name] && <div className="error">{errorMessages[name]}</div>;

    const setErrorMessage = (name, message) => {
        setErrorMessages({ ...errorMessages, [name]: message });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Sprawdzamy, czy pola są wypełnione
        if (formData.firstName.trim() === "") {
            setErrorMessage("firstName", "First name is required");
            return;
        }

        if (formData.lastName.trim() === "") {
            setErrorMessage("lastName", "Last name is required");
            return;
        }

        if (formData.email.trim() === "") {
            setErrorMessage("email", "Email is required");
            return;
        }

        if (formData.username.trim() === "") {
            setErrorMessage("username", "Username is required");
            return;
        }

        if (formData.password.trim() === "") {
            setErrorMessage("password", "Password is required");
            return;
        }

        // Tutaj możesz dodać logikę rejestracji, np. wysłanie danych do serwera
    };

    return (
        <div className="app">
            <div className="registration-form">
                <div className="title">Registration</div>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <label>First Name </label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                        {renderErrorMessage("firstName")}
                    </div>
                    <div className="input-container">
                        <label>Last Name </label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                        {renderErrorMessage("lastName")}
                    </div>
                    <div className="input-container">
                        <label>Email </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                        {renderErrorMessage("email")}
                    </div>
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
        </div>
    );
}

export default Registration;