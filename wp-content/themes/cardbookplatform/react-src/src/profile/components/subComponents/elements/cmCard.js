import React, {useEffect} from "react";
const CmSingleCard = ({dataCard}) =>{
    
     
    useEffect(()=>{
      
    },[dataCard])

    let levelAccess;
    if(dataCard.level === 'a')
        levelAccess = '<span class="a-level">'+dataCard.level+'</span><p>Level access</p>';
    
    if(dataCard.level === 'b')
        levelAccess = '<span class="b-level">'+dataCard.level+'</span><p>Level access</p>';
    
    if(dataCard.level === 'c')
        levelAccess = '<span class="c-level">'+dataCard.level+'</span><p>Level access</p>';       
        
    
    
    return(
        <>
            {dataCard &&
                <div className="card-market-tab__list-single">
                    <div className="user-cover">
                        <figure>
                            <img src={dataCard.userCoverImage} alt=""/>
                        </figure>
                    </div>
                    <div className="user-profile">
                        <div className="user-profile__user-image">
                            <figure>
                                <img src={dataCard.image} alt="" />
                            </figure>
                        </div>
                        <div className="user-profile__names">
                            <h3>{dataCard.title}</h3>
                            <h5>{dataCard.userJobTitle}</h5>
                        </div>
                        <div className="user-profile__data">
                            <div className="level" dangerouslySetInnerHTML={{ __html: levelAccess }} />
                            <div className="price"><span>{dataCard.price}$</span><p>Price for access</p></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default CmSingleCard;