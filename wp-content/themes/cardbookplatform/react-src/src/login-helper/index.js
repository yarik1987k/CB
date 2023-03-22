import React, {useContext, useState, useEffect, useHistory} from "react";
import { LoginContext, LoginContextProvider } from "./context";
 
import './login.scss';
 

const LoginIndex = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isLoogedIn, setIsLoggedIn] = useState(false);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [remmeberMe, setRemmeberMe] = useState(false);
    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        const response = await fetch('/wp-json/custom/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: email, password: password }),
        });
        const data = await response.json();
        if (data.success) {
            
            setTimeout(() => {
                setIsLoading(false)
            }, 1000);
            // Login success
            setIsLoggedIn(true)
        } else {
            // Login error
            setIsLoggedIn(false)
        }
    };
    useEffect(()=>{

    },[isLoogedIn,isLoading])
     
    if(isLoading){
        return (
            <div className="loading_animation">
                <div className="lds-ripple">
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }

    return(
            <div className="main-grid">
                <div className="login">
                    <div className="container">
                        <div className="login-title">
                            <h1>Sign in to CardBook</h1>
                            <p> To log in, please verify your email password.</p>
                        </div>
                        <div className="login-form">
                            <div className="form-group">
                                <input 
                                    type="email"
                                    placeholder="email@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <div className="password">
                                    <input 
                                        type={isShowPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button className={`show-hide-pass ${isShowPassword ? "active" : ""}`} onClick={toggleShowPassword}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M8.09756 12C8.09756 14.1333 9.8439 15.8691 12 15.8691C14.1463 15.8691 15.8927 14.1333 15.8927 12C15.8927 9.85697 14.1463 8.12121 12 8.12121C9.8439 8.12121 8.09756 9.85697 8.09756 12ZM17.7366 6.04606C19.4439 7.36485 20.8976 9.29455 21.9415 11.7091C22.0195 11.8933 22.0195 12.1067 21.9415 12.2812C19.8537 17.1103 16.1366 20 12 20H11.9902C7.86341 20 4.14634 17.1103 2.05854 12.2812C1.98049 12.1067 1.98049 11.8933 2.05854 11.7091C4.14634 6.88 7.86341 4 11.9902 4H12C14.0683 4 16.0293 4.71758 17.7366 6.04606ZM12.0012 14.4124C13.3378 14.4124 14.4304 13.3264 14.4304 11.9979C14.4304 10.6597 13.3378 9.57362 12.0012 9.57362C11.8841 9.57362 11.767 9.58332 11.6597 9.60272C11.6207 10.6694 10.7426 11.5227 9.65971 11.5227H9.61093C9.58166 11.6779 9.56215 11.833 9.56215 11.9979C9.56215 13.3264 10.6548 14.4124 12.0012 14.4124Z" fill="white"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="remmber-me">
                                    <label htmlFor="remmeber-me-checkbox">
                                        
                                        <input 
                                            id="remmeber-me-checkbox"
                                            type="checkbox" 
                                            name="remmeber-me"
                                            value={remmeberMe}
                                            onChange={(e) => setRemmeberMe(true)}
                                        />
                                        <span>Keep me signed in</span>
                                    </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button className="login-btn" onClick={handleSubmit}>Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
    )
}
export default LoginIndex;