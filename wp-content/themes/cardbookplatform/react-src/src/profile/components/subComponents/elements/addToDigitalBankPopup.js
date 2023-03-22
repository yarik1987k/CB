import React from "react";

const AddToDigitialBankPopup = ({onClick, formHandler}) =>{
    return(
        <div className="popup-dark">
            <div className="popup-dark__container">
                <button className="close-popup" onClick={onClick}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.271767 10.3446C-0.0881408 10.7045 -0.0954858 11.3435 0.279112 11.7181C0.661056 12.0927 1.30008 12.0854 1.65264 11.7328L6.00092 7.38454L10.3419 11.7255C10.7091 12.0927 11.3408 12.0927 11.7154 11.7181C12.09 11.3362 12.09 10.7119 11.7227 10.3446L7.38179 6.00367L11.7227 1.6554C12.09 1.28815 12.0973 0.656471 11.7154 0.281873C11.3408 -0.0927245 10.7091 -0.0927245 10.3419 0.274528L6.00092 4.61546L1.65264 0.274528C1.30008 -0.0853795 0.653711 -0.10007 0.279112 0.281873C-0.0954858 0.656471 -0.0881408 1.30284 0.271767 1.6554L4.6127 6.00367L0.271767 10.3446Z" fill="white"/>
                    </svg>
                </button>
                <h4>Add to cardmarket</h4>
                <p>You can submit a request to be added to your cardmarket. Specify your access level and price.</p>
                
                    <div className="choose-level">
                        <h5> Level access </h5>
                        <form className="choose-level-form" onSubmit={formHandler}>
                            <div className="choose-level-group">
                                <input type="radio"  value="A" id="level_a" name="level" />
                                <label htmlFor="level_a">
                                    <span className="level-a">A</span>
                                </label>
                                    
                                <input type="radio" value="B" id="level_b" name="level" />
                                <label htmlFor="level_b">
                                    <span className="level-b">B</span>
                                </label>
                                    
                                <input type="radio"  value="B" id="level_c" name="level" />
                                <label htmlFor="level_c">
                                    <span className="level-c">C</span>
                                </label>
                            </div>
                            <div className="choose-level-price">
                                <input type={'text'}  name="level_price" placeholder="Price for access" />
                            </div>
                            <div className="choose-level-submit">
                                <input type={'submit'} value="Submit an application" />
                                <a href="#request">How to choose the right price?</a>
                            </div>
                        </form> 
                    </div> 
            </div>
        </div>
    )
}
export default AddToDigitialBankPopup;