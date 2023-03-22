import React, {useState, useContext} from "react";
import SettingsOptions from "./elements/settingsOptions";
import CollectionsOptions from "./elements/collectionsOptions";
import AlertNotificationSaved from "./elements/notificationAlertSaved";
import { ProfileContext } from "../../context/profileContext";
import AddCollectionPopup from "./addCollectionPopup";
const ProfileOptions = ({userImageUrl,name}) =>{ 
    const [isActiveSettings, setIsActiveSettings] = useState(false);
    
    const {isActiveCollections, clickHandlerCollections, savedNotificationAlert, showCollectionAddPop} = useContext(ProfileContext);


    const clickHandlerSettings = () =>{
        setIsActiveSettings(!isActiveSettings)
    }
     
    console.log(showCollectionAddPop)
    return(
        <div className="profile-options">
            <div className="addToFavorite">
                <button onClick={clickHandlerCollections}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M19.7381 6.15393C19.7381 3.40305 17.8574 2.30029 15.1496 2.30029H8.7907C6.16614 2.30029 4.19922 3.32786 4.19922 5.97047V20.6943C4.19922 21.4201 4.98017 21.8772 5.61275 21.5223L11.9947 17.9424L18.3215 21.5163C18.9551 21.8732 19.7381 21.4161 19.7381 20.6893V6.15393Z" stroke="white" strokeWidth="1.0947" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
                {isActiveCollections ? <CollectionsOptions/> : null}
            </div>
            <div className="settings">
                <button className="settings-btn" onClick={clickHandlerSettings}>
                    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="2.70146" cy="6.9998" r="1.8245" fill="white"/>
                        <circle cx="10.0003" cy="6.9998" r="1.8245" fill="white"/>
                        <circle cx="17.2972" cy="6.9998" r="1.8245" fill="white"/>
                    </svg>
                </button>
                {isActiveSettings ? <SettingsOptions/> : null}
            </div>
            {savedNotificationAlert ?  <AlertNotificationSaved /> : null }
            {showCollectionAddPop ? <AddCollectionPopup userImageUrl={userImageUrl} name={name} /> : null }
        </div>
        
    );
}
export default ProfileOptions;