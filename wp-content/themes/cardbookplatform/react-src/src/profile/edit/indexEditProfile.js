import React from "react";
import MainNavigation from "../../ComponentsMain/mainNav";
import { ProfileContextProvider } from "../context/profileContext";
import EditLoader from "./editLoader";
import "./../css/style.scss"; 
 
const IndexEditProfile = () => {
    return(
        <ProfileContextProvider>
            <div className="main-grid">
                <MainNavigation/>
                <EditLoader/>
            </div>
        </ProfileContextProvider>
        )
}
export default IndexEditProfile;