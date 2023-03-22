import React, {useContext} from "react"; 
import { ProfileContext } from "../../../context/profileContext";
const SingleCollection = ({collectionName}) =>{ 
    const {saveCollection} = useContext(ProfileContext)
    return(
        <li>
            <button onClick={saveCollection}>
                <figure>
                    <img src="./../img/demoCollections.png" alt=''/>
                </figure>
                <p>{collectionName}</p>
            </button> 
        </li>
    )
}
export default SingleCollection;