import type {RootState} from '../../store/rootReducer';

export const getLoading = (state: RootState) => state.sessionReducer.loading;
