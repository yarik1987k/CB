import React, {useContext, useState, useEffect} from "react";
import {ProfileContext} from "./../context/profileContext";
import HaSingleCard from "./subComponents/elements/haCard";
const TabHaveAccess = () =>{
    const {myAccessUsers} = useContext(ProfileContext);
    const [itemsLoaded, setItemLoaded] = useState(12);
    const [isLoaded, setIsLoaded] = useState(false);
    let listCards ;
     
    if(myAccessUsers){
        listCards = myAccessUsers.map((d,i) =>{
            
            if(i < itemsLoaded) 
            return(
                <HaSingleCard key={i} dataCard={d} />
            );
        }) 
    }
    const loadMore = () => {
        setItemLoaded(itemsLoaded + myAccessUsers.length);  
    };
    const showLess = () =>{
        setItemLoaded(itemsLoaded - myAccessUsers.length);  
    }
    
     useEffect(()=>{
        
        setTimeout(() => {
            setIsLoaded(true);
          }, 3000);
     },[myAccessUsers])
    const loadButton = () =>{
        return( 
            <div className="view-all">
                <button onClick={loadMore}>
                    <span>Load more</span>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.7614 6.29412L6.57614 11.7489C6.25795 12.0837 5.74206 12.0837 5.42386 11.7489L0.238643 6.29413C-0.0795486 5.95939 -0.0795486 5.41668 0.238643 5.08194C0.556833 4.74721 1.07272 4.74721 1.39092 5.08194L5.18522 9.07353L5.18522 0.857143C5.18522 0.383756 5.55001 2.81938e-07 6 2.62268e-07C6.44999 2.42599e-07 6.81478 0.383756 6.81478 0.857143L6.81478 9.07353L10.6091 5.08194C10.9273 4.74721 11.4432 4.74721 11.7614 5.08194C12.0795 5.41668 12.0795 5.95939 11.7614 6.29412Z" fill="white"/>
                    </svg>
                </button>
            </div>
        )
    }
 
    const loadButtonLess = () =>{
        return( 
            <div className="view-all">
                <button onClick={showLess}>
                    <span>Top</span>
                    <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M12.2614 5.70588L7.07614 0.251052C6.75795 -0.0836833 6.24206 -0.0836833 5.92386 0.251052L0.738643 5.70587C0.420451 6.04061 0.420451 6.58332 0.738643 6.91806C1.05683 7.25279 1.57272 7.25279 1.89092 6.91806L5.68522 2.92647L5.68522 11.1429C5.68522 11.6162 6.05001 12 6.5 12C6.94999 12 7.31478 11.6162 7.31478 11.1429L7.31478 2.92647L11.1091 6.91806C11.4273 7.25279 11.9432 7.25279 12.2614 6.91806C12.5795 6.58332 12.5795 6.04061 12.2614 5.70588Z" fill="white"/>
                    </svg>
                </button>
            </div>
        )
    }

    if (!isLoaded) {
        return (
            <div className="loading_animation">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        );
    }

    return(
        <div className="have-access-tab">
            <div className="have-access-tab__list">
                {myAccessUsers && listCards} 
                {itemsLoaded < myAccessUsers.length && ( loadButton() )}
                {itemsLoaded > myAccessUsers.length && ( loadButtonLess() )}
            </div>
        </div>
        
    );
}

export default TabHaveAccess;