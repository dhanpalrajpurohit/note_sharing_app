import { configureStore } from '@reduxjs/toolkit';

import {authSlice} from '../features/authenticationSlice';

export const store = configureStore({
  reducer: {
    user: authSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch