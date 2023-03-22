import React,{useState, useEffect} from "react";
import SingleCard from "./singleCard";
const CardsList = ({data}) =>{
    const [isLoaded, setIsLoaded] = useState(false);

    let listCards ;
    
    if(data){
        listCards = data.map((d,i)=>{
            return <SingleCard key={i} data={d}/>
        }) 
    }

    useEffect(()=>{
        
        setTimeout(() => {
            setIsLoaded(true);
          }, 3500);
     },[data])
    if (!isLoaded) {
        return (
            <div className="loading_animation">
                <div className="lds-ripple"><div></div><div></div></div>
            </div>
        );
    }

    return(
        <div className="cardmarket-profile__list-container">
            {data && listCards}
        </div>
    )
}
export default CardsList;