import React from "react";
import Chip from "./elements/chip";
import UserImage from "./elements/userImage"; 
import CardMarketUserRequest from "./cradMarketUserRequest";
import ProfileOptions from "./profileOptions";
const UserInfoLeft = ({userImageUrl,userData, industries,competences,direction,expertise_level}) =>{
      

   
     
    return(
        <div className="user-info__left"> 
        <div className="user-info__left-data">
            <div className="user-info__left-options">
                <ProfileOptions userImageUrl={userImageUrl} name={userData[0].title.rendered} />
            </div>
            <div className="user-info__image">
               {userImageUrl && <UserImage url={userImageUrl}></UserImage>}
            </div>
            <div className="user-info__name">
                <h2>{userData && userData[0].title.rendered}</h2>
            </div>
            <div className="user-info__title">
                <h4>{userData && userData[0].user_job_title}</h4>
            </div>
            <div className="user-info__smallstat">
                <div className="user-info__smallstat-contacts">
                    <h3>XXX</h3>
                    <span>Contacts</span>
                </div>
                <div className="sep-line"></div>
                <div className="user-info__smallstat-rating">
                    <h3>x.x</h3>
                    <span>Rating</span>
                </div>
            </div>
            <div className="user-info__buttons">
                <button className="user-info__buttons-edit-profile c-btn c-btn-secondary">
                    <span>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M8.31366 16.6899L15.6357 7.2212C16.0336 6.71059 16.1751 6.12025 16.0424 5.51916C15.9275 4.97271 15.5914 4.45314 15.0874 4.05899L13.8582 3.08255C12.7882 2.23153 11.4618 2.32111 10.7013 3.29755L9.87887 4.36446C9.77276 4.49793 9.79929 4.69501 9.93193 4.80251C9.93193 4.80251 12.01 6.46872 12.0542 6.50455C12.1957 6.63892 12.3018 6.81808 12.3284 7.03308C12.3726 7.45411 12.0808 7.84827 11.6475 7.90201C11.4441 7.92889 11.2495 7.86618 11.108 7.74973L8.92383 6.01185C8.81771 5.93213 8.65854 5.94915 8.57011 6.05664L3.37928 12.7752C3.04325 13.1963 2.92829 13.7427 3.04325 14.2712L3.70647 17.1468C3.74184 17.2991 3.87449 17.4066 4.03366 17.4066L6.95185 17.3707C7.48242 17.3618 7.97763 17.1199 8.31366 16.6899ZM12.3997 15.7944H17.1581C17.6224 15.7944 18 16.1769 18 16.6472C18 17.1184 17.6224 17.5 17.1581 17.5H12.3997C11.9355 17.5 11.5579 17.1184 11.5579 16.6472C11.5579 16.1769 11.9355 15.7944 12.3997 15.7944Z" fill="white"/>
                        </svg>
                        Edit profile
                    </span>
                </button>
                <button className="user-info__buttons-get-access c-btn c-btn-primary c-btn-primary--gradiant">
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14.1752 12.1677C14.5202 12.1677 14.8002 11.8877 14.8002 11.5427V9.99935C14.8002 9.65435 14.5202 9.37435 14.1752 9.37435H9.43185C9.16185 8.48518 8.34352 7.83185 7.36685 7.83185C6.17185 7.83185 5.19935 8.80435 5.19935 9.99935C5.19935 11.1952 6.17185 12.1677 7.36685 12.1677C8.34352 12.1677 9.16185 11.5143 9.43185 10.6243H11.1918V11.5427C11.1918 11.8877 11.4718 12.1677 11.8168 12.1677C12.1618 12.1677 12.4418 11.8877 12.4418 11.5427V10.6243H13.5502V11.5427C13.5502 11.8877 13.8302 12.1677 14.1752 12.1677ZM6.38768 1.66602H13.6118C16.4352 1.66602 18.3327 3.64768 18.3327 6.59685V13.4027C18.3327 16.3518 16.4352 18.3327 13.611 18.3327H6.38768C3.56352 18.3327 1.66602 16.3518 1.66602 13.4027V6.59685C1.66602 3.64768 3.56352 1.66602 6.38768 1.66602ZM6.4486 10.0001C6.4486 9.49343 6.8611 9.08177 7.36693 9.08177C7.87277 9.08177 8.28527 9.49343 8.28527 10.0001C8.28527 10.5059 7.87277 10.9176 7.36693 10.9176C6.8611 10.9176 6.4486 10.5059 6.4486 10.0001Z" fill="white"/>
                        </svg>
                        Get access
                    </span>
                </button>
                <CardMarketUserRequest  userAddToId={userData[0].id}/>
            </div>
        </div>
        <div className="user-info__right-data">
            <div className="col">
                <div className="block-data">
                    <h6>Industries</h6>
                    {industries && <Chip data={industries}></Chip>}
                    
                </div>
                <div className="block-data">
                    <h6>Competences</h6>
                    {competences && <Chip data={competences}></Chip>}
                </div>
            </div>
            <div className="col">
                <div className="block-data">
                    <h6>Direction</h6>
                    {direction && <Chip data={direction}></Chip>}
                </div>
                <div className="block-data">
                    <h6>Expertise level</h6>
                    {expertise_level && <Chip data={expertise_level}></Chip>}
                </div>
            </div>
        </div>
    </div>
    );
}

export default UserInfoLeft;