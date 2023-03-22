import React, { useState, useEffect } from 'react';
import apiFetch from '@wordpress/api-fetch';
function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = event => {
      event.preventDefault();
      wp.login({
        username: username,
        password: password,
      })
        .then(() => {
          // Login successful, redirect the user
          window.location.replace(home_url());
        })
        .catch(error => {
          // Login failed, display an error message
          setError(error.message);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={event => setUsername(event.target.value)} />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)} />
        <br />
        <button type="submit">Log In</button>
        {error && <div>{error}</div>}
      </form>
    );
  }
  export default LoginForm;