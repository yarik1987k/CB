import React,{useState, useEffect, useContext} from "react";
import { ProfileContext } from "../profile/context/profileContext";
import FacebookIcon from "./icons/facebook";
const FacebookConnect = () =>{ 
  const [facebookAccessToken, setFacebookAccessToken] = useState(null);
  const [facebookUserInformation, setFacebookUserInformation] = useState(null);
  const {getFacebookInformation, userFacebbokConnectInformation} = useContext(ProfileContext);

 
    const connectToFacebook = () => {
        // Initialize the Facebook SDK
        window.fbAsyncInit = function() {
          const FB = window.FB;
          FB.init({
            appId: '491875089721997',
            cookie: true,
            xfbml: true,
            version: 'v8.0'
          });
    
        // Check if the user is already logged in
            FB.getLoginStatus(function(response) {
             
              if (response.status === 'connected') {
                // The user is already logged in, so you can proceed to retrieve the access token
                setFacebookAccessToken(response.authResponse.accessToken);
                localStorage.setItem('fbConnected', response.authResponse.accessToken);
              } else {
                // The user is not logged in, so you need to prompt them to login
                FB.login(function(response) {
                  if (response.authResponse) {
                    // The user has logged in and granted the necessary permissions
                    setFacebookAccessToken(response.authResponse.accessToken);
                    localStorage.setItem('fbConnected', response.authResponse.accessToken);
                    window.location.reload();
                  } else {
                    // The user has not granted the necessary permissions
                    console.error('User did not grant permissions');
                  }
                }, { scope: 'public_profile,email' });
              }
            }); 
        } 
          // Check if the user is already logged in 
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = 'https://connect.facebook.net/en_US/sdk.js';
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk')); 
      };
    
    
      useEffect(() => {

    
      },[facebookAccessToken]); 
      
    return(
        
        <button className="facebook-connect" onClick={connectToFacebook}>
             <FacebookIcon/>
            {facebookUserInformation != null ? 'Connected to Facebook' : 'Continue with Facebook' } </button>
        
    )
}
export default FacebookConnect;