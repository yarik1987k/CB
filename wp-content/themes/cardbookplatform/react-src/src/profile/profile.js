import React from "react";
import {ProfileContextProvider } from "./context/profileContext";
import ProfileInfo from "./components/profileInfo";
import "./css/style.scss"; 
import MainNavigation from "../ComponentsMain/mainNav"; 

const Profile = () =>{  
    return(
        <ProfileContextProvider>
            <div className="main-grid">
                <MainNavigation/>
                <ProfileInfo/>
            </div>
        </ProfileContextProvider>
    )
}
export default Profile;