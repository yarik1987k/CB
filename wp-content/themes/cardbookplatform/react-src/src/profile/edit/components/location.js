import React from "react";
import CustomSelect from "../../../helpers/customSelect";
const LocationInformation = () =>{
    // This is just a demo data, need to pull from the API....
    const cityData = [
        {value: 'option-1', label:'Option 1'},
        {value: 'option-2', label:'Option 2'},
        {value: 'option-3', label:'Option 3'},
        {value: 'option-4', label:'Option 4'},
        {value: 'option-5', label:'Option 5'},
        {value: 'option-6', label:'Option 6'},
        {value: 'option-7', label:'Option 7'},
        {value: 'option-8', label:'Option 8'},
        {value: 'option-9', label:'Option 9'},
        {value: 'option-10', label:'Option 10'},
    ];
    return(
        <div className="edit-block">
            <div className="edit-block__container">
                <div className="edit-block__title">
                    <h4>location</h4>
                    <p>Add information about your primary location. Potential clients will be able to find you by matching filters.</p>
                </div>
                <div className="edit-block__holder">
                    <div className="row">
                        <div className="col widder">
                            <div className="form-group">
                                <label htmlFor="user_country">Country</label>
                                <CustomSelect name="user_country" defualt={'Country'} searchHandler={true} options={cityData}/>
                            </div>
                        </div>
                        <div className="col widder">
                            <div className="form-group">
                                <label htmlFor="user_city">City</label>
                                <CustomSelect name="user_city" defualt={'City'} searchHandler={true} options={cityData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LocationInformation; 