import React from "react";

const Filters = () =>{
    return(
        <div className="filters">
            <div className="filters__container">
                <div className="search">
                    <button>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.53425 12.9448C7.95327 12.9448 9.26182 12.4903 10.3324 11.7328L14.3601 15.7223C14.547 15.9074 14.7934 16 15.0568 16C15.6091 16 16 15.5792 16 15.0405C16 14.788 15.915 14.5439 15.7281 14.3672L11.726 10.3945C12.5672 9.30037 13.0685 7.94529 13.0685 6.47238C13.0685 2.91215 10.1285 0 6.53425 0C2.94849 0 0 2.90373 0 6.47238C0 10.0326 2.93999 12.9448 6.53425 12.9448ZM6.53425 11.5476C3.73022 11.5476 1.41052 9.24987 1.41052 6.47238C1.41052 3.6949 3.73022 1.39716 6.53425 1.39716C9.33829 1.39716 11.658 3.6949 11.658 6.47238C11.658 9.24987 9.33829 11.5476 6.53425 11.5476Z" fill="white"/>
                        </svg>
                    </button>
                    <input type="text" placeholder="Search" />
                </div>
                <div className="filters-options">
                    <button>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.6583 4.78392C6.6583 6.18392 5.50414 7.31866 4.07915 7.31866C2.65499 7.31866 1.5 6.18392 1.5 4.78392C1.5 3.38474 2.65499 2.25 4.07915 2.25C5.50414 2.25 6.6583 3.38474 6.6583 4.78392ZM15.37 3.67374C15.9933 3.67374 16.5 4.17152 16.5 4.78392C16.5 5.39714 15.9933 5.89492 15.37 5.89492H10.4384C9.8142 5.89492 9.30754 5.39714 9.30754 4.78392C9.30754 4.17152 9.8142 3.67374 10.4384 3.67374H15.37ZM2.63083 11.9685H7.56247C8.18663 11.9685 8.69329 12.4662 8.69329 13.0795C8.69329 13.6919 8.18663 14.1905 7.56247 14.1905H2.63083C2.00666 14.1905 1.5 13.6919 1.5 13.0795C1.5 12.4662 2.00666 11.9685 2.63083 11.9685ZM13.9208 15.5833C15.3458 15.5833 16.5 14.4486 16.5 13.0494C16.5 11.6494 15.3458 10.5147 13.9208 10.5147C12.4967 10.5147 11.3417 11.6494 11.3417 13.0494C11.3417 14.4486 12.4967 15.5833 13.9208 15.5833Z" fill="white"/>
                        </svg>
                        <span>Filter</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Filters;