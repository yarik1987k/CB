import React from "react";

const SingleCard = ({data}) =>{
     
   
    const stripHTML = (str) =>{
        return str.replace(/<[^>]*>/g, '');
    }
    const trimString = (str) =>{
        const string = stripHTML(str);
        const words = string.split(' ');
        return words.slice(0, 5).join(' ');
    }
    const output = trimString(data.excerpt.rendered)+'...';
 

    let levelAccess;
    if(data.level === 'a') levelAccess = '<i class="a-level">'+data.level+'</i>';
    if(data.level === 'b') levelAccess = '<i class="b-level">'+data.level+'</i>';
    if(data.level === 'c') levelAccess = '<i class="c-level">'+data.level+'</i>';
    
         
    return(
        <div className="single-card">
            <a href={data.link}>
                <div className="single-card__cover">
                    <figure>
                        <img src={data.userCoverImage} alt=""/>
                    </figure>
                </div>
                <div className="single-card__image">
                    <figure>
                        <img src={data.image} alt=""/>
                    </figure>
                    {data.title && <h3>{data.title}</h3>}
                    {data.user_job_title && <h5>{data.user_job_title}</h5>}
                    {output && <p>{output}</p> }
                </div>
                <div className="single-card__info">
                    {data.level &&
                        <div className="level">
                            <span>Level access</span>
                            <span className="level-label" dangerouslySetInnerHTML={{ __html: levelAccess }} />
                        </div>
                    }

                    <div className="price">
                        <span>Price for access</span>
                        <span className="price-label">{data.price}$</span>
                    </div>
                </div>
            </a>
        </div>
    );
}
export default SingleCard;