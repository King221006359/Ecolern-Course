import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div className='accordion-header'><p>{title}</p></div>
        <div className='symbol'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content"><p>{content}</p></div>}
    </div>
  );
};

export default Accordion;