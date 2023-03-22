import React, {createContext, useState, useEffect} from "react";

const LoginContext = createContext({});
const LoginContextProvider = ({children}) =>{
    const [isLoggedin, setIsLoggedIn] = useState(false);

    
    useEffect(()=>{

    });
    const value = {
 
    }
    return( 
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    );
}

export {LoginContext, LoginContextProvider};