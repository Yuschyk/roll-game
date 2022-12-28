import React from "react";

export type TAccordionProps = {
    label: string;
    children: JSX.Element;
    initialIsOpen?: boolean;
}

export type TIsOpenAccordion = {
    isOpen: boolean;
}
