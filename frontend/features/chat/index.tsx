import React, {FC} from "react";
import {Wrapper} from "./styled";
import {ChatHeader} from "./chat-header";
import {ChatHistory} from "./chat-history";
import {ChatControls} from "./chat-controls";

export const Chat:FC = ():JSX.Element => (
    <Wrapper>
        <ChatHeader />
        <ChatHistory />
        <ChatControls />
    </Wrapper>
)
