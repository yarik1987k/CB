import React from "react";
import MainNavigation from "../../ComponentsMain/mainNav";
import { ProfileContextProvider } from "../context/profileContext";
import CardMArketMain from "./cardMarketMain";
import "./../css/style.scss"; 
const ProfileCardMarket = () =>{
    const fullPath = window.location.pathname;
    return(
    <ProfileContextProvider>
        <div className="main-grid">
            <MainNavigation currentPath={fullPath} />
            <CardMArketMain/>
        </div>
    </ProfileContextProvider>
    )
}
export default ProfileCardMarket;