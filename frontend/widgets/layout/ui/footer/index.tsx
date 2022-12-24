import React, {FC} from "react";
import {FooterCopyright, FooterLogotype, Wrapper} from "./styled";

export const Footer:FC = ():JSX.Element => (
    <Wrapper>
        <FooterLogotype src="/logotype.svg" />

        <FooterCopyright>
            Все права защищены. 2022.
            <br/>
            Вся существующая информация на сайте конфиденциальна.
        </FooterCopyright>
    </Wrapper>
)
