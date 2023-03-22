import React from "react";
import SingleElement from "./elements/singleElementCoTemplate";

const ProfileCommunities = ({data}) =>{ 
    const companiesList = data.map((d,i)=>{
        return(
            <SingleElement key={i} data={d}></SingleElement>
        ) 
    });

    return(
        <div className="companies-list">
            <h2>Member of the Communities</h2>
             {companiesList && companiesList}
        </div>
    );
}

export default ProfileCommunities;