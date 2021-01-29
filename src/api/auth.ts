import { axiosInstance } from '../utils/axiosConfig';
import { LdapCredentialsInterface } from '../types';

const { REACT_APP_ENDPOINT_LOGIN } = process.env;
const endpointLogin = REACT_APP_ENDPOINT_LOGIN || '';

export const login = (ldapCredentials: LdapCredentialsInterface) =>
  axiosInstance.post(endpointLogin, ldapCredentials);
