import { PropsWithChildren, useState } from 'react';

import { useCookies } from 'react-cookie';
import { useQuery } from 'react-query';

import { useUserActions } from '../entities';
import { userApi } from '../entities/user/model/api';
import { ACCESS_TOKEN } from '../shared/lib';
import { Loader } from '../shared/ui-kit';


// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line react/function-component-definition
export const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [cookies] = useCookies([ACCESS_TOKEN]);
  const { setUser } = useUserActions();
  const [isLoading, setLoading] = useState(true);

  const query = useQuery([ACCESS_TOKEN], () => userApi.getProfile(), {
    select: (data) => data,
    onSuccess: (data) => {
      setUser(data);
      setLoading(false);
    },
    onError: () => {
      setLoading(false);
    },
  });

  if (isLoading) {
    return (
      <Loader />
    );
  }

  return children;
};
