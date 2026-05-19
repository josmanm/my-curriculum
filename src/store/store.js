import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './session/sessionSlice';

const store = configureStore({
  reducer: {
    session: sessionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
