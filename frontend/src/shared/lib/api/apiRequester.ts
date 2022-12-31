import axios from 'axios';
import Cookies from 'js-cookie';

import { ACCESS_TOKEN } from '../consts';


const BASE_URL = 'http://localhost:4000/api/';

const accessToken = Cookies.get(ACCESS_TOKEN);
export const apiRequester = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

apiRequester.defaults.headers.common['Content-Type'] = 'application/json';
