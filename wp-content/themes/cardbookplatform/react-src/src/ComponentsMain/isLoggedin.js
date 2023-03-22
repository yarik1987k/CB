import React, { useState, useEffect } from 'react';

const IsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const jwt = localStorage.getItem('wpToken');
    console.log(jwt)
    if (jwt) {
        fetch(`/wp-json/my-custom-namespace/v2/is-logged-in`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        })
            .then((response) => response.json())
            .then((data) => {
              console.log(data)
                setIsLoggedIn(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }
}, []);

return <p>{isLoggedIn ? 'Logged in' : 'Not logged in'}</p>;
};

export default IsLoggedIn; 