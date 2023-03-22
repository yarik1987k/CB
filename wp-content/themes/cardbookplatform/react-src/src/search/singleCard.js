import React, {useEffect, useState} from "react";
import demoUserImage from '../img/demo-user.png';
import demoCoverImage from '../img/demo-cover.png';

const SingleCard = ({post}) =>{
    const [cityName, setCityName] = useState('');
    const [countryName, setCountryName] = useState('');
    const [industries, setIndustries] = useState([]);
    const [direction, setDirection] = useState([]);
    const [competences, setCompetences] = useState([]);
    const [expertiseLevel, setExpertiseLevel] = useState('');
 
    let industriesList;
    let directionsList;
    let competencesList;

    if(industries){
        industriesList = industries.map((item, index) => {
            return(
                <span key={`${index}`} className="chip">
                    {item}
                </span>
            )
        })
    } 
    if(direction){
        directionsList = direction.map((item, index) => {
            return(
                <span key={`${index}`} className="chip">
                    {item}
                </span>
            )
        })
    } 
    if(competences){
        competencesList = competences.map((item, index)  => {
            return(
                <span  key={`${index}`} className="chip">
                    {item}
                </span>
            )
        })
    } 

    const stripHTML = (str) =>{
        return str.replace(/<[^>]*>/g, '');
    }
    const trimString = (str) =>{
        const string = stripHTML(str);
        const words = string.split(' ');
        return words.slice(0, 15).join(' ');
    }
    const output = trimString(post.excerpt.rendered)+'...';
    
    const getUserCity = () =>{
        const url = `wp-json/wp/v2/city/${post.city[0]}`;
        fetch(url)
        .then(response => response.json())
        .then((json) =>{
            setCityName(json.name)
        })
    }
    const getUserCountry = () =>{
        const url = `wp-json/wp/v2/country/${post.country[0]}`;
        fetch(url)
        .then(response => response.json())
        .then((json) =>{
            setCountryName(json.name)
        })
    }

    const getUserExpertise = () =>{
        const url = `wp-json/wp/v2/expertise_level/${post.expertise_level[0]}`;
        fetch(url)
        .then(response => response.json())
        .then((json) =>{
            setExpertiseLevel(json.name)
        })
    }

    const getUserIndustries = () => {
        post.industries.forEach((id) => {
          const url = `wp-json/wp/v2/industries/${id}`;
          fetch(url)
            .then(response => response.json())
            .then((json) => {
              setIndustries((prev) => {
                if (!prev.includes(json.name)) {
                  return [...prev, json.name];
                } else {
                  return prev;
                }
              });
            });
        });
      };

      const getUserDirections = () => {
        post.direction.forEach((id) => {
          const url = `wp-json/wp/v2/direction/${id}`;
          fetch(url)
            .then(response => response.json())
            .then((json) => {
                setDirection((prev) => {
                if (!prev.includes(json.name)) {
                  return [...prev, json.name];
                } else {
                  return prev;
                }
              });
            });
        });
      };

      const getUserCompetences = () => {
        post.competences.forEach((id) => {
          const url = `wp-json/wp/v2/competences/${id}`;
          fetch(url)
            .then(response => response.json())
            .then((json) => {
                setCompetences((prev) => {
                if (!prev.includes(json.name)) {
                  return [...prev, json.name];
                } else {
                  return prev;
                }
              });
            });
        });
      };


    useEffect(()=>{
        getUserCity()
        getUserCountry()
        getUserIndustries()
        getUserDirections()
        getUserCompetences()
        getUserExpertise()
    },[post])
    
    return(
        <div className="single-card">
                <div className="single-card-holder">
                    <div className="left">
                        {post.user_cover_image &&
                            <div className="cover-image">
                                <figure>
                                    <img src={post.user_cover_image}/>
                                </figure>
                            </div>
                        }
                        {!post.user_cover_image &&
                            <div className="cover-image">
                                <figure>
                                    <img src={demoCoverImage}/>
                                </figure>
                            </div>
                        }
                        <div className="user-info">
                            {post._embedded['wp:featuredmedia'] &&
                                <div className="user-image">
                                    <figure>
                                        <img src={post._embedded['wp:featuredmedia'][0].source_url}/>
                                    </figure>
                                </div>
                            }
                            {!post._embedded['wp:featuredmedia'] &&
                                <div className="user-image">
                                    <figure>
                                        <img src={demoUserImage}/>
                                    </figure>
                                </div>
                            }
                            <div className="user-info-top">
                                <h3>{post.title.rendered}</h3>
                                {post.user_job_title &&
                                    <p>{post.user_job_title}</p>
                                }
                            </div>
                        </div>
                        {output &&
                            <div className="user-info-description">
                                <p>{output}</p>
                            </div>
                        }
                        <div className="user-info-stat">
                            {post.my_card_market_users &&
                                <div className="user-access-count">
                                    <p>This person has <span>{post.my_card_market_users.length}</span> cards</p>
                                </div>
                            }
                            {post.my_access_users &&
                                <div className="user-access-count">
                                    <p><span>{post.my_access_users.length}</span> user's have access to this person</p>
                                </div>
                            }
                        </div>
                    </div>
                    <div className="right">
                        <div className="user-info-full">
                            <div className="user-info-full-top">
                                <div className="location">
                                    <div className="icon">

                                    </div>
                                    <p>
                                        <span>{countryName}</span>    
                                        <span className="sep"></span>    
                                        <span>{cityName}</span>    
                                    </p>
                                </div>
                            </div>
                            <div className="user-info-data">
                                {post.industries && 
                                    <div className="single-data">
                                        <h3>Industries</h3>
                                        <div className="single-data-list">
                                            {industriesList && industriesList}
                                        </div>
                                    </div>
                                }
                                { post.direction &&
                                    <div className="single-data">
                                        <h3>Direction</h3>
                                        <div className="single-data-list">
                                            {directionsList && directionsList}
                                        </div>
                                    </div>
                                }

                                {post.competences &&
                                    <div className="single-data">
                                        <h3>Competences</h3>
                                        <div className="single-data-list">
                                            {competencesList && competencesList}
                                        </div>
                                    </div>
                                }

                                {post.expertise_level &&
                                    <div className="single-data">
                                        <h3>Competences</h3>
                                        <div className="single-data-list">
                                            <span className="chip">
                                                {expertiseLevel}
                                            </span>
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>

                    </div>
                </div>
            
        </div>
    );
}
export default SingleCard;