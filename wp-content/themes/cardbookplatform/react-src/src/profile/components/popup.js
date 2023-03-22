import React, {useState} from "react";
import './../../styles/popup.scss';
import Accordion from "./subComponents/Accordion/accordion";
import SuccessMessage from "./subComponents/elements/successNotificationTigitalBankRequest";
const Popup = ({onClick, succesPopup, formSubmit, togglePopup,isVisible,buyNameUser, buyFromUserId, buyFromUserName, price, buyImageUser, levelAccess }) => { 
    const [showExplain, setShowExplain] = useState(null);
     
    const showExplainHandler = () =>{
        setShowExplain(true)
    }
    const hideExplain = () =>{
        setShowExplain(null)
    }
   
    let levelAccessHtml;
    if(levelAccess === 'a')
    levelAccessHtml = 'Buy level <span class="a-level">'+levelAccess+'</span> access';
    
    if(levelAccess === 'b')
    levelAccessHtml = 'Buy level <span class="b-level">'+levelAccess+'</span> access';
    
    if(levelAccess === 'c')
    levelAccessHtml = 'Buy level <span class="c-level">'+levelAccess+'</span> access';    


    const items = [
        {
          title: 'Access level <span class="a-level">A</span>',
          content: '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        },
        {
          title: 'Access level <span class="b-level">B</span>',
          content: '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        },
        {
            title: 'Access level <span class="c-level">C</span>',
          content: '<p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>',
        },
      ];
      const popupData = [
        {
          title: 'Payment successful!',
          content: 'Your money is reserved and will be transferred to the seller only after the transaction is completed. Wait for the sellers confirmation.',
          additionalContent:[
            {
                status: 'show',
                content: '<a href="#">View the terms of the deal</a>'
            }
        ],
          buttons: [
              {
                  class: 'btn-primary-gray',
                  btnText: 'My requests',
                  status: 'hide'
              },
              {
                class: 'btn-primary',
                btnText: 'Details in chat',
                status: 'show'
            }
          ]
        }
      ];

    return (
      <div>
          {succesPopup && <SuccessMessage onClick={onClick} popupData={popupData}/>}
        {isVisible && (
          <div className="popup">
              <div className="popup-container">
                    <button className="close-btn" onClick={togglePopup}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.27177 12.3446C1.91186 12.7045 1.90451 13.3435 2.27911 13.7181C2.66106 14.0927 3.30008 14.0854 3.65264 13.7328L8.00092 9.38454L12.3419 13.7255C12.7091 14.0927 13.3408 14.0927 13.7154 13.7181C14.09 13.3362 14.09 12.7119 13.7227 12.3446L9.38179 8.00367L13.7227 3.6554C14.09 3.28815 14.0973 2.65647 13.7154 2.28187C13.3408 1.90728 12.7091 1.90728 12.3419 2.27453L8.00092 6.61546L3.65264 2.27453C3.30008 1.91462 2.65371 1.89993 2.27911 2.28187C1.90451 2.65647 1.91186 3.30284 2.27177 3.6554L6.6127 8.00367L2.27177 12.3446Z" fill="#291E47"/>
                        </svg>
                    </button>

                    <div className="popup-inner">
                         <div className="popup-inner--left">
                             <div className="popup-user_info">
                                <div className="buy-from">
                                    <p className="level" dangerouslySetInnerHTML={{ __html: levelAccessHtml }} /> <p>from <span className="buy-from-name">{buyFromUserName}</span> to this person:</p>
                                </div>
                                <div className="user-to-buy">
                                    <div className="user-to-buy__container">
                                    <div className="user-to-buy__img">
                                        <figure>
                                            <img src={buyImageUser} alt=""/>
                                        </figure>
                                    </div>
                                    <div className="user-to-buy__name">{buyNameUser}</div>
                                    </div>
                                </div> 
                             </div>
                                <div className="explain-btn">
                                    <button onClick={showExplainHandler}>
                                        How are the access levels different?
                                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 9L5 5L1 1" stroke="#479AB4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg> 
                                    </button>
                                </div>
                         </div>
                         <div className="popup-inner--right">
                             <div className="application">
                                 <form className="application__form" onSubmit={formSubmit}>
                                     <div className="application-area-text">
                                        <div className="application-title">
                                            <h5>Purpose of the application <span>*</span></h5>
                                            <p className="explain_info">
                                                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" clipRule="evenodd" d="M13.75 7.5C13.75 11.2279 10.7279 14.25 7 14.25C3.27208 14.25 0.25 11.2279 0.25 7.5C0.25 3.77208 3.27208 0.75 7 0.75C10.7279 0.75 13.75 3.77208 13.75 7.5ZM7.75 4.5C7.75 4.91421 7.41421 5.25 7 5.25C6.58579 5.25 6.25 4.91421 6.25 4.5C6.25 4.08579 6.58579 3.75 7 3.75C7.41421 3.75 7.75 4.08579 7.75 4.5ZM8 11.25V6.75H6V11.25H8Z" fill="#302450"/>
                                                </svg>
                                            </p>
                                        </div>
                                        <textarea placeholder="The more detailed and clear your application is, the higher the probability of a positive result of your application."></textarea>
                                     </div>
                                     <div className="application-file-attach">
                                         <p>You can attach presentation materials to support your appeal.</p>
                                         <label htmlFor={`file_upload-${buyFromUserId}`} className="">
                                            <svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.99009 15.236V5.19968C8.99009 3.27097 7.42791 1.70879 5.49919 1.70879C3.57048 1.70879 2.0083 3.27097 2.0083 5.19968V16.1087C2.0083 17.3131 2.98575 18.2905 4.19011 18.2905C5.39447 18.2905 6.37192 17.3131 6.37192 16.1087V6.94513C6.37192 6.46513 5.97919 6.07241 5.49919 6.07241C5.0192 6.07241 4.62647 6.46513 4.62647 6.94513V15.236H3.31739V6.94513C3.31739 5.74077 4.29484 4.76332 5.49919 4.76332C6.70355 4.76332 7.681 5.74077 7.681 6.94513V16.1087C7.681 18.0374 6.11883 19.5996 4.19011 19.5996C2.26139 19.5996 0.699219 18.0374 0.699219 16.1087V5.19968C0.699219 2.54661 2.84612 0.399708 5.49919 0.399708C8.15227 0.399708 10.2992 2.54661 10.2992 5.19968V15.236H8.99009Z" fill="#8B8B8B"/>
                                            </svg>
                                            <input name="file_upload" id={`file_upload-${buyFromUserId}`} type="file" />
                                         </label>
                                         
                                     </div>

                                     <div className="cost">
                                         <div className="col"><h4>Total payable</h4></div>
                                         <div className="col"><h4>{price} $</h4></div>
                                     </div>
                                    <div className="pay-btn">
                                        <button type="submit">
                                            buy {price} $
                                        </button>
                                    </div>
                                    <div className="terms">
                                        <p>By placing an order, you agree to the terms of the <a href="#">User Agreement</a> and the Terms of <a href="#">Safe Deal</a></p>
                                    </div>
                                 </form>
                             </div>
                         </div> 
                    </div>
                    <div className={` explain-block ${showExplain ? 'active' : ''}`}>
                        <div className="explain-block__inner">
                            <div className="explain-block__return">
                                <button onClick={hideExplain}>
                                    <svg width="6" height="11" viewBox="0 0 6 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 9.5L1 5.5L5 1.5" stroke="#271D43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </button>
                                <p>How are the access levels different?</p>
                            </div>
                            <div className="explain-block__accordion">
                                <Accordion items={items} />
                            </div> 
                        </div>
                    </div>
              </div>
          </div>
        )}
      </div>
    );
  };

  export default Popup;