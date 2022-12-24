import React, {FC} from "react";
import {HeaderRow, InnerWrapper, Wrapper} from "./styled";
import {Menu} from "./menu";
import {ProfileCard} from "./profile-card";

export const Header:FC = ():JSX.Element => (
    <Wrapper>
            <HeaderRow>
        <InnerWrapper>
        <img src="/logotype.svg" alt="DurakRoll logotype"/>
        <Menu/>
        </InnerWrapper>
        <ProfileCard/>
            </HeaderRow>
    </Wrapper>
)
