import React from "react";

const AddToDigitalBankButton = ({userAddToId, onClick, requestSend}) =>{
     
 return(
    <button className="user-info__add_digital_bank c-btn c-btn-secondary" onClick={onClick}>
        <span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M7.91699 10.4613C10.2125 10.4613 12.0525 8.59746 12.0525 6.27229C12.0525 3.94711 10.2125 2.08325 7.91699 2.08325C5.62152 2.08325 3.78147 3.94711 3.78147 6.27229C3.78147 8.59746 5.62152 10.4613 7.91699 10.4613ZM7.91699 12.5126C4.54551 12.5126 1.66699 13.0516 1.66699 15.2053C1.66699 17.3581 4.528 17.9166 7.91699 17.9166C11.2876 17.9166 14.167 17.3775 14.167 15.2239C14.167 13.0702 11.306 12.5126 7.91699 12.5126ZM16.5819 7.9898H17.5845C17.9972 7.9898 18.3337 8.33101 18.3337 8.74948C18.3337 9.16796 17.9972 9.50917 17.5845 9.50917H16.5819V10.4902C16.5819 10.9087 16.2463 11.2499 15.8328 11.2499C15.4201 11.2499 15.0837 10.9087 15.0837 10.4902V9.50917H14.0828C13.6693 9.50917 13.3337 9.16796 13.3337 8.74948C13.3337 8.33101 13.6693 7.9898 14.0828 7.9898H15.0837V7.0096C15.0837 6.59112 15.4201 6.24992 15.8328 6.24992C16.2463 6.24992 16.5819 6.59112 16.5819 7.0096V7.9898Z" fill="white"/>
            </svg> 
            Add to Digital Bank
        </span>
    </button>
 )
}
export default AddToDigitalBankButton;