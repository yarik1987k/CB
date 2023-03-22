import React,{useState, useCallback, useRef, useEffect} from "react";

const CustomSelect = ({options, name, defualt, searchHandler}) =>{
    const [selectedItemValue, setSelectedItemValue] = useState('');
    const [selectedItemLabel, setSelectedItemLabel] = useState(defualt);
    const [isActive, setIsActive] = useState(null);
    const [isShowHide, setIsShowHide] = useState(null);
    const [searchValue, setSearchValue] = useState('');
    const optionsRef = useRef(null);

    const handlerSelect = useCallback((value, label) => {
        setSelectedItemValue(value);
        setSelectedItemLabel(label);
        setIsActive(true);
        hideSelect();
        setSearchValue('');
      }, [selectedItemValue, selectedItemLabel]);

      const defualtHandler = () =>{
        setSelectedItemValue('');
        setSelectedItemLabel(defualt);
        setIsActive(null);
        hideSelect();
        setSearchValue('');
      }

      const showHandler = () =>{
        setIsShowHide(!isShowHide);
        setSearchValue('');
      }
      const hideSelect = () =>{
        setIsShowHide(null);
        setSearchValue('');
      }

      useEffect(() => {
        const handleClickOutside = (event) => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setIsShowHide(null);
              }
        };
      
        document.addEventListener('click', handleClickOutside);
      
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [optionsRef]);



    const selectOptions = options
        .filter(option => option.label.toLowerCase().includes(searchValue.toLowerCase()))
        .map((data, index) => {
            return (
                <li key={index}>
                    <button onClick={() => handlerSelect(data.value, data.label)}>
                        {data.label}
                    </button>
                </li>
            )
        });
   

    return(
        <div ref={optionsRef}  className={`custom-select ${isActive === true ? 'active' : ''}`}>
            <div className="custom-select__input">
                <input type="text" className={selectedItemLabel === defualt ? '' : 'active'} name={name} placeholder="" onClick={showHandler}  value={selectedItemLabel} readOnly/>
                <button onClick={showHandler} className={`${isShowHide === true ? 'active' : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 5L7 9L11 5" stroke="#B8B8B8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </button>
            </div>
            { isShowHide &&
                <div className={`custom-select__options ${isShowHide === true ? 'active' : ''}`}> 
                    {searchHandler &&
                        <div className="custom-select__filter-search">
                            <input type="text" placeholder="Search" onChange={(event) => setSearchValue(event.target.value)} />
                        </div>
                    }
                    <ul>
                        <li>
                            <button onClick={defualtHandler}>
                                {defualt}
                            </button>
                        </li>
                        {selectOptions}
                    </ul>
                </div>
            }
            
        </div>
    );
}
export default CustomSelect;