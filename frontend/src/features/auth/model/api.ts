import { apiRequester } from '../../../shared/lib';
import { TLoginApiRequestModel, TRegisterApiRequestModel } from './types';


const login = (requestModel:TLoginApiRequestModel) => (
  apiRequester.post('/auth/login', requestModel).then((response) => response.data)
);

const register = (requestModel:TRegisterApiRequestModel) => (
  apiRequester.post('/auth/register', requestModel).then((response) => response.data)
);

export const authApi = {
  login,
  register,
};
