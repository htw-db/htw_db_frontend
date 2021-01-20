import { axiosInstance } from '../utils/axiosConfig';
import { InstanceInterface } from '../types';

const { REACT_APP_ENDPOINT_INSTANCES } = process.env;
const endpointInstances = REACT_APP_ENDPOINT_INSTANCES || '';

export const getInstances = async () =>
  await axiosInstance.get<InstanceInterface[]>(endpointInstances);
