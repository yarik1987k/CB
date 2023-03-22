import React from "react";
import ProfileImageSlider from "./subComponents/profileImageSlider";
import SocialLinks from "./subComponents/socialLinks";
const ProfileTop = (props) =>{
    
    const socialObject = [
        {facebook: props.userData[0].social_facebook},
        {instagram: props.userData[0].social_instagram},
        {linkedin: props.userData[0].social_linkedin},
        {tiktok: props.userData[0].social_tiktok},
        {twitter: props.userData[0].social_twitter},
        {youtube: props.userData[0].social_youtube},
    ]
    
    return(
        <div className="user-info__profile-top">
            <ProfileImageSlider image={props.userData[0].user_cover_image}></ProfileImageSlider>
            <SocialLinks socials={socialObject}></SocialLinks>
        </div>
    );
}

export default ProfileTop;