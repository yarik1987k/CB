import React, {useContext} from "react";
import { ProfileContext } from "../../../context/profileContext";
const AlertNotificationSaved = () =>{
     const {alertClickHandler} = useContext(ProfileContext);

     setTimeout(() => {
        alertClickHandler()
     }, 2000);
    return(
        <div className="alert-notification">
            <div className="alert-notification__inner"> 
                <div className="text">
                    <div className="icon">
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.9225 2H27.095C33.0275 2 37 6.165 37 12.36V26.6592C37 32.835 33.0275 37 27.095 37H11.9225C5.99 37 2 32.835 2 26.6592V12.36C2 6.165 5.99 2 11.9225 2ZM18.5025 24.7321L26.815 16.4196C27.41 15.8246 27.41 14.8621 26.815 14.2496C26.22 13.6546 25.24 13.6546 24.645 14.2496L17.4175 21.4771L14.355 18.4146C13.76 17.8196 12.78 17.8196 12.185 18.4146C11.59 19.0096 11.59 19.9721 12.185 20.5846L16.35 24.7321C16.6475 25.0296 17.0325 25.1696 17.4175 25.1696C17.82 25.1696 18.205 25.0296 18.5025 24.7321Z" fill="#2FCF6F"/>
                            <path d="M26.8145 16.42L18.502 24.7325C18.2045 25.03 17.8195 25.17 17.417 25.17C17.032 25.17 16.647 25.03 16.3495 24.7325L12.1845 20.585C11.5895 19.9725 11.5895 19.01 12.1845 18.415C12.7795 17.82 13.7595 17.82 14.3545 18.415L17.417 21.4775L24.6445 14.25C25.2395 13.655 26.2195 13.655 26.8145 14.25C27.4095 14.8625 27.4095 15.825 26.8145 16.42Z" fill="white"/>
                        </svg>
                    </div>
                    <div className="text-inner">
                        <h3>Saved</h3>
                        <p>Contact saved</p>
                    </div> 
                </div>
                <div className="close-btn">
                    <button onClick={alertClickHandler}>
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M21.1015 11.3218C21.3944 11.0289 21.3944 10.5541 21.1015 10.2612C20.8086 9.96828 20.3337 9.96828 20.0408 10.2612L15.6811 14.6209L11.3213 10.2612C11.0285 9.96828 10.5536 9.96828 10.2607 10.2612C9.96779 10.5541 9.96779 11.0289 10.2607 11.3218L14.6204 15.6816L10.2607 20.0413C9.96779 20.3342 9.96779 20.8091 10.2607 21.102C10.5536 21.3949 11.0285 21.3949 11.3213 21.102L15.6811 16.7422L20.0408 21.102C20.3337 21.3949 20.8086 21.3949 21.1015 21.102C21.3944 20.8091 21.3944 20.3342 21.1015 20.0413L16.7417 15.6816L21.1015 11.3218Z" fill="white"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default AlertNotificationSaved;