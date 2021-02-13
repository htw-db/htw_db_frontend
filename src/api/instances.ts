import { axiosInstance } from '../utils/axiosConfig';
import { AddInstanceInterface, InstanceInterface } from '../types';

const { REACT_APP_ENDPOINT_INSTANCES } = process.env;
const endpointInstances = REACT_APP_ENDPOINT_INSTANCES || '';

export const getInstances = async () => axiosInstance.get<InstanceInterface[]>(endpointInstances);

export const addInstance = async (instance: AddInstanceInterface) =>
  axiosInstance.post<InstanceInterface>(endpointInstances, instance);

export const deleteInstance = async (id: number) =>
  axiosInstance.delete<number>(`${endpointInstances}/${id}`);
