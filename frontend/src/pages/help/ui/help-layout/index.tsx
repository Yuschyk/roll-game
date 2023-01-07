import React, { FC } from 'react';

import { LayoutWithTabs } from '@widgets';


export type HelpLayoutProps = {
    children: React.ReactNode
}
export const HelpLayout:FC<HelpLayoutProps> = ({ children }):JSX.Element => (
  <LayoutWithTabs
    tabsOptions={[
      {
        title: 'FAQ',
        link: '/help/faq',
      },
      {
        title: 'ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ',
        link: '/help/terms-of-use',
      },
      {
        title: 'ПОДДЕРЖКА',
        link: '/help/support',
      },
    ]}
  >
    {children}
  </LayoutWithTabs>
);
