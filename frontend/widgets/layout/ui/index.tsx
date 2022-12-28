import React, { FC } from 'react';

import { Chat } from '../../../features/chat';
import { Footer } from './footer';
import { Header } from './header';
import { ChildrenWrapper, Content, Wrapper } from './styled';
import { LayoutProps } from './types';


export const Layout:FC<LayoutProps> = ({ children }):JSX.Element => (
  <Wrapper>
    <Header />
    <Content>
      <Chat />
      <ChildrenWrapper>
        {children}
      </ChildrenWrapper>
    </Content>
    <Footer />
  </Wrapper>
);
