import React, { FC } from 'react';

import { RegisterForm } from '../../features';
import { PageWrapper } from './styled';


export const Register:FC = ():JSX.Element => (
  <PageWrapper>
    <RegisterForm />
  </PageWrapper>
);
