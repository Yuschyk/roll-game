import React, {FC, useState} from "react";
import {AccordionBody, AccordionHeader, Wrapper} from "./styled";
import {TAccordionProps} from "./types";
import {Arrow} from "./Arrow";

export const Accordion:FC<TAccordionProps> = ({ label, initialIsOpen= false, children }):JSX.Element => {
    const [isOpen, setIsOpen] = useState(initialIsOpen);

    const toggleOpening = () => {
        setIsOpen(!isOpen);
    }

    return(
        <Wrapper>
            <AccordionHeader
                isOpen={isOpen}
                onClick={toggleOpening}>
                <Arrow/>
            </AccordionHeader>
            <AccordionBody
                isOpen={isOpen}
            >
                asd
            </AccordionBody>
        </Wrapper>
    )
}
