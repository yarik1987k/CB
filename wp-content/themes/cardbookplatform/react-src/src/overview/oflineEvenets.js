import React, {useState, useEffect} from "react"; 

const UserOfflineEvents = ({backStep, saveEvenet}) =>{

    const [selectedValue, setSelectedValue] = useState("");

    const handleChange = (event) => {
      setSelectedValue(event.target.value);
    };

    useEffect(()=>{ 
    },[selectedValue])
    return(
        <div className="interest-block">
            <h3>Do you attend offline events as well as online webinars and meetings?</h3>
            <div className="block-options">
                 <div className="radio-buttons">
                     <label htmlFor="yes">
                        <input 
                            type="radio" 
                            id="yes" 
                            name="event" 
                            value="yes"
                            checked={selectedValue === "yes"}
                            onChange={handleChange}
                        />
                        <span>Yes</span>
                     </label>
                     <label htmlFor="no">
                        <input 
                            type="radio" 
                            id="no" 
                            name="event" 
                            value="no"
                            checked={selectedValue === "no"}
                            onChange={handleChange}
                        />
                        <span>No</span>
                     </label>                 
                 </div>
            </div>
            <div className="block-button">
                <button className="btn btn-secondary" onClick={(e)=>backStep(2)}>Back</button>
                <button className="btn btn-primary" onClick={(e) => saveEvenet(selectedValue)}>Next</button>
            </div>
        </div>
    );

}
export default UserOfflineEvents;