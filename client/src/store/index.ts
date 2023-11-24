import { configureStore } from '@reduxjs/toolkit';

import {userService} from "./slices/users";

export const store = configureStore({
  reducer: {
    user: userService,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch