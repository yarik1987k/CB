import React, {useContext} from "react";
import CardsList from "./cardsList"; 
import { SearchContext } from "./context/searchContext";
const MainSearch = () =>{
     const {activeFilters} = useContext(SearchContext)
    return(
        <div className="search-list">
            <CardsList data={activeFilters}/>
        </div>
    );
}

export default MainSearch;