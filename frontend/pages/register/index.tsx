import { Register } from '@pages';
import { NextPage } from 'next';

import { withoutAuth } from '../../src/entities/user/model/withoutAuth';


const RegisterPage:NextPage = ():JSX.Element => (
  <Register />
);

export default withoutAuth(RegisterPage);
