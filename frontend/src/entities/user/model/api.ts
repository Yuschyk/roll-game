import { apiRequester } from '../../../shared/lib';


const getProfile = () => (
  apiRequester.get('/user/profile').catch((e) => {
    console.log(e);
  })
);

export const userApi = {
  getProfile,
};
