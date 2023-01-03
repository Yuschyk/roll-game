import { Login } from '@pages';
import { NextPage } from 'next';

import { withoutAuth } from '../../src/entities/user/model/withoutAuth';


const LoginPage:NextPage = ():JSX.Element => (
  <Login />
);

export default withoutAuth(LoginPage);
