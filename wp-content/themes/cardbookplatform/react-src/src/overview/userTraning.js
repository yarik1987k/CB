import React, {useState, useEffect} from "react"; 

const UserTraning = ({backStep,saveTraning}) =>{

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };
    useEffect(()=>{ 
    },[selectedValue])
    return(
        <div className="interest-block">
            <h3>How often are you trained?</h3>
            <div className="block-options">
                 <div className="radio-buttons radio-buttons-list">
                     <label htmlFor="yes">
                        <input 
                            type="radio" 
                            id="yes" 
                            name="learning" 
                            value="yes"
                            checked={selectedValue === "yes"}
                            onChange={handleChange}
                        />
                        <span>I am constantly learning new things</span>
                     </label>
                     <label htmlFor="somtimes">
                        <input 
                            type="radio" 
                            id="somtimes" 
                            name="learning" 
                            value="somtimes"
                            checked={selectedValue === "somtimes"}
                            onChange={handleChange}
                        />
                        <span>Check out new courses regularly</span>
                     </label>      
                     <label htmlFor="no">
                        <input 
                            type="radio" 
                            id="no" 
                            name="learning" 
                            value="no"
                            checked={selectedValue === "no"}
                            onChange={handleChange}
                        />
                        <span>I don't study</span>
                     </label>            
                 </div>
            </div>
            <div className="block-button">
                <button className="btn btn-secondary" onClick={(e)=>backStep(3)}>Back</button>
                <button className="btn btn-primary" onClick={(e) => saveTraning(selectedValue)}>Save my preference</button>
            </div>
        </div>
    );

}
export default UserTraning;