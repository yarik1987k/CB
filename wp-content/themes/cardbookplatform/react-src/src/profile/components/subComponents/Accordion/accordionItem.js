import React from 'react';

const AccordionItem = ({ title, children, isOpen, className, onClick }) => (
  <div className={`${className} ${isOpen ? 'active' : ''}`} >
    <h3 onClick={onClick}>
    <span dangerouslySetInnerHTML={{ __html: title }}/>
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 5L7 9L3 5" stroke="#271D43" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg> 
    </h3>
    {isOpen && 
        <div className="content" dangerouslySetInnerHTML={{ __html: children }} />
    }
  </div>
);

export default AccordionItem;