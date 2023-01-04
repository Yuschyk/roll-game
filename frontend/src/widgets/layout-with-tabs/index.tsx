import React, { FC } from 'react';

import { Layout } from '@widgets';

import { Tabs } from '../../shared/ui-kit';
import { ContentWrapper } from './styled';
import { LayoutWithTabsProps } from './types';


export const LayoutWithTabs:FC<LayoutWithTabsProps> = ({ tabsOptions, children }):JSX.Element => (
  <Layout>
    <Tabs options={tabsOptions} />
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Layout>
);
