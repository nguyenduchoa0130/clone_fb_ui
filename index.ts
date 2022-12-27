import { wrapperReducer, wrapperSyncActions } from './wrapperSlice';
import * as wrapperSelectors from './wrapperSelectors';
import * as wrapperModels from './wrapperModels';

const wrapperActions = {
    ...wrapperSyncActions,
};

export { wrapperReducer, wrapperActions, wrapperSelectors, wrapperModels };
