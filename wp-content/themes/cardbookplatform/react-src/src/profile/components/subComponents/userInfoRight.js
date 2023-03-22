import React from "react"; 
import Location from "./elements/location";

const UserInfoRight = ({country,city,description}) =>{
     
    return(
        <div className="user-info__right">
            <div className="top-col">
                <h3>About me</h3>
                {country && city && <Location country={country} city={city}></Location> }
            </div>
            <div className="bottom-col">
                <div className="user-info__description" dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </div>
    );
}
export default UserInfoRight;