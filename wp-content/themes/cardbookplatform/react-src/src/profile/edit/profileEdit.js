import React from "react";
import BasicInformation from "./components/basicInformation";
import UserMediaEdit from "./components/profileMedia";
import LocationInformation from "./components/location";
import ProfileInformation from "./components/profileInformation";
import AdditionalInformation from "./components/additionalInformation";
import SocialConnect from "./components/socialConnect";
const ProfileEdit = () =>{

    return(
        <div className="profile-edit">
            <div className="profile-edit__container">
                <div className="profile-edit__top">
                    <div className="page-title">
                        <h2>Profile info</h2>
                    </div>
                    <div className="profile-preview">
                        <a href="">
                            <span>Profile Preview</span>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M8.59756 12C8.59756 14.1333 10.3439 15.8691 12.5 15.8691C14.6463 15.8691 16.3927 14.1333 16.3927 12C16.3927 9.85697 14.6463 8.12121 12.5 8.12121C10.3439 8.12121 8.59756 9.85697 8.59756 12ZM18.2366 6.04606C19.9439 7.36485 21.3976 9.29455 22.4415 11.7091C22.5195 11.8933 22.5195 12.1067 22.4415 12.2812C20.3537 17.1103 16.6366 20 12.5 20H12.4902C8.36341 20 4.64634 17.1103 2.55854 12.2812C2.48049 12.1067 2.48049 11.8933 2.55854 11.7091C4.64634 6.88 8.36341 4 12.4902 4H12.5C14.5683 4 16.5293 4.71758 18.2366 6.04606ZM12.5012 14.4124C13.8378 14.4124 14.9304 13.3264 14.9304 11.9979C14.9304 10.6597 13.8378 9.57362 12.5012 9.57362C12.3841 9.57362 12.267 9.58332 12.1597 9.60272C12.1207 10.6694 11.2426 11.5227 10.1597 11.5227H10.1109C10.0817 11.6779 10.0621 11.833 10.0621 11.9979C10.0621 13.3264 11.1548 14.4124 12.5012 14.4124Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <BasicInformation/>
                <UserMediaEdit/>
                <LocationInformation/>
                <ProfileInformation/>
                <AdditionalInformation/>
                <SocialConnect/>
            </div>
        </div>
    )
}
export default ProfileEdit;