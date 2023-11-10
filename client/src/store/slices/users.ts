import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUserAPI, getProfileAPI, logoutAPI } from './../services/authentication';


export interface UserState {
    msg: string | null
    data: string | null
    token: string | null
    isAuthenticated: boolean,
    user: string | null
};

const initialState: UserState = {
    user: null,
    msg: null,
    data: null,
    token: null,
    isAuthenticated: false
}

const getUserSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setTokenAndUser: (state, action: PayloadAction<{ token: string; user: any }>) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
            state.isAuthenticated = true;
        }
    }
})

export const userService = getUserSlice.actions;