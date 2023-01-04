import { ReactNode } from 'react';

import { TabOptions } from '../../shared/ui-kit/tabs';


export type LayoutWithTabsProps = {
    children?: ReactNode;
    tabsOptions: TabOptions;
};
