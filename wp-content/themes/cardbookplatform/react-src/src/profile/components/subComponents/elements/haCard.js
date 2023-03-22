import React, {useState} from "react";
import Popup from "../../popup";
const HaSingleCard = ({dataCard}) =>{
    const [isVisible, setIsVisible] = useState(false);
    const [showPoupUpSuccess, setShowPopupSuccess] = useState(null);
 
    const togglePopup = () => {
        setIsVisible(!isVisible);
    };
    const formHandler = (event) =>{
        event.preventDefault();
        setShowPopupSuccess(true)
        setIsVisible(false); 
    }
    const PopupHandlerHide = () =>{ 
        setShowPopupSuccess(null)
    }
    let levelAccess;
    if(dataCard.level === 'a')
        levelAccess = '<p>Has <span class="a-level">'+dataCard.level+'</span> access to</p>';
    
    if(dataCard.level === 'b')
        levelAccess = '<p>Has <span class="b-level">'+dataCard.level+'</span> access to</p>';
    
    if(dataCard.level === 'c')
        levelAccess = '<p>Has <span class="c-level">'+dataCard.level+'</span> access to</p>';       
        
 
     
    
        return(
            <>
                {dataCard &&
                    <div className="have-access-tab__list-single" >
                        <div className="ha-card">
                            <div className="ha-card__user-image">
                                <figure>
                                    <img src={dataCard.image} alt="" />
                                </figure>
                                <h3>{dataCard.title}</h3>
                            </div>
                            <div onClick={togglePopup} className="level" dangerouslySetInnerHTML={{ __html: levelAccess }} />
                            <h5>{dataCard.userName}</h5>
                            <div className="price"><span>{dataCard.price}$</span></div>
                        </div>
                        <Popup 
                            onClick={PopupHandlerHide} 
                            succesPopup={showPoupUpSuccess} 
                            formSubmit={formHandler} 
                            buyImageUser={dataCard.buyImageUser} 
                            levelAccess={dataCard.level} 
                            buyNameUser={dataCard.userName} 
                            buyFromUserId={dataCard.id} 
                            buyFromUserName={dataCard.title} 
                            price={dataCard.price} 
                            isVisible={isVisible} 
                            togglePopup={togglePopup}
                        />
                    </div>
                }
            </>
        )
}

export default HaSingleCard;