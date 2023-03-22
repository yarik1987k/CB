import React, {useContext} from "react";
import { ProfileContext } from "../../../context/profileContext";
import SingleCollection from "./singleCollection";
const CollectionsOptions = () =>{

    const {showCollectionAddPopup,saveNewCollection} = useContext(ProfileContext);
    const collectionList = saveNewCollection.map((data, index)=>{
        return <SingleCollection key={index} collectionName={data}/>
    })
   
    return(
        <div className="collections">
            <div className="triangle"></div>
            <div className="header">
                <h3>Saved</h3>
                <button onClick={showCollectionAddPopup}>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 4V6H6.05882V10H3.94118V6H0V4H3.94118V0H6.05882V4H10Z" fill="#271D43"/>
                    </svg>
                </button>
            </div>
            <div className="collections-list">
                <ul>
                    {collectionList}
                </ul>
            </div>
        </div>
    );
}
export default CollectionsOptions;