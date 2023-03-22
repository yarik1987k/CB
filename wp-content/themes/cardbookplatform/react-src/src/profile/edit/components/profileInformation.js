import React from "react";
import MultipulleSelect from "../../../helpers/multipuleSelect";
import CustomSelect from "../../../helpers/customSelect";
const ProfileInformation = () =>{
    const demoData = [
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
                    <h4>Profile info</h4>
                    <p>Add your information blah blah blah................................................................</p>
                </div>
                <div className="edit-block__holder">
                    <div className="row">
                        <div className="col widder">
                            <div className="form-group">
                                <label htmlFor="user_industries">Industries</label>
                                <MultipulleSelect name="user_industries" defualt={'Industries'} searchHandler={true} options={demoData}/>
                            </div>
                        </div>
                        <div className="col widder">
                            <div className="form-group">
                                <label htmlFor="user_direction">Direction</label>
                                <MultipulleSelect name="user_direction" defualt={'Direction'} searchHandler={true} options={demoData}/>
                            </div>
                        </div>
                        <div className="col widder">
                            <div className="form-group">
                                <label htmlFor="user_competences">Competences</label>
                                <MultipulleSelect name="user_competences" defualt={'Competences'} searchHandler={true} options={demoData}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col widder">
                            <div className="form-group">
                                <label htmlFor="user_country">Expertise level</label>
                                <CustomSelect name="user_country" defualt={'Expertise level'} searchHandler={false} options={demoData}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProfileInformation;