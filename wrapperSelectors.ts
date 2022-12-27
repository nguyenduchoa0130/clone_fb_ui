import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

const selectWrapperFeature = (rootState: RootState) => rootState.wrapper;
export const selectIsLoading = createSelector(selectWrapperFeature, (feat) => feat.isLoading);
