import React, { useState, useEffect, useContext, useCallback } from "react";
import { SearchContext } from "./context/searchContext";
import SelectNormal from "./selectNormal";

const FiltersHolder = ({filterOpenClose}) =>{
    const { filtersHandler, selectObject, storeChossenFiltersFunction, storeChossenFilters } = useContext(SearchContext);
    const { 
        industries, 
        direction, 
        competences, 
        countries, 
        cities, 
        expertise_level 
      } = selectObject;
   
    const [isReset, setIsReset] = useState(false);

 
      const arryFilters = [
        { name: "Expertise level", id: "expertise_level", data: expertise_level, type: "select", search: false },
        { name: "Industries", id: "industries", data: industries,  type: "chip", search:true },
        { name: "Direction", id: "direction", data: direction, type: "chip", search:true },
        { name: "Competences", id: "competences", data: competences,  type: "chip", search:true },
        { name: "Country", id: "country", data: countries, type: "select" , search:true},
        { name: "City", id: "city", data: cities, type: "select", search:true },
      ];

 
 
 
      const resetFilters = () => {
        console.log('click event, reset filters.')
        storeChossenFiltersFunction(null)
        filtersHandler(null)
        setIsReset(true)
      }

      const applyHandler = () =>{
        filtersHandler(storeChossenFilters)
        setIsReset(false)
      }

      const filtersSearch = arryFilters.map((data, index) => (
        <div key={index} className="form-group form-group-row">
            <SelectNormal  
              id={data.id}
              data={data.data} 
              name={data.name}
              type={data.type}
              search={data.search}
              reset={isReset}
            />
        </div>
      ));

  useEffect(()=>{

  },[isReset])
    return(
        <div className="filters-lists-holder">
            <div className="filters-lists-holder--header">
                <div className="filter-label">
                    <div className="icon">
                      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M5.6583 3.28392C5.6583 4.68392 4.50414 5.81866 3.07915 5.81866C1.65499 5.81866 0.5 4.68392 0.5 3.28392C0.5 1.88474 1.65499 0.75 3.07915 0.75C4.50414 0.75 5.6583 1.88474 5.6583 3.28392ZM14.3701 2.17383C14.9934 2.17383 15.5001 2.67161 15.5001 3.284C15.5001 3.89722 14.9934 4.395 14.3701 4.395H9.43844C8.81428 4.395 8.30762 3.89722 8.30762 3.284C8.30762 2.67161 8.81428 2.17383 9.43844 2.17383H14.3701ZM1.63083 10.4685H6.56247C7.18663 10.4685 7.69329 10.9663 7.69329 11.5795C7.69329 12.1919 7.18663 12.6905 6.56247 12.6905H1.63083C1.00666 12.6905 0.5 12.1919 0.5 11.5795C0.5 10.9663 1.00666 10.4685 1.63083 10.4685ZM12.9214 14.0833C14.3464 14.0833 15.5006 12.9486 15.5006 11.5494C15.5006 10.1494 14.3464 9.01465 12.9214 9.01465C11.4973 9.01465 10.3423 10.1494 10.3423 11.5494C10.3423 12.9486 11.4973 14.0833 12.9214 14.0833Z" fill="white"/>
                      </svg>                    
                    </div>
                    <div className="label">
                        Filter
                    </div>
                </div>
                <div className="close-filter">
                    <button onClick={filterOpenClose}>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.43074 12.3877C1.02584 12.7926 1.01758 13.5115 1.439 13.9329C1.86869 14.3543 2.58759 14.3461 2.98422 13.9494L7.87603 9.05761L12.7596 13.9412C13.1727 14.3543 13.8834 14.3543 14.3048 13.9329C14.7262 13.5032 14.7262 12.8008 14.3131 12.3877L9.42951 7.50413L14.3131 2.61232C14.7262 2.19916 14.7345 1.48853 14.3048 1.06711C13.8834 0.645685 13.1727 0.645685 12.7596 1.05884L7.87603 5.94239L2.98422 1.05884C2.58759 0.653948 1.86042 0.637422 1.439 1.06711C1.01758 1.48853 1.02584 2.21569 1.43074 2.61232L6.31429 7.50413L1.43074 12.3877Z" fill="white"/>
                    </svg>
                    </button>
                </div>
            </div>
            <div className="filters-lists-holder--body">
                 {filtersSearch}
            </div>
            <div className="filters-lists-holder--buttons">
                <button className="btn btn-reset" onClick={resetFilters}>Reset all filters</button>
                <button className="btn btn-secondary" onClick={applyHandler}>Apply</button>
            </div>
        </div>
    );
}
export default FiltersHolder;