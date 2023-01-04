import React, { FC } from 'react';

import { LayoutWithTabs } from '@widgets';


export type ProfileLayoutProps = {
    children: React.ReactNode
}
export const ProfileLayout:FC<ProfileLayoutProps> = ({ children }):JSX.Element => (
  <LayoutWithTabs
    tabsOptions={[
      {
        title: 'ПРОФИЛЬ',
        link: '/profile',
      },
      {
        title: 'ТРАНЗАКЦИИ',
        link: '/profile/transactions',
      },
    ]}
  >
    {children}
  </LayoutWithTabs>
);
