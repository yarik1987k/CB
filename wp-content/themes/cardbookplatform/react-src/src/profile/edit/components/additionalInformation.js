import React, { useState } from 'react';
 
const AdditionalInformation = () =>{
    const [value, setValue] = useState('');
     
    return(
        <div className="edit-block">
            <div className="edit-block__container">
                <div className="edit-block__title">
                    <h4>Additional Information</h4>
                    <p>Additional information greatly affects the trust in interaction between users. If the user trusts you, he is more willing to contact you and can offer more favorable terms of the transaction.
Write what you work for, what you dream about. People trust open people ;)</p>
                </div>
                <div className="edit-block__holder">
                    <div className="form-group">
                        <label htmlFor="user_about">About me</label>
                        <div className='text-editor'> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdditionalInformation;