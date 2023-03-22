import React from "react";
import { ProfileContextProvider } from "../profile/context/profileContext";
import MainNavigation from "../ComponentsMain/mainNav";
import ProfileBar from "./profileBar";
import SliderOverview from "./slider";
import SuggestionBlock from "./suggestion";
import Recommendation from "./recommendation";
import './scss/index.scss';
const Oververview = () =>{

    return(
    <ProfileContextProvider>
        <div className="main-grid">
            <MainNavigation/>
            <div className="overview-block">
                <ProfileBar/>
                <SliderOverview/>
                <SuggestionBlock/>
                <Recommendation/>
            </div>
        </div>
    </ProfileContextProvider>
    )

}

export default Oververview;