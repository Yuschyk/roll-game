import React, {FC} from "react";
import {ChatTitle, OnlineCount, OnlineIndicator, OnlineWrapper, TitleWrapper, Wrapper} from "./styled";
import {ChatIcon} from "./ChatIcon";

export const ChatHeader:FC = ():JSX.Element => (
    <Wrapper>
        <TitleWrapper>
        <ChatIcon/>
            <ChatTitle>
        Чат
            </ChatTitle>
        </TitleWrapper>

        <OnlineWrapper>
            <OnlineCount>
                239
            </OnlineCount>
            <OnlineIndicator />
        </OnlineWrapper>
    </Wrapper>
)
