import React, { FC } from 'react';


import { useCreateNotification } from '../../../shared/ui-kit';
import { SectionWrapper } from './styled';


export const Profile:FC = ():JSX.Element => {
  const createNotification = useCreateNotification();

  return (
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
  );
};
