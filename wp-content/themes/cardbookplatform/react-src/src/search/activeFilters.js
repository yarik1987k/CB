import React, { useContext, useEffect, useState } from "react";
import { SearchContext } from "./context/searchContext";

const ActiveFilters = () => {
  const { activeFilters, filtersHandler } = useContext(SearchContext);
  const [filtersList, setFilters] = useState([]);

  const removeFilter = (filterId, taxonomy) => {
    const filter = activeFilters.find((filter) => filter.tax === taxonomy);
    console.log(taxonomy)
    filter.ids.splice(filter.ids.indexOf(filterId), 1);
    filtersHandler([...activeFilters]); // spread the updated activeFilters array to create a new reference
  };


  let filters;
  useEffect(() => {
    if (activeFilters) {
      filters = activeFilters
        .map((data) => {
          const urls = data.ids.reduce((acc, d) => {
            if (data.tax && d.id) {
              acc.push(`/wp-json/wp/v2/${data.tax}/${d.id}`);
            }
            return acc;
          }, []);
          
          return urls;
        })
        .flat();
        
      const fetchFilters = async () => {
        const responses = await Promise.all(
          filters.map((data) => fetch(data))
        );
        const json = await Promise.all(responses.map((res) => res.json()));
        setFilters(json);
      };
      fetchFilters();
    }
  }, [activeFilters]);

  let filterBuild;
   if(filtersList){
    filterBuild = filtersList.map((data, index)=>{
      
      return(
        <div className="active-filter" key={index}>
          <button >
           <div className="active-filter-name">{data.name}</div>
            <div className="icon" onClick={() => removeFilter(data.id, data.taxonomy)}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 5L5 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 5L15 15" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </button>
        </div>
      )
    })
   }

  return <div className="active-filters">{filterBuild}</div>;
};

export default ActiveFilters;