import React from "react";

const BasicInformation = () =>{
    return(
        <div className="edit-block">
            <div className="edit-block__container">
                <div className="edit-block__title">
                    <h4>Basic information</h4>
                    <p>Indicate your personal data to make it easier to find you and inspire more trust in communication.</p>
                </div>
                <div className="edit-block__holder">
                    <div className="row">
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="f_name">Name <span>*</span></label>
                                <input type="text" name="f_name" placeholder="Name" id="f_name"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="l_name">Last Name <span>*</span></label>
                                <input type="text" name="l_name" placeholder="Last Name" id="l_name"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group">
                                <label htmlFor="job_title">Who are you positioning yourself as?</label>
                                <input type="text" name="job_title" placeholder="Eg. Entrepreneur, blogger.." id="job_title"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BasicInformation;