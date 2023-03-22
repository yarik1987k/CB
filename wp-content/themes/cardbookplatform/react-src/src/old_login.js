import React, { useState } from 'react';
import WPAPI from 'wpapi';
import IsLoggedIn from './ComponentsMain/isLoggedin';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loggedin, setLoggedin] = useState(null); 
    const handleSubmit = (event) => {
        event.preventDefault();

        const requestBody = {
            username: username,
            password: password,
        };

        fetch(`/wp-json/profile/v1/login`, {
            method: 'POST',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => { 
                console.log(data)
                if (data) {
                    localStorage.setItem('wpToken', data);
                   // window.location.reload();
                    setLoggedin(true)
                } else {
                    setError(data.message);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };
 
    return ( 
        <> 
        
       
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <label htmlFor="username">Username: bubu</label>
            <input
                type="text"
                id="username" 
                value={username}
                onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <input
                type="password" 
                id="password" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <button type="submit">Log In</button>
           
        </form>
         <IsLoggedIn/> 
         </>
    );
};

export default Login;