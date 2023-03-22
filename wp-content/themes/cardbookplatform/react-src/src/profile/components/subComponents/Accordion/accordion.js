import React, { useState } from 'react';
import AccordionItem from './accordionItem';

const Accordion = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const handleItemClick = (index) => {
      setOpenIndex(index === openIndex ? null : index);
    };
  
    return (
      <div className='accordion'>
        {items.map((item, index) => (
          <AccordionItem
            key={item.title}
            title={item.title}
            isOpen={index === openIndex}
            className="accordion-item"
            onClick={() => handleItemClick(index)}
          >
            {item.content}
          </AccordionItem>
        ))}
      </div>
    );
  };
  
  export default Accordion;