import { axiosInstance } from '../utils/axiosConfig';
import { AddInstanceInterface, InstanceInterface } from '../types';

const { REACT_APP_ENDPOINT_INSTANCES } = process.env;
const endpointInstances = REACT_APP_ENDPOINT_INSTANCES || '';

export const getInstances = async () =>
  // eslint-disable-next-line no-return-await
  await axiosInstance.get<InstanceInterface[]>(endpointInstances);

// eslint-disable-next-line arrow-body-style
export const addInstance = async (instance: AddInstanceInterface) =>
  axiosInstance.post<InstanceInterface>(endpointInstances, instance);
