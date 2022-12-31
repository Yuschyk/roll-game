import React, { FC } from 'react';

import { CustomizedInput } from './styled';
import { TAuthInputProps } from './types';


export const AuthInput:FC<TAuthInputProps> = ({ label, name, type = 'text', ...props }):JSX.Element => (
  <CustomizedInput
    name={name}
    label={label}
    type={type}
    variant="outlined"
    {...props}
  />
);
