import React, {useContext} from "react";
import { ProfileContext } from "../context/profileContext";
import Filters from "./fillters";
import CardsList from "./cardsList";
const CardMArketMain = () =>{
    const {userImage, userData, myCardMarketUsers} = useContext(ProfileContext);
    return(
        <div className="cardmarket-profile">
            <div className="cardmarket-profile__container">
                <div className="cardmarket-profile__top">
                    <div className="return">
                    {userData &&                     
                        <a href={userData[0].link}>
                            <svg width="24" height="31" viewBox="0 0 24 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.3672 22.7017L8.28015 16.2202C7.90662 15.8224 7.90662 15.1776 8.28015 14.7798L14.3672 8.2983C14.7407 7.90057 15.3463 7.90057 15.7199 8.2983C16.0934 8.69604 16.0934 9.3409 15.7199 9.73864L10.3092 15.5L15.7199 21.2614C16.0934 21.6591 16.0934 22.304 15.7199 22.7017C15.3463 23.0994 14.7407 23.0994 14.3672 22.7017Z" fill="white"/>
                            </svg>
                        </a>
                    }
                    </div>
                    <div className="user-info">
                        <div className="user-image">
                            {userImage &&
                                <figure>
                                    <img src={userImage} alt=''/>
                                </figure>
                            }
                        </div>
                        <div className="user-name">
                            {userData && <h3>{userData[0].title.rendered}</h3>}
                            <p>CardMarket</p>
                        </div>
                    </div>
                    <Filters/>
                </div>
                <div className="cardmarket-profile__list">
                    <CardsList data={myCardMarketUsers}/>
                </div>
            </div>
        </div>
    )
}
export default CardMArketMain;