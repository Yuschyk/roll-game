import React, { FC, useState } from 'react';

import { Arrow } from './Arrow';
import { AccordionBody, AccordionHeader, AccordionLabel, Wrapper } from './styled';
import { TAccordionProps } from './types';


export const Accordion:FC<TAccordionProps> = ({ label, initialIsOpen = false, children }):JSX.Element => {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  const toggleOpening = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <AccordionHeader
        isOpen={isOpen}
        onClick={toggleOpening}
      >
        <AccordionLabel>
          {label}
        </AccordionLabel>
        <Arrow isOpen={isOpen} />
      </AccordionHeader>
      {
        isOpen && (
          <AccordionBody
            isOpen={isOpen}
          >
            {children}
          </AccordionBody>
        )
      }
    </Wrapper>
  );
};
