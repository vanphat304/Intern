import axios from 'axios';
import env from '../configs/config';
export const path = `${env.baseURL}`;

export function authHeader() {
  let access_token = null;
  try {
    access_token = JSON.parse(localStorage.getItem('tempUser') as string)?.access_token;
  } catch (error) {
    localStorage.clear();
    window.location.href = '/';
  }

  if (!access_token) {
    return {
      'Content-type': 'application/json',
      Accept: 'application/json',
    };
  }

  return {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${access_token}`,
  };
}

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: `${path}`,
  headers: authHeader(),
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const { status } = error.response || {};
    if ([401].includes(status)) {
      localStorage.clear();
      window.location.href = '/';
    }

    return Promise.reject(error);
  },
);

axiosInstance.interceptors.request.use(
  (request) => {
    request.headers = authHeader();
    return request;
  },
  (error) => {
    return Promise.reject(error);
  },
);
export default axiosInstance;
