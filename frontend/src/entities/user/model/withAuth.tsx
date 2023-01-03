import React from 'react';

import Router from 'next/router';

import { Loader } from '../../../shared/ui-kit';
import { useUser } from './store';


export const withAuth = (WrappedComponent:any) => function WithAuth(props:any) {
  const user = useUser();

  if (!user) {
    Router.push('/login');
    return (
      <Loader />
    );
  }

  return <WrappedComponent {...props} />;
};
