import React, {FC} from "react";
import {InnerWrapper, Wrapper} from "./styled";
import {Menu} from "./menu";
import {ProfileCard} from "./profile-card";
import { ContentWrapper } from "../../../../shared/styled";

export const Header:FC = ():JSX.Element => (
    <Wrapper>
            <ContentWrapper>
        <InnerWrapper>
        <img src="/logotype.svg" alt="DurakRoll logotype"/>
        <Menu/>
        </InnerWrapper>
        <ProfileCard/>
            </ContentWrapper>
    </Wrapper>
)
