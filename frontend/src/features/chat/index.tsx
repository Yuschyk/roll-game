import React, { FC } from 'react';

import { ChatControls } from './chat-controls';
import { ChatHeader } from './chat-header';
import { ChatHistory } from './chat-history';
import { Wrapper } from './styled';


export const Chat:FC = ():JSX.Element => (
  <Wrapper>
    <ChatHeader />
    <ChatHistory />
    <ChatControls />
  </Wrapper>
);
