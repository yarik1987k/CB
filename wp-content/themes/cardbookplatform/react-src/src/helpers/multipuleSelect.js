import React, { useState, useCallback, useRef, useEffect, useMemo } from 'react';

const MultipulleSelect = ({ options, name, defualt, searchHandler }) => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isActive, setIsActive] = useState(null);
    const [isShowHide, setIsShowHide] = useState(null);
    const [searchValue, setSearchValue] = useState('');

    const optionsRef = useRef(null);

    const handleSelect = useCallback(
        (value, label) => {
            setSelectedOptions(selectedOptions => [
                ...selectedOptions,
                { value, label },
            ]);
            setIsActive(true);
            hideSelect();
            setSearchValue('');
        },
        [selectedOptions]
    );

    const handleDefault = useCallback(() => {
        setSelectedOptions([]);
        setIsActive(null);
        hideSelect();
        setSearchValue('');
    }, []);

    const handleRemove = useCallback(
        value => {
            setSelectedOptions(selectedOptions =>
                selectedOptions.filter(option => option.value !== value)
            );
        },
        [selectedOptions]
    );

    const showHandler = () => {
        setIsShowHide(!isShowHide);
        setSearchValue('');
    };
    const hideSelect = () => {
        setIsShowHide(null);
        setSearchValue('');
    };

    useEffect(() => {
        const handleClickOutside = event => {
            if (optionsRef.current && !optionsRef.current.contains(event.target)) {
                setIsShowHide(null);
              }
        };

        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [optionsRef]);

    const selectOptions = useMemo(
        () =>
            options
                .filter(option =>
                    option.label.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((data, index) => {
                    if (selectedOptions.some(option => option.value === data.value)) {
                        return <li key={index} className="selected"><button>{data.label}</button></li>;
                    }
                    return (
                        <li key={index}>
                            <button onClick={() => handleSelect(data.value, data.label)}>
                                {data.label}
                            </button>
                        </li>
                    );
                }),
        [options, searchValue, selectedOptions]
    );

    const selectedItemsLabels = useMemo(
        () =>
            selectedOptions.map((option, index) => {
                return (
                    <div className="selected-item" key={index}>
                        <p>{option.label}</p>
                        <button  onClick={() => handleRemove(option.value)}  > 
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.226473 8.6205C-0.0734506 8.92042 -0.0795715 9.45294 0.232594 9.76511C0.55088 10.0773 1.0834 10.0712 1.3772 9.77735L5.00076 6.15379L8.61821 9.77123C8.92425 10.0773 9.45065 10.0773 9.76282 9.76511C10.075 9.44682 10.075 8.92655 9.76894 8.6205L6.15149 5.00306L9.76894 1.3795C10.075 1.07346 10.0811 0.547059 9.76282 0.234894C9.45065 -0.0772704 8.92425 -0.0772704 8.61821 0.228774L5.00076 3.84621L1.3772 0.228774C1.0834 -0.0711496 0.544759 -0.0833913 0.232594 0.234894C-0.0795715 0.547059 -0.0734506 1.0857 0.226473 1.3795L3.84392 5.00306L0.226473 8.6205Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                );
            }),
        [selectedOptions]
    );
 
    return (
        <div ref={optionsRef} className={`custom-select custom-select-multipule ${selectedItemsLabels.length > 2 ? 'active' : ''}`}>
            <div className={`custom-select__input  ${selectedItemsLabels.length > 2 ? 'active' : ''}`}>
                <div className={`custom-select-multipule__selected-items ${selectedItemsLabels.length > 0 ? 'active' : ''}`}>
                    {selectedItemsLabels.length > 0 ? selectedItemsLabels : <div className='defualt'>{defualt}</div>}
                    
                </div>
                <button onClick={showHandler} className={`${isShowHide === true ? 'active' : ''}`}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.50782 13.5234C6.99742 16.013 11.0339 16.013 13.5234 13.5234C16.013 11.0339 16.013 6.9974 13.5234 4.50781C11.0338 2.01821 6.99737 2.01826 4.50782 4.50781C2.01827 6.99735 2.01822 11.0338 4.50782 13.5234ZM13.0097 9.01564C13.0098 9.34694 12.7411 9.6156 12.4097 9.61563L9.61563 9.61562L9.61565 12.4097C9.6156 12.7411 9.34694 13.0098 9.01566 13.0097C8.68425 13.0097 8.41562 12.7411 8.41565 12.4097L8.41564 9.6156L5.62155 9.61558C5.29014 9.61563 5.02151 9.347 5.02154 9.01558C5.02146 8.6843 5.29012 8.41564 5.62153 8.41559L8.41562 8.41561L8.4156 5.62152C8.41565 5.29011 8.68431 5.02145 9.01559 5.02153C9.347 5.02148 9.61563 5.29011 9.6156 5.62153L9.61561 8.41562L12.4097 8.41564C12.7411 8.41561 13.0098 8.68424 13.0097 9.01564Z" fill="white" fillOpacity="0.7"/>
                    </svg>
                </button>
            </div>
            {isShowHide && (
                <div className={`custom-select__options active`}>
                    {searchHandler && (<div className="custom-select__filter-search">
                        <input
                            type="text"
                            placeholder="Search"
                            onChange={event => setSearchValue(event.target.value)}
                        />
                    </div>
                    )}
                    <ul className={`${isActive === true ? 'active' : ''}`}>
                        <li>
                            <button onClick={handleDefault}>{defualt}</button>
                        </li>
                        {selectOptions}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MultipulleSelect;