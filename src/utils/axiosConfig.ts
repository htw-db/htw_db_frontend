import axios from 'axios';

const { REACT_APP_BASE_URL } = process.env;
const baseURL = REACT_APP_BASE_URL || '';

export const axiosInstance = axios.create({
  baseURL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

export const setAuthorization = (authToken: string) => {
  if (authToken) {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  } else {
    delete axiosInstance.defaults.headers.common.Authorization;
  }
};
