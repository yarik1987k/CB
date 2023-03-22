import React, {useState, useEffect} from "react";
import image from '../img/popup-image.png';
import IndustriesPopup from "./industries";
import UserInterest from "./userInterest";
import UserOfflineEvents from "./oflineEvenets";
import UserTraning from "./userTraning";
import './scss/popupPreferance.scss';
const PreferancePopup = ({popupHandler}) =>{
    const [isPreferance, setIspreferance] = useState(false);
    const [step, setStep] = useState(1);
    const [industriesChosen, setIndustries] = useState([]);
    const [isIndustries, setIsIndustries] = useState(false);


    const [interestChosen, setInterestChosen] = useState([]);
    const [isInterest, setIsInterest] = useState(false);

    const [isEvents, setIsevent] = useState('');   
    const [isTraning, setIsTraning] = useState('');   


    const chooseHandler = (e, data) =>{

       if(e.target.classList.contains('active') === true){
            e.target.classList.remove('active');
            
            if(data.type === 'industry'){
                setIndustries(industriesChosen.filter((i) => i.id !== data.id));
            }
            if(data.type === 'interest'){
                setInterestChosen(interestChosen.filter((i) => i.id !== data.id));
            }
           
       }else{
            e.target.classList.add('active');
            if(data.type === 'industry'){
                setIndustries([...industriesChosen, data]);
            }
            if(data.type === 'interest'){
                setInterestChosen([...interestChosen, data]);
            }
       }
    }

    const saveEvenetHandler = (data) =>{
        setIsevent(data);
        setStep(4);
    }
    
 

    const saveIndustriesHandler = () =>{
        if(industriesChosen){ 
            setIsIndustries(!isIndustries);
            setStep(2); 
            return industriesChosen;
        }
    }
    const saveInterestHandler = () =>{
        if(interestChosen){ 
            setIsInterest(!isInterest);
            setStep(3);
            return interestChosen;
        }
    }

    const backHandler = (returnStep) =>{
        setStep(returnStep);
    }


    const saveTraning = (data) =>{
        console.log(data);
        setIsTraning(data);
        popupHandler(false);

            console.log(industriesChosen);
            console.log(interestChosen);
            console.log(isTraning);
            console.log(isEvents);
    }

    const handleStep = (step)=>{
       switch (step){
            case 1:
                return <IndustriesPopup saveIndustries={saveIndustriesHandler} chooseIndustries={chooseHandler}/>;
            case 2:
               return <UserInterest backStep={backHandler} saveInterest={saveInterestHandler} chooseInterest={chooseHandler}/>;
            case 3:
                return  <UserOfflineEvents backStep={backHandler} saveEvenet={saveEvenetHandler}/>;
            case 4:
                return <UserTraning backStep={backHandler} saveTraning={saveTraning}/>;
       }
    }


    useEffect(()=>{  
        console.log(isTraning);
    }, [industriesChosen, interestChosen, isTraning, isEvents]);





    return(
        <div className="preferance-popup">
            <div className="preferance-popup--header">
                <div className="close-popup">
                    <button onClick={(e)=>popupHandler(false)}>
                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.77177 13.8446C3.41186 14.2045 3.40451 14.8435 3.77911 15.2181C4.16106 15.5927 4.80008 15.5854 5.15264 15.2328L9.50092 10.8845L13.8419 15.2255C14.2091 15.5927 14.8408 15.5927 15.2154 15.2181C15.59 14.8362 15.59 14.2119 15.2227 13.8446L10.8818 9.50367L15.2227 5.1554C15.59 4.78815 15.5973 4.15647 15.2154 3.78187C14.8408 3.40728 14.2091 3.40728 13.8419 3.77453L9.50092 8.11546L5.15264 3.77453C4.80008 3.41462 4.15371 3.39993 3.77911 3.78187C3.40451 4.15647 3.41186 4.80284 3.77177 5.1554L8.1127 9.50367L3.77177 13.8446Z" fill="#291E47"/>
                        </svg>
                    </button>
                </div>
                <div className="preferance-popup--header--image">
                    <figure>
                        <img src={image}/>
                    </figure>
                </div>
                <div className="preferance-popup--header--content">
                    <h3>Choose your preferences!</h3>
                    <p>To personalize your CardBook for productive work with our platform and for getting professional recommendations</p>
                </div>
            </div>
            <div className="preferance-popup--content-block">
                {handleStep(step)}
            </div>
        </div>
    );
}

export default PreferancePopup;