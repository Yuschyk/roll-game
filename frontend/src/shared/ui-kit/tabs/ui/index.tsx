import React, { FC } from 'react';

import { useRouter } from 'next/router';

import { TabsProps } from '../model';
import { StyledLink, Wrapper } from './styled';


export const Tabs:FC<TabsProps> = ({ options }):JSX.Element => {
  const router = useRouter();

  return (
    <Wrapper>
      {
        options.map((tab, index) => {
          const isActive = router.pathname === tab.link;

          return (
            <StyledLink
              key={index}
              isActive={isActive}
              href={tab.link}
            >
              {tab.title}
            </StyledLink>
          );
        })
      }
    </Wrapper>
  );
};
