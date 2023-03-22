import React,{useEffect, useState} from "react";

const FirstStep = ({handler, handleChange}) =>{
    
    const [isActive, setIsActive] = useState('');
    const [strength, setStrength] = useState('Password Strength');
    const [strengthClass, setStrengthClass] = useState('defualt');

    const checkPassStrength = (event) =>{
      
        
        let strength = 0;
        if (event.target.value.length > 0) {
          setIsActive('active');
         
        }else{
          setIsActive('');
        }
        if (event.target.value.length < 8) {
            setStrength("Too short");
            setStrengthClass('red');
            return;
        }
        if (event.target.value.match(/[a-z]+/)) {
            strength += 1;
          }
          if (event.target.value.match(/[A-Z]+/)) {
            strength += 1;
          }
          if (event.target.value.match(/[0-9]+/)) {
            strength += 1;
          }
          if (event.target.value.match(/[!@#$%^&*]+/)) {
            strength += 1;
          }
          switch (strength) {
            case 1:
              setStrength("Weak");
              setStrengthClass('red');
              break;
            case 2:
              setStrength("Good");
              setStrengthClass('orange');
              break;
            case 3:
              setStrength("Strong");
              setStrengthClass('green-light');
              break;
            case 4:
              setStrength("Very Strong");
              setStrengthClass('green');

              break;
            default:
              setStrength("Password Strength");
              setStrengthClass('defualt');
          }
         
    }
  
    const eventHandlerChange = (event) =>{ 
        handleChange(event)
        checkPassStrength(event)
    }

    useEffect(() => {
      
    }, [strength, isActive]);

    return(
        
    <div className="step-1">
        <form id="registration" onSubmit={handler}>
            <div className="form-group">
                <input type="text" id="firstName" className="requierd" onChange={handleChange} placeholder="First Name" name="firstName"/>
            </div>
            <div className="form-group">
                <input type="text" id="lastName" className="requierd" onChange={handleChange} placeholder="Last name" name="lastName"/>
            </div>
            <div className="form-group">
                <input type="text" id="userEmail" className="requierd" onChange={handleChange} placeholder="Your Email" name="userEmail"/>
            </div> 
            <div className="form-group">
                <input type="password" id="userPassword" className="requierd" onChange={eventHandlerChange} placeholder="Password" name="userPassword"/>
                <div className={`passwordStrength passwordStrength--${strengthClass} ${isActive}`}>
                    <div className={`holder-strength`}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                   <div className="password-text">
                       <div className="icon">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0C13.9706 0 18 4.02944 18 9ZM10 5C10 5.55228 9.55229 6 9 6C8.44771 6 8 5.55228 8 5C8 4.44772 8.44771 4 9 4C9.55229 4 10 4.44772 10 5ZM10 14V8H8V14H10Z" fill="#ffffff"/>
                            </svg>
                       </div>
                       <div className="label">{strength}</div>
                   </div>
                </div>
            </div> 
            <div className="form-group">
                <input type="text" onChange={handleChange} placeholder="Referral link/code (if any)" name="referalLink"/>
            </div>

            <div className="form-group">
                <input type="submit" value="Create an account" className="btn btn-primary"/>
            </div>
        </form> 
        <div className="privacy">
            <p>By registering, you agree with the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>, including the <a href="#">Cookie Policy</a>.</p>
        </div>
    </div>
   
    );
}
export default FirstStep;