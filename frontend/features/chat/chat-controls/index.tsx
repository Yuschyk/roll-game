import React, {FC} from "react";
import {ActionsWrapper, ChatInput, Wrapper} from "./styled";
import {SendIcon} from "./SendIcon";
import {AttachmentIcon} from "./AttachmentIcon";

export const ChatControls:FC = ():JSX.Element => (
    <Wrapper>
        <ChatInput />
        <ActionsWrapper>
            <AttachmentIcon />
            <SendIcon />
        </ActionsWrapper>
    </Wrapper>
)
