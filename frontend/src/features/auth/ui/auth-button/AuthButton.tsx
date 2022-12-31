import React, { FC } from 'react';

import { CustomizedButton } from './styled';
import { TAuthButton } from './types';


export const AuthButton:FC<TAuthButton> = ({ children }):JSX.Element => (
  <CustomizedButton
    variant="contained"
    type="submit"
  >
    {children}
  </CustomizedButton>
);
