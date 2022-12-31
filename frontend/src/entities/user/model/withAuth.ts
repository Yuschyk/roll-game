import Router from 'next/router';

import { userSelectors } from './selectors';


export const withAuth = () => {
  const isLoggedIn = !!userSelectors.getUser();

  if (!isLoggedIn) {
    Router.push('/login');
  }
};
