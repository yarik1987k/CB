import React, { useState, useEffect } from "react";
import industries from "./industries.json";

const IndustriesPopup = ({saveIndustries,chooseIndustries}) =>{

    const industriesList = industries.map((data, index)=>{
        return(
            <button key={index} onClick={(e) => chooseIndustries(e, data)} className="btn btn-choose">
                {data.name}
            </button>
        )
    });


    return(
        <div className="industries-block">
            <h3>Choose the industries that are  the  most relevant and useful for your business:</h3>
            <div className="block-options">
                 {industriesList}
            </div>
            <div className="block-button">
                <button className="btn btn-primary" onClick={saveIndustries}>Next</button>
            </div>
        </div>
    );
}
export default IndustriesPopup;