import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AddInstanceInterface, InstanceInterface, InstanceStatus } from '../types';

interface InstanceState {
  instances: InstanceInterface[];
  isLoading: boolean;
  error?: string;
  presetId: number;
}

export const initialState: InstanceState = { instances: [], isLoading: false, presetId: -1 };

const InstanceSlice = createSlice({
  name: 'instance',
  initialState,
  reducers: {
    getInstancesStart(state) {
      state.isLoading = true;
      state.instances = [];
      state.error = undefined;
    },
    getInstancesSuccess(state, { payload }: PayloadAction<InstanceInterface[]>) {
      state.instances = payload;
      state.error = undefined;
      state.isLoading = false;
    },
    getInstancesFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    addInstanceStart(state, { payload }: PayloadAction<AddInstanceInterface>) {
      state.error = undefined;
      state.instances = [
        ...state.instances,
        { ...payload, id: state.presetId, personId: NaN, status: InstanceStatus.LOADING },
      ];
      state.presetId -= 1;
    },
    addInstanceSuccess(state, { payload }: PayloadAction<InstanceInterface>) {
      state.instances = [
        ...state.instances.filter(
          (instance) => `${instance.prefix}${instance.name}` !== payload.name,
        ),
        { ...payload, status: InstanceStatus.RUNNING },
      ];
      state.error = undefined;
      state.isLoading = false;
    },
    addInstanceFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
    deleteInstanceStart(state, { payload }: PayloadAction<number>) {
      state.isLoading = true;
      state.error = undefined;
      state.instances = state.instances.map((instance) =>
        instance.id === payload ? { ...instance, status: InstanceStatus.DELETING } : instance,
      );
      state.isLoading = false;
    },
    deleteInstanceSuccess(state, { payload }: PayloadAction<number>) {
      state.error = undefined;
      state.instances = state.instances.filter((instance) => instance.id !== payload);
      state.isLoading = false;
    },
    deleteInstanceFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const {
  getInstancesStart,
  getInstancesSuccess,
  getInstancesFailed,
  addInstanceStart,
  addInstanceSuccess,
  addInstanceFailed,
  deleteInstanceStart,
  deleteInstanceSuccess,
  deleteInstanceFailed,
} = InstanceSlice.actions;

export default InstanceSlice.reducer;
