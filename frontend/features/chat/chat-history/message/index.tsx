import React, {FC} from "react";
import {UserAvatar, UserMessage, UserName, Wrapper} from "./styled";

export const  Message:FC = ():JSX.Element => (
    <Wrapper>
        <UserAvatar/>
        <UserName>Yura Yuschyk</UserName>
        <UserMessage>SayHI</UserMessage>
    </Wrapper>
)
