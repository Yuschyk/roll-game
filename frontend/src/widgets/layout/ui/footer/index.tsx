import React, { FC } from 'react';

import { FooterCopyright, FooterInfo, FooterLogotype, InnerWrapper, Wrapper } from './styled';


export const Footer:FC = ():JSX.Element => (
  <Wrapper>
    <FooterInfo>
      <InnerWrapper>
        <FooterLogotype src="/logotype.svg" />

        <FooterCopyright>
          Все права защищены. 2023.
          <br />
          Вся существующая информация на сайте конфиденциальна.
        </FooterCopyright>
      </InnerWrapper>
    </FooterInfo>
  </Wrapper>
);
