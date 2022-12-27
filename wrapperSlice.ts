import { createSlice } from '@reduxjs/toolkit';
import { IWrapperState } from './wrapperModels';

const initialState: IWrapperState = {
    isLoading: false,
};

const wrapperSlice = createSlice({
    name: 'wrapper',
    initialState,
    reducers: {
        showLoading: (state) => {
            state.isLoading = true;
        },
        hideLoading: (state) => {
            state.isLoading = false;
        },
    },
});

export const wrapperReducer = wrapperSlice.reducer;
export const wrapperSyncActions = wrapperSlice.actions;
