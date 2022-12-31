import React, { FC } from 'react';

import { LoginForm } from '../../features';
import { PageWrapper } from './styled';


export const Login:FC = ():JSX.Element => (
  <PageWrapper>
    <LoginForm />
  </PageWrapper>
);
