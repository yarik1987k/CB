import React from "react";
import { useState, useEffect } from "react";
const SingleElement = ({data}) =>{
 
    const [companyData, setCompanyData] = useState();

    const getCompanyData = (companyId) =>{
        let url = '/wp-json/wp/v2/companies/'+companyId+'?_embed';
        fetch(url)
        .then(response => response.json())
        .then(json =>{
            setCompanyData(json)
        })
    }
    useEffect(()=>{
        getCompanyData(data.id)
    },[data.id])
 
 

    return( 
        <div className="single-company">
            <div className="single-company__image">
                <figure>
                    {companyData && <img src={companyData._embedded['wp:featuredmedia'][0].source_url} alt=""/>}
                </figure>
            </div>
            <div className="single-company__info">
                {companyData && <h5>{companyData.title.rendered}</h5>}
                {data && <h3>{data.company_job_title}</h3>}
                {data && 
                    <ul>
                        <li>{data.company_date_beginning}</li>
                        <li>{data.company_date_end}</li>
                    </ul>
                }
            </div>
        </div> 
    );
}

export default SingleElement;