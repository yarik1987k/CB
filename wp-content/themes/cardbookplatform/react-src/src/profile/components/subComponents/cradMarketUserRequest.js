import React,{useState} from "react";
import AddToDigitalBankButton from "./elements/addToDigitalBankButton";
import AddToDigitialBankPopup from "./elements/addToDigitalBankPopup";
import SuccessMessage from "./elements/successNotificationTigitalBankRequest";
const CardMarketUserRequest = ({userAddToId}) =>{
    const [showPoupUp, setShowPopup] = useState(null);
    const [showPoupUpSuccess, setShowPopupSuccess] = useState(null);
    const [requestSend, setRequestSend] = useState(null);
    const PopupHandlerShow = () =>{
        setShowPopup(true)
    }
    const PopupHandlerHide = () =>{
        setShowPopup(null)
        setShowPopupSuccess(null)
    }
    const formHandler = (event) =>{
        event.preventDefault();
        setShowPopup(null)
        setShowPopupSuccess(true)
        setRequestSend(true)
    }
 
    const popupData = [
        {
          title: 'Request sent successfully',
          content: 'You will receive a notification if the user approves your request.',
          additionalContent:[
              {
                  status: 'hide',
                  content: '<a href="#">View the terms of the deal</a>'
              }
          ],
          buttons: [
              {
                  class: 'btn-primary-gray',
                  btnText: 'My requests',
                  status: 'show'
              },
              {
                class: 'btn-primary',
                btnText: 'Ok',
                status: 'show'
            }
          ]
        }
      ];
    return(
        <>
        <AddToDigitalBankButton requestSend={requestSend} onClick={PopupHandlerShow} userAddToId={userAddToId}/>
        {showPoupUp && <AddToDigitialBankPopup formHandler={formHandler} onClick={PopupHandlerHide} /> }
        {showPoupUpSuccess && <SuccessMessage popupData={popupData} onClick={PopupHandlerHide}/> }
        </>
    )
}
export default CardMarketUserRequest;