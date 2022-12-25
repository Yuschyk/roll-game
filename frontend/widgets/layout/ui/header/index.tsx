import React, {FC} from "react";
import {HeaderRow, InnerWrapper, Wrapper} from "./styled";
import {Menu} from "./menu";
import {ProfileCard} from "./profile-card";
import Link from "next/link";

export const Header:FC = ():JSX.Element => (
    <Wrapper>
            <HeaderRow>
        <InnerWrapper>
            <Link href="/">
        <img src="/logotype.svg" alt="DurakRoll logotype"/>
            </Link>

        <Menu/>
        </InnerWrapper>
        <ProfileCard/>
            </HeaderRow>
    </Wrapper>
)
