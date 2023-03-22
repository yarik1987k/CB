import React from "react";
import SingleElement from "./elements/singleElementCoTemplate";

const ProfileCompanies = ({data}) =>{ 
    const companiesList = data.map((d,i)=>{
        return(
            <SingleElement key={i} data={d}></SingleElement>
        ) 
    });

    return(
        <div className="companies-list">
            <h2>Work in a company</h2>
             {data && companiesList}
        </div>
    );
}

export default ProfileCompanies;