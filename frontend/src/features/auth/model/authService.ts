import Cookies from 'js-cookie';

import { ACCESS_TOKEN } from '../../../shared/lib';
import { authApi } from './api';


const setTokenToCookie = (cookie:string) => {
  Cookies.set(ACCESS_TOKEN, cookie, { expires: 7 });
};

const removeTokenFromCookie = () => {
  Cookies.remove(ACCESS_TOKEN);
};

export const authService = {
  async login(email: string, password: string) {
    const requestModel = {
      email,
      password,
    };
    const response = await authApi.login(requestModel);

    if (response.token) {
      setTokenToCookie(response.token);
    }
  },

  async register(email: string, username:string, password: string) {
    const requestModel = {
      email,
      username,
      password,
    };
    const response = await authApi.register(requestModel);

    if (response.token) {
      setTokenToCookie(response.token);
    }
    // const response = await axiosClassic.post<IAuthData>('/auth/register', {
    //   email,
    //   password,
    // });
    //
    // if (response.data.accessToken) saveToStorage(response.data);
    //
    // return response.data;
  },

  logout() {
    removeTokenFromCookie();
    // localStorage.removeItem('user');
  },
};
