import React, {useState, useEffect} from "react";
import PreferancePopup from "./preferancePopup";
import './scss/recommendationBlock.scss';
const Recommendation = () =>{
    const [isPopup, steIspopup] = useState(false);
    const openPopup = (data)=>{
        steIspopup(data)
    }

    return(
        <div className="recommendation-block">
            <div className="recommendation-block--header">
                <div className="icon">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.832031 10.0002C0.832031 4.94016 4.92953 0.833496 9.9987 0.833496C15.0587 0.833496 19.1654 4.94016 19.1654 10.0002C19.1654 15.0693 15.0587 19.1668 9.9987 19.1668C4.92953 19.1668 0.832031 15.0693 0.832031 10.0002ZM12.0429 11.6777L13.5279 6.98433C13.6287 6.6635 13.3354 6.361 13.0145 6.46183L8.3212 7.9285C8.1287 7.99266 7.97286 8.13933 7.91786 8.33183L6.4512 13.0343C6.35036 13.346 6.65286 13.6485 6.96453 13.5477L11.6395 12.081C11.832 12.026 11.9879 11.8702 12.0429 11.6777Z" fill="white"/>
                    </svg>
                </div>
                <p>Recommended for you</p>
            </div>
            <div className="recommendation-block--start">
                <div className="recommendation-block--start-inner">
                    <div className="icon">
                        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.1156 0.152512C10.4606 0.342889 9.79346 1.08344 9.62566 1.80662C9.54848 2.13888 9.48368 3.97695 9.48164 5.89137L9.47789 9.37197L5.91668 9.37572C3.95793 9.37776 2.0834 9.44252 1.75092 9.51964C0.518818 9.80529 -0.253691 11.0904 0.0764454 12.3051C0.207467 12.7869 1.58624 14.2403 7.79246 20.4394C13.6305 26.2707 15.4731 28.0225 15.8953 28.1436C16.2005 28.2311 18.3422 28.3002 20.7482 28.3002H25.0547L31.9415 35.1863C37.5822 40.8263 38.9348 42.1014 39.4155 42.2319C41.0803 42.6836 42.6557 41.111 42.2039 39.4485C42.0724 38.9648 40.8107 37.6278 35.153 31.977L28.2623 25.0948L28.2614 20.7921C28.2609 18.3039 28.1922 16.2432 28.0982 15.9055C27.9668 15.4323 26.5218 13.895 20.4917 7.81329C12.3176 -0.430822 12.5289 -0.258278 11.1156 0.152512ZM38.1241 0.0930675C33.6418 0.348521 28.2072 1.68226 24.3038 3.48451L23.2411 3.97508L26.8084 7.53077L30.3755 11.0863L31.393 10.7675C33.899 9.98221 36.9974 9.53513 39.9581 9.53122C46.6317 9.52261 52.951 11.6327 58.3956 15.6877C60.0051 16.8865 63.1642 20.0434 64.3637 21.6519C72.5973 32.6922 72.5973 47.373 64.3637 58.4133C63.1642 60.0217 60.0051 63.1787 58.3956 64.3774C47.3479 72.6054 32.6572 72.6054 21.6095 64.3774C20 63.1787 16.8409 60.0217 15.6414 58.4133C11.5836 52.9723 9.47209 46.6573 9.4807 39.9882C9.48462 37.0294 9.932 33.9332 10.7178 31.4288L11.0368 30.412L7.47891 26.8473L3.92083 23.2823L3.42993 24.3444C2.1828 27.0417 0.971522 31.0625 0.478119 34.1425C-1.04561 43.654 1.16438 53.7222 6.57632 61.9246C9.49651 66.3503 13.6645 70.5164 18.0887 73.4315C32.5566 82.9648 51.511 82.0472 65.0307 71.159C66.8697 69.6781 69.832 66.7069 71.2905 64.8805C81.1011 52.5948 82.7709 35.7019 75.5495 21.7919C73.565 17.969 71.4738 15.1086 68.3722 11.9741C61.3693 4.89693 52.5505 0.851292 42.5854 0.144221C40.465 -0.00611015 39.9644 -0.0118981 38.1241 0.0930675ZM38.0632 19.0861C37.2979 19.1619 35.8362 19.4449 34.8151 19.7149L32.9584 20.206V21.6345V23.0632L35.5876 25.6873L38.2169 28.3113L40.2446 28.3614C41.821 28.4003 42.5162 28.4901 43.3681 28.7648C47.2917 30.0303 50.0743 32.8314 51.2979 36.7475C51.6063 37.7343 51.6645 38.2563 51.6645 40.0326C51.6645 41.8114 51.6066 42.3285 51.2976 43.3122C50.0511 47.2793 47.2439 50.0866 43.2898 51.3204C42.3024 51.6286 41.78 51.6867 40.0025 51.6867C38.2251 51.6867 37.7027 51.6286 36.7153 51.3204C32.7965 50.0976 29.9936 47.3168 28.7272 43.3959C28.4523 42.5446 28.3625 41.8499 28.3235 40.2744L28.2734 38.2482L25.6477 35.6206L23.0218 32.9932H21.5921H20.1626L19.6778 34.8312C19.0393 37.2528 18.8357 39.4832 19.0392 41.825C19.9297 52.0717 27.9491 60.0915 38.1942 60.9807C49.7886 61.987 59.9566 53.4397 60.9647 41.8397C61.8053 32.1661 55.9164 23.1711 46.7336 20.1026C43.9916 19.1863 40.8112 18.8134 38.0632 19.0861Z" fill="#44B6DA"/>
                        </svg>
                    </div>
                    <div className="recommendation-content">
                        <p>To personalize your CardBook and work with our platform as efficiently as possible, answer a few questions</p>
                    </div>
                    <div className="button-start">
                        <button className="btn btn-primary" onClick={(e)=>openPopup(true)}>
                            Start Here
                        </button>
                        <span>Takes no more than one minute</span>
                    </div>
                </div>
            </div>
            {isPopup &&
                <PreferancePopup popupHandler={openPopup}/>
            }
           
        </div>
    );
}

export default Recommendation;