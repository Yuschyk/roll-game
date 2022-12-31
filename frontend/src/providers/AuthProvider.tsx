import { PropsWithChildren } from 'react';

import Router from 'next/router';
import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';

import { userApi } from '../entities/user/model/api';
import { ACCESS_TOKEN } from '../shared/lib';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/function-component-definition
export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [cookies] = useCookies([ACCESS_TOKEN]);
  // const stateContext = useStateContext();

  const query = useQuery([ACCESS_TOKEN], () => userApi.getProfile(), {
    enabled: !!cookies[ACCESS_TOKEN],
    select: (data) => data,
    onSuccess: (data) => {
      console.log(data);
      if (!data) {
        Router.push('/login');
      }
      // stateContext.dispatch({ type: 'SET_USER', payload: data });
    },
  });

  if (query.isLoading && cookies[ACCESS_TOKEN]) {
    return (
      <div>
        <h2 style={{ fontSize: '60px' }}>LOADING</h2>
      </div>
    );
  }

  return children;
};
