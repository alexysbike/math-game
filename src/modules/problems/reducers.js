import { regularSetReducer } from '../../utils/reducerHelpers';

export const initialState = {
  resolved: 0,
};

export const reducers = {
  setResolved: regularSetReducer('resolved'),
};
