import React, {useState, useEffect} from "react";
const SuccessMessage = ({onClick, popupData}) =>{ 
    const [grayBtn, setGrayBtn] = useState(null);
    const [primaryBtn, setPrimaryBtn] = useState(null);
    const [addContent, setAddContent] = useState(null);
   
  
    useEffect(()=>{
        if(popupData[0].buttons[0].status === 'show'){
            setGrayBtn(true)
        }
        if(popupData[0].buttons[1].status === 'show'){
            setPrimaryBtn(true)
        }
        if(popupData[0].additionalContent[0].status === 'show'){
            setAddContent(true)
        }
    },[popupData])
    return(
        <div className="popup-small">
            <div className="popup-small__container">
                <button className="close-popup" onClick={onClick}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.22647 10.6205C1.92655 10.9204 1.92043 11.4529 2.23259 11.7651C2.55088 12.0773 3.0834 12.0711 3.3772 11.7773L7.00076 8.15379L10.6182 11.7712C10.9243 12.0773 11.4507 12.0773 11.7628 11.7651C12.075 11.4468 12.075 10.9265 11.7689 10.6205L8.15149 7.00306L11.7689 3.3795C12.075 3.07346 12.0811 2.54706 11.7628 2.23489C11.4507 1.92273 10.9243 1.92273 10.6182 2.22877L7.00076 5.84621L3.3772 2.22877C3.0834 1.92885 2.54476 1.91661 2.23259 2.23489C1.92043 2.54706 1.92655 3.0857 2.22647 3.3795L5.84392 7.00306L2.22647 10.6205Z" fill="black"/>
                    </svg>
                </button>
                <div className="icon">
                    <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M15.454 0.333008H38.574C47.614 0.333008 53.6673 6.67968 53.6673 16.1197V37.909C53.6673 47.3197 47.614 53.6663 38.574 53.6663H15.454C6.41398 53.6663 0.333984 47.3197 0.333984 37.909V16.1197C0.333984 6.67968 6.41398 0.333008 15.454 0.333008ZM25.4807 34.973L38.1473 22.3063C39.054 21.3997 39.054 19.933 38.1473 18.9997C37.2407 18.093 35.7473 18.093 34.8407 18.9997L23.8273 30.013L19.1607 25.3463C18.254 24.4397 16.7607 24.4397 15.854 25.3463C14.9473 26.253 14.9473 27.7197 15.854 28.653L22.2007 34.973C22.654 35.4263 23.2407 35.6397 23.8273 35.6397C24.4407 35.6397 25.0273 35.4263 25.4807 34.973Z" fill="#2FCF6F"/>
                    </svg>
                </div>
                <div className="message">
                    <h4>{popupData[0].title}</h4>
                    <p>{popupData[0].content}</p>
                </div>
                <div className="buttons">
                    {grayBtn && <button className={`btn ${popupData[0].buttons[0].class}`}>{popupData[0].buttons[0].btnText}</button> } 
                    {primaryBtn && <button className={`btn ${popupData[0].buttons[1].class}`} onClick={onClick}>{popupData[0].buttons[1].btnText}</button>} 
                </div>
                { addContent &&
                    <div className="additional_content" dangerouslySetInnerHTML={{ __html: popupData[0].additionalContent[0].content }} /> 
                }
            </div>
        </div>
    );
}
export default SuccessMessage;