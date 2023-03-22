import React from "react";

const UserImage = ({url}) =>{
    return(
        <figure>
           {url && <img src={url} alt={''}/>} 
        </figure>
    );
}
export default UserImage;