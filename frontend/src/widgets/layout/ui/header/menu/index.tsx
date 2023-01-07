import React, { FC } from 'react';

import { MenuItem, MenuWrapper } from './styled';


export const Menu:FC = ():JSX.Element => (
  <MenuWrapper>
    <MenuItem href="/help/faq">
      ПОМОЩЬ
    </MenuItem>
    <MenuItem href="/contacts">
      КОНТАКТЫ
    </MenuItem>
    <MenuItem href="/">
      ЧЕСТНОСТЬ
    </MenuItem>

  </MenuWrapper>
);
