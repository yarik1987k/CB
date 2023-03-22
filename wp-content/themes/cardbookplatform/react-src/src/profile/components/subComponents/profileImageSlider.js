import React from "react";

const ProfileImageSlider = (props) =>{
    return(
        <div className="user-info__cover-image">
            <figure>
                <img src={props.image} alt=""/>
            </figure>
        </div>
    );
}

export default ProfileImageSlider;