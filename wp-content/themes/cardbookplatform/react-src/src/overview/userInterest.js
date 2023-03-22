import React from "react";
import interest from "./interestes.json";

const UserInterest = ({backStep, chooseInterest, saveInterest}) =>{

    const interestList = interest.map((data, index)=>{
        return(
            <button key={index}  onClick={(e) => chooseInterest(e, data)}  className="btn btn-choose">
                {data.name}
            </button>
        )
    });

    return(
        <div className="interest-block">
            <h3>Choose topics you are interested in reading about:</h3>
            <div className="block-options">
                 {interestList}
            </div>
            <div className="block-button">
                <button className="btn btn-secondary" onClick={(e)=>backStep(1)}>Back</button>
                <button className="btn btn-primary" onClick={saveInterest}>Next</button>
            </div>
        </div>
    );

}
export default UserInterest;