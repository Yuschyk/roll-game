import React, { FC } from 'react';

import { LoaderIcon, LoaderWrapper } from './styled';


export const Loader:FC = ():JSX.Element => (
  <LoaderWrapper>
    <LoaderIcon src="/loaderIcon.svg" />
  </LoaderWrapper>
);
