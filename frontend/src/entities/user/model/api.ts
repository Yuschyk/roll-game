import { apiRequester } from '../../../shared/lib';


const getProfile = () => (
  apiRequester.get('/user/profile').then((response) => response.data)
);

export const userApi = {
  getProfile,
};
