import React, {useContext, useState, useEffect} from "react";
import {ProfileContext} from "./../context/profileContext";
import CmSingleCard from "./subComponents/elements/cmCard"; 

const TabCardMarket = () =>{
    const {myCardMarketUsers} = useContext(ProfileContext);
    const [cardsLoad, setCardsLoad] = useState(true);
     
        let listCards ;
    
        if(myCardMarketUsers){
            listCards = myCardMarketUsers.map((d,i)=>{
                 
                if(i < 10){
                    return(
                        <CmSingleCard key={i} dataCard={d} />
                    );
                } 
                
            }) 
        }
 
    
    useEffect(()=>{
        if(myCardMarketUsers.length > 10){
            setCardsLoad(false)
        }
    },[myCardMarketUsers])
   
    const loadButton = () =>{
        let CurrentUrl = document.URL;
        return( 
            <div className="view-all">
                <a href={`${CurrentUrl}card-market`}>
                    <span>View all</span>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.79412 0.238643L12.2489 5.42386C12.5837 5.74206 12.5837 6.25795 12.2489 6.57614L6.79412 11.7614C6.45939 12.0795 5.91668 12.0795 5.58194 11.7614C5.24721 11.4432 5.24721 10.9273 5.58194 10.6091L9.57353 6.81478L1.35714 6.81478C0.883756 6.81478 0.5 6.44999 0.5 6C0.5 5.55001 0.883756 5.18522 1.35714 5.18522L9.57353 5.18522L5.58194 1.39091C5.24721 1.07272 5.24721 0.556834 5.58194 0.238643C5.91668 -0.0795478 6.45939 -0.0795478 6.79412 0.238643Z" fill="white"/>
                    </svg>
                </a>
            </div>
        )
    }
    return(
        <div className="card-market-tab">
            <div className="card-market-tab__list">
                {myCardMarketUsers && listCards} 
                {cardsLoad === false && 
                     loadButton()
                }
            </div>
        </div>
        
    );
}

export default TabCardMarket;