import React, { FC } from 'react';

import { Layout } from '@widgets';

import { useCreateNotification } from '../../shared/ui-kit';
import { SectionWrapper } from './styled';


export const Profile:FC = ():JSX.Element => {
  const createNotification = useCreateNotification();

  return (
    <Layout>
      <SectionWrapper onClick={() => {
        createNotification({
          type: 'success',
          title: 'Test',
          text: 'Test text',
        });
      }}
      >
        123
      </SectionWrapper>
    </Layout>
  );
};
