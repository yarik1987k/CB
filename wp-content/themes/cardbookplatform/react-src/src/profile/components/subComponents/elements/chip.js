import React from "react";

const Chip = ({data}) =>{ 
    const chips = data.map((data, index)=>{
        return (
            <li className="chips__single" key={index}><span>{data.name}</span></li>
        );
    })
    
    return(
        <ul className="chips">
            {chips}
        </ul>
    );
}

export default Chip;