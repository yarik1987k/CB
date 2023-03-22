import React from "react";
import { useLocation } from 'react-router-dom';
import ProfileEdit from "./profileEdit";
const EditLoader = () =>{
    const location = useLocation();
    const path = location.pathname.split('/');
    let componentLoad;
    switch (path[3]) {
        case 'profile-info':
          componentLoad = <ProfileEdit />;
          break;
        case 'edit':
          componentLoad = <ProfileEdit />;
          break;
        case 'my-opportunities':
          componentLoad = <ProfileEdit />;
          break;
        case 'my-wallet-history':
          componentLoad = <ProfileEdit />;
          break;
        case 'referral':
          componentLoad = <ProfileEdit />;
          break;
        case 'notifications':
          componentLoad = <ProfileEdit />;
          break;
        case 'saved':
          componentLoad = <ProfileEdit />;
          break;
        case 'settings':
          componentLoad = <ProfileEdit />;
          break;
        default:
          componentLoad = null;
      }
     
    return(
        <>
            {componentLoad}
        </>
       
    );
}

export default EditLoader;