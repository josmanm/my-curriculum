import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import sesionReducer from './sesion/sesionSlice';

const store = configureStore({
  reducer: {
    sesion: sesionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }).concat(thunk),
});

export default store;