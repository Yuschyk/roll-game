import React from 'react';


export type TAccordionProps = {
    label: string;
    children: React.ReactNode;
    initialIsOpen?: boolean;
}

export type TIsOpenAccordion = {
    isOpen: boolean;
}
