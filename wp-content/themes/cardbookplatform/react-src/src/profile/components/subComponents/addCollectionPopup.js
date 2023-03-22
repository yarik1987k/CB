import React,{useContext, useState} from "react";
import { ProfileContext } from "../../context/profileContext";
const AddCollectionPopup = ({name, userImageUrl}) =>{
    const {showCollectionAddPopup, saveNewCollectionCreation} = useContext(ProfileContext);
    const [collectionName, setCollectionName] = useState(null);
    const changeHandler = (event) =>{ 
        setCollectionName(event.target.value)
    }
    const clickHandler = () =>{
        if(collectionName !== null){
            saveNewCollectionCreation(collectionName)
        }
    }
    return(
        <div className="popup-collection">
            <div className="popup-collection__container">
                <div className="close-btn">
                    <button onClick={showCollectionAddPopup}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.22647 10.6205C1.92655 10.9204 1.92043 11.4529 2.23259 11.7651C2.55088 12.0773 3.0834 12.0711 3.3772 11.7773L7.00076 8.15379L10.6182 11.7712C10.9243 12.0773 11.4507 12.0773 11.7628 11.7651C12.075 11.4468 12.075 10.9265 11.7689 10.6205L8.15149 7.00306L11.7689 3.3795C12.075 3.07346 12.0811 2.54706 11.7628 2.23489C11.4507 1.92273 10.9243 1.92273 10.6182 2.22877L7.00076 5.84621L3.3772 2.22877C3.0834 1.92885 2.54476 1.91661 2.23259 2.23489C1.92043 2.54706 1.92655 3.0857 2.22647 3.3795L5.84392 7.00306L2.22647 10.6205Z" fill="#271D43"/>
                        </svg>
                    </button>
                </div>
                <h3>New Collection</h3>
                <div className="user-profile-to-add">
                    {userImageUrl &&
                     <figure>
                        <img src={userImageUrl} alt=''/>
                    </figure>
                    
                    }
                   
                    <div className="name">
                      {name && <h4>{name}</h4>}
                    </div>
                </div>
                <div className="collection-name">
                    <label htmlFor="collection_name">Collection name</label>
                    <input type='text' onChange={changeHandler} name="collection-name" placeholder="Collection name" id="collection_name" />
                </div>
                <div className="save-collection">
                    <button onClick={clickHandler}> Save</button>
                </div>

            </div>
        </div>
    )
}
export default AddCollectionPopup;