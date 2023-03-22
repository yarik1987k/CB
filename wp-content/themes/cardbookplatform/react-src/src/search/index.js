import React, {useContext, useState, useEffect} from "react";
import { SearchContextProvider, SearchContext } from "./context/searchContext";
import MainNavigation from "../ComponentsMain/mainNav";
import SearchFilters from "./searchFillters";
import MainSearch from "./mainSearch";
import './scss/index.scss' ;
const Search = () =>{
   
    
   

    return(
        <SearchContextProvider>
            <div className="main-grid">
                <MainNavigation/>
                <div className="search-block">
                    <SearchFilters />
                    <MainSearch/>
                </div>
            </div>
        </SearchContextProvider>
    )
}

export default Search;