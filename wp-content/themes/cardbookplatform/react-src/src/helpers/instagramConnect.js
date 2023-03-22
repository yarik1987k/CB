import React, { useState, useEffect } from 'react'; 
import InstagramIcon from './icons/instagram';
import axios from 'axios'; 
const InstagramLogin = () => { 
    const [accessToken, setAccessToken] = useState();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [userId, setUserId] = useState(null); 
    const [userName, setUserName] = useState(null); 
    const [userMedia, setUserMedia] = useState(null);

    const clientId = '911199126564549';
    const redirectUri = 'https://cardplat.local/profile/edit/profile-info';
  
    const handleAuth = () => {
      window.location.href = `https://api.instagram.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=user_profile,user_media&response_type=code`;
    };
  
     
  
    const getProfileData = async () => {
      try {
        const response = await axios.get(
          `https://graph.instagram.com/me?fields=id,username&access_token=${accessToken}`
        );
       
          console.log(response)
       // setUserId(response.data)
      } catch (err) {
        setError(err.response.data.error_message);
      }
 
    };



     

   
    
    useEffect(() => {
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
      
      const accessTokenCookie = getCookie('access_token_inst'); 
      const instaUserId = getCookie('access_token_inst_ui'); 
      if(accessTokenCookie){
        setAccessToken(accessTokenCookie)
      }
      if(instaUserId){
        setUserId(instaUserId)
      }

      const getUserName = async () =>{
        const response = await axios.get(`https://graph.instagram.com/v15.0/${userId}?fields=username&access_token=${accessToken}`)
        .then(res =>{ 
            setUserName(res.data.username)
        } )
      }
      
      const getUserMedia = async () =>{
        const response = await axios.get(`https://graph.instagram.com/v15.0/${userId}/media?access_token=${accessToken}`)
        .then(res =>{ 
            setUserMedia(res.data.data) 
        } )
      }
     

     
      if(accessToken){
        getUserName()
        getUserMedia()
      }
  
    }, [accessToken]); 
    if (loading) {
      return <p>Loading...</p>;
    }
 
    
    const getSingleMedia = async (mediaId) =>{
      const response = await axios.get(`https://graph.instagram.com/${mediaId}?fields=media_url&access_token=${accessToken}`)
      .then(res =>{ 
         console.log(res.data.media_url)
      } )
    }
    if(userMedia){
      userMedia.forEach(element => {
        
        getSingleMedia(element.id)
      });
    } 

    
 
    

    return (
      <button onClick={handleAuth} className='instagram-connect'>
        <InstagramIcon/>
        Connect with Instagram</button>
    );
};


export default InstagramLogin;