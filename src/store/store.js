import { configureStore, combineReducers } from '@reduxjs/toolkit';
import CreatorsReducer from './CreatorsReducer';

const rootReducer = combineReducers({
  CreatorsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
