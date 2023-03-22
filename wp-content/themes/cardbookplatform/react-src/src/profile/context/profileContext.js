import React, {createContext, useState, useEffect} from "react";
import * as functions from "./../functions/index";


const ProfileContext = createContext({});
const ProfileContextProvider = ({children}) =>{
    const [userData, setUserData] = useState(); 

    const [industries, setIndustries] = useState([]);
    const [competences, setCompetences] = useState([]);
    const [direction, setdirection] = useState([]);
    const [expertise_level, setexpertise_level] = useState([]);
    const [userImage, setUserImage] = useState();
    const [country, setUserCountry] = useState();
    const [city, setUserCity] = useState();
    const [myAccessUsers,setMyAccessUsers] = useState([]);
    const [myCardMarketUsers,setMyCardMarketUsers] = useState([]);

    const [saveUserToCollection, setSaveUserToCollection ] = useState(false);
    const [isActiveCollections, setIsActiveCollections] = useState(false);
    const [savedNotificationAlert, setSavedNotificationAlert] = useState(false);
    const [showCollectionAddPop, setShowCollectionAddPop] = useState(false);
    const [saveNewCollection, setNewCollection] = useState(['All business cards']);

    const [userFacebbokConnectInformation,setUserFacebbokConnectInformation] = useState(null);

    


    const getTermsData = (termName,termId) =>{ 
        let url =  '/wp-json/wp/v2/'+termName+'/'+termId;
        fetch(url)
        .then(response => response.json())
        .then(json => {
            if(termName === 'industries')
            setIndustries(termName => [...termName, json])

            if(termName === 'competences')
            setCompetences(termName => [...termName, json])

            if(termName === 'direction')
            setdirection(termName => [...termName, json])

            if(termName === 'expertise_level')
            setexpertise_level(termName => [...termName, json])

            if(termName === 'country')
            setUserCountry(json.name) 

            if(termName === 'city')
            setUserCity(json.name) 
        }) 
    }
    const getMyAccessUsers = (id, level, price, userName, buyImageUser)=>{
        let url = '/wp-json/wp/v2/users_list/'+id+'?_embed';
        fetch(url)
        .then(response => response.json())
        .then(json =>{ 
             const accessData =
                {
                    id:json.id,
                    image:json._embedded['wp:featuredmedia'][0].source_url,
                    title: json.title.rendered,
                    excerpt: json.excerpt,
                    user_job_title:json.user_job_title,
                    level:level,
                    price:price,
                    userName: userName,
                    buyImageUser:buyImageUser
                } 
             setMyAccessUsers(id => [...id, accessData])
        })
    }

    const getMyCardMarketUsers = (id, level, price, userName, buyImageUser,userCoverImage)=>{
        let url = '/wp-json/wp/v2/users_list/'+id+'?_embed';
        fetch(url)
        .then(response => response.json())
        .then(json =>{
             const userMarketData =
                {
                    id:json.id,
                    link: json.link,
                    image:json._embedded['wp:featuredmedia'][0].source_url,
                    title: json.title.rendered,
                    excerpt: json.excerpt,
                    user_job_title:json.user_job_title,
                    level:level,
                    price:price,
                    userName: userName,
                    buyImageUser:buyImageUser,
                    userCoverImage:userCoverImage,
                    userJobTitle:json.user_job_title
                } 
                setMyCardMarketUsers(id => [...id, userMarketData])
              
        })
    }

    const getUserData = () =>{
        let cusrrentUserSlug = functions.getUserBySlug();
        let url =  '/wp-json/wp/v2/users_list?_embed&slug='+cusrrentUserSlug;
        fetch(url)
        .then( response => response.json())
        .then(json => { 
            if(json !== '')
            json[0].industries.map(i =>       getTermsData('industries',i))
            json[0].competences.map(i =>      getTermsData('competences',i))
            json[0].direction.map(i =>        getTermsData('direction',i))      
            json[0].expertise_level.map(i =>  getTermsData('expertise_level',i) )   
            json[0].expertise_level.map(i =>  getTermsData('expertise_level',i) )   
            json[0].expertise_level.map(i =>  getTermsData('expertise_level',i) )   
            json[0].country.map(i => getTermsData('country',i))
            json[0].city.map(i    => getTermsData('city',i))
            setUserImage(json[0]._embedded['wp:featuredmedia'][0].source_url)
            setUserData(json)
             
            if(json[0].my_access_users){
                json[0].my_access_users.map(d =>{
                   return getMyAccessUsers(d.id, d.user_access_user_level, d.user_access_user_price,json[0].title.rendered, json[0]._embedded['wp:featuredmedia'][0].source_url )
                })
            }

            if(json[0].my_card_market_users.length){
                json[0].my_card_market_users.map(d =>{
                    return getMyCardMarketUsers(
                        d.id, 
                        d.my_card_market_user_level, 
                        d.my_card_market_user_price,
                        json[0].title.rendered, 
                        json[0]._embedded['wp:featuredmedia'][0].source_url, 
                        json[0].user_cover_image
                    )
                })
            }

        }); 
    }
    
    const saveCollection = () =>{
        setSaveUserToCollection(!saveUserToCollection);
        setIsActiveCollections(!isActiveCollections);
        alertClickHandler()
       
         
    }
    const clickHandlerCollections = () =>{
        setIsActiveCollections(!isActiveCollections);
    }
    const alertClickHandler = () =>{ 
        setSavedNotificationAlert(!savedNotificationAlert); 

    }
    
    const showCollectionAddPopup = () =>{
        setShowCollectionAddPop(!showCollectionAddPop);
        setIsActiveCollections(!isActiveCollections);
    }

    const saveNewCollectionCreation = (data) =>{
        showCollectionAddPopup() 
        setNewCollection(saveNewCollection => [...saveNewCollection, data])
        //setNewCollection()
    }

    const getFacebookInformation = () =>{
      const hasFblstInfo = JSON.parse(localStorage.getItem('fbConnectedIno'));
      
       
      if(hasFblstInfo){
        setUserFacebbokConnectInformation(hasFblstInfo); 

        return;
      }

      if(userFacebbokConnectInformation == null){
        console.log('test if continue')
        const hasFblst = localStorage.getItem('fbConnected') ;
         
        if(hasFblst){
          window.fbAsyncInit = function() {
            const FB = window.FB;
            FB.init({
              appId: '491875089721997',
              cookie: true,
              xfbml: true,
              version: 'v8.0'
            });
      
            FB.api(
              '/me',
              'GET',
              {
                "fields":"id,name,picture,link",
                access_token: hasFblst
              },
              function(response) {
                
                setUserFacebbokConnectInformation(response);
                localStorage.setItem('fbConnectedIno', JSON.stringify(response));
              }
            );
          }
          (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
          }(document, 'script', 'facebook-jssdk')); 
        }

      }
    }
    const facebookLogout = () =>{ 
        localStorage.removeItem('fbConnected'); 
            window.fbAsyncInit = function() {
                const FB = window.FB;
                FB.init({
                  appId: '491875089721997',
                  cookie: true,
                  xfbml: true,
                  version: 'v8.0'
                });
                FB.getLoginStatus(function(response) {
                    if (response.status === 'connected') {
                      // The user is logged in and has a valid access token, so you can log them out
                      FB.logout(function(response) {
                        console.log('Logged out of Facebook', response);
                       
                        setUserFacebbokConnectInformation(null);
                      });
                      // Clear the Facebook access token from the component's state
                     
                    } else {
                      // The user is not logged in to Facebook, or their access token is invalid or has expired
                      console.error('User is not logged in or has an invalid access token');
                    }
                  });
                
              }

            (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/en_US/sdk.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));  
    }

    useEffect(()=>{
        getUserData()
    },[]);
    
      const value = {
          saveCollection,
          clickHandlerCollections,
          alertClickHandler,
          showCollectionAddPopup,
          saveNewCollectionCreation,
          getFacebookInformation,
          facebookLogout,
          userData: userData,
          industries: industries,
          competences: competences,
          direction: direction,
          expertise_level: expertise_level,
          userImage: userImage,
          country: country,
          city: city,
          myAccessUsers:myAccessUsers,
          myCardMarketUsers:myCardMarketUsers,
          saveUserToCollection:saveUserToCollection,
          isActiveCollections:isActiveCollections,
          savedNotificationAlert:savedNotificationAlert,
          showCollectionAddPop:showCollectionAddPop,
          saveNewCollection:saveNewCollection,
          userFacebbokConnectInformation:userFacebbokConnectInformation
      }
    return( 
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    );
}

export {ProfileContext, ProfileContextProvider};