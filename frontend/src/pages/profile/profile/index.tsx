import React, { FC } from 'react';


import { UserCard } from '../../../entities';
import { SectionWrapper } from './styled';


export const Profile:FC = ():JSX.Element => (
  <SectionWrapper>
    <UserCard />
  </SectionWrapper>
);
