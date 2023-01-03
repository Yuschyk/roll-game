import axios from 'axios';
import Cookies from 'js-cookie';

import { ACCESS_TOKEN } from '../consts';


const BASE_URL = 'http://localhost:4000/api/';

export const apiRequester = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// apiRequester.defaults.headers.common['Content-Type'] = 'application/json';

apiRequester.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get(ACCESS_TOKEN);

    if (accessToken) {
      // Configure this as per your backend requirements
      // Authorization: `Bearer ${accessToken}`,

      config.headers!.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);
