import React, { ReactElement } from 'react';


import { Transactions, ProfileLayout } from '../../src/pages/profile';
import { NextPageWithLayout } from '../_app';


const TransactionsPage:NextPageWithLayout = ():JSX.Element => (
  <Transactions />
);

TransactionsPage.getLayout = function getLayout(page: ReactElement) {
  return (
      <ProfileLayout>
          {page}
      </ProfileLayout>
  );
};

export default TransactionsPage;
