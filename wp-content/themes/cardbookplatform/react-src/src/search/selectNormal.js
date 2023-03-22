import React, {useState, useEffect, useContext} from "react";
import { SearchContext } from "./context/searchContext";
const SelectNormal = ({data,name, type, search, reset}) =>{
    
    const {storeChossenFiltersFunction} = useContext(SearchContext)
    const [isOpen, setIsOpen] = useState(false);
    const [checkedValues, setCheckedValues] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const chipHandler = (e) => {
      const newValue = JSON.parse(e.target.value);
      const isChecked = e.target.checked;
    
      setCheckedValues((prev) => {
        const existingValueIndex = prev.findIndex((v) => v.tax === newValue.tax);
        const existingValue = prev[existingValueIndex];
        const updatedValue = {
          tax: newValue.tax,
          ids: existingValue
            ? existingValue.ids.map((idObj) =>
                idObj.id === newValue.id.id ? { ...idObj, name: newValue.id.name } : idObj
              )
            : [],
        };
    
        if (isChecked) {
          if (!existingValue) {
            updatedValue.ids.push(newValue.id);
          } else if (!existingValue.ids.some((idObj) => idObj.id === newValue.id.id)) {
            updatedValue.ids.push(newValue.id);
          }
        } else if (existingValue) {
          updatedValue.ids = updatedValue.ids.filter((idObj) => idObj.id !== newValue.id.id);
        }
    
        if (updatedValue.ids.length === 0) {
          return prev.filter((v) => v.tax !== updatedValue.tax);
        } else if (existingValueIndex !== -1) {
          const updatedValues = [...prev];
          updatedValues[existingValueIndex] = updatedValue;
          return updatedValues;
        } else {
          return [...prev, updatedValue];
        }
      });
    };
      

    let filters;
    if (data) {
        filters = data
        .filter((d) => d.name.toLowerCase().includes(searchTerm.toLowerCase())) // filter based on searchTerm
        .map((d, i) => {
        const value = `{"tax": "${d.taxonomy}", "id": { "id": ${d.id}, "name": "${d.name}"}}`;

          
        let isChecked = checkedValues.some((v) => v.ids.some((id) => id.id === d.id && id.name === d.name) && v.tax === d.taxonomy);

        const activeClass = isChecked ? 'active' : '';
         
        return (
          <label key={i} className={`${type} ${activeClass}`}>
            <input type="checkbox" value={value} onChange={chipHandler} checked={isChecked} />
            <span>{d.name}</span>
          </label>
        );
      });
    }


    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const applyFilters = () =>{
       
      storeChossenFiltersFunction(checkedValues[0])
        
        toggleOpen()
    }

    const handleSearch = (e) => setSearchTerm(e.target.value);

    useEffect(()=>{ 
      if(reset === true){
        setCheckedValues([])
      }  
    },[reset])
 

    return(
        <div className={`select-normal ${isOpen ? 'select-normal__open' : ''}`} >
            <div className="select-normal-holder">
                <button onClick={toggleOpen}>
                    <p>{name}</p>
                    <span className="icon">
                        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 0.75L5 4.75L9 0.75" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </span>
                </button>
            </div>
            <div className="select-normal-holder-search_wrapper">
                {search &&
                    <div className="filter-search">
                        <div className="icon">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.53425 12.9448C7.95327 12.9448 9.26182 12.4903 10.3324 11.7328L14.3601 15.7223C14.547 15.9074 14.7934 16 15.0568 16C15.6091 16 16 15.5792 16 15.0405C16 14.788 15.915 14.5439 15.7281 14.3672L11.726 10.3945C12.5672 9.30037 13.0685 7.94529 13.0685 6.47238C13.0685 2.91215 10.1285 0 6.53425 0C2.94849 0 0 2.90373 0 6.47238C0 10.0326 2.93999 12.9448 6.53425 12.9448ZM6.53425 11.5476C3.73022 11.5476 1.41052 9.24987 1.41052 6.47238C1.41052 3.6949 3.73022 1.39716 6.53425 1.39716C9.33829 1.39716 11.658 3.6949 11.658 6.47238C11.658 9.24987 9.33829 11.5476 6.53425 11.5476Z" fill="white"/>
                            </svg>
                        </div>
                        <input type="text" name="search-select" onChange={handleSearch} placeholder="Search" />
                    </div>
                }
                <div className="filters-list"> 
                    {filters}
                    <div className="apply-btn">
                        <button className="btn btn-apply" onClick={applyFilters}> Apply </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectNormal;