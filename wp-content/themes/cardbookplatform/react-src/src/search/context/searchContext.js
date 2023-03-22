import React, {createContext, useState, useEffect} from "react";

const SearchContext = createContext({});
const SearchContextProvider = ({children}) =>{
    const [activeFilters, setActiveFilters] = useState([]);
    const [industries, setIndustries] = useState('');
    const [direction, setDirection] = useState('');
    const [competences, setCompetences] = useState('');
    const [countries, setCountries] = useState('');
    const [cities, setCities] = useState('');
    const [expertise_level, setExpertise] = useState('');

    const [stroedataUrlsToFetch, setStroedataUrlsToFetch] = useState([])
    const [storeChossenFilters, setStoreChossenFilters] = useState([]);
    





    const fetchData = (url, setter) => {
      fetch(url)
        .then(response => response.json())
        .then(json => {
          setter(json);
        })
        .catch(error => console.error(`Error fetching data: ${error}`));
    };

    function filtersHandler(data){
      if(data === null){
        setActiveFilters([])
      }else{
        setActiveFilters(data)
      }
      
    }
    
    function storeChossenFiltersFunction(data) {
      if(data){
        setStoreChossenFilters(prevFilters => {
          const existingFilter = prevFilters.find(filter => filter.tax === data.tax);
          
          if (existingFilter) {
            // If there is an existing filter for the given tax value, update it
            const updatedFilter = {
              tax: data.tax,
              ids:data.ids
            };

            return prevFilters.map(filter =>
              filter.tax === data.tax ? updatedFilter : filter
            );
          } else {
            // If there is no existing filter for the given tax value, add a new filter
            const newFilter = {
              tax: data.tax,
              ids: data.ids
            };
      
            return [...prevFilters, newFilter];
          }
        });
      }else{
        setStoreChossenFilters([])
      }
    }



    useEffect(()=>{
        
        fetchData('/wp-json/wp/v2/expertise_level', setExpertise);
        fetchData('/wp-json/wp/v2/industries', setIndustries);
        fetchData('/wp-json/wp/v2/direction', setDirection);
        fetchData('/wp-json/wp/v2/competences', setCompetences);
        fetchData('/wp-json/wp/v2/country', setCountries);
        fetchData('/wp-json/wp/v2/city', setCities);
          console.log(storeChossenFilters)
    },[activeFilters, stroedataUrlsToFetch, storeChossenFilters]);
    
      const value = {
        activeFilters,
        selectObject: {
          industries,
          direction,
          competences,
          countries,
          cities,
          expertise_level
        },
        stroedataUrlsToFetch,
        storeChossenFilters,
        storeChossenFiltersFunction,
        filtersHandler,
        setStroedataUrlsToFetch,
        fetchData
      }
    return( 
        <SearchContext.Provider value={value}>
            {children}
        </SearchContext.Provider>
    );
}

export {SearchContext, SearchContextProvider};