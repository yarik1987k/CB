import React,{useContext} from "react";
import { ProfileContext } from "../context/profileContext"; 
import UserInfoLeft from "./subComponents/userInfoLeft";
import UserInfoRight from "./subComponents/userInfoRight";
import ProfileTop from "./profileTop"; 
import ProfileMAinBlock from "./profileMainBlock";
const ProfileInfo = () =>{
    
    const {userData, userImage,industries,competences,direction,expertise_level,country,city} = useContext(ProfileContext);
 
        return(
            <div className="user-info">
                {userData && <ProfileTop userData={userData}></ProfileTop>}
                <div className="user-info__container">
                    {userData && <UserInfoLeft expertise_level={expertise_level} direction={direction} competences={competences} industries={industries} userImageUrl={userImage} userData={userData}/>}
                    {userData && <UserInfoRight description={userData[0].excerpt.rendered} country={country} city={city} userData={userData}></UserInfoRight>} 
                </div>
                {userData && <ProfileMAinBlock companiesAssign={userData[0].companies_assign}></ProfileMAinBlock>}
            </div>
        );
  
}
export default ProfileInfo;