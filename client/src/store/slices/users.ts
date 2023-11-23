import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTokenAPI } from './../services/users';
import {userInterface, userStateInterface} from './../../types/index'


const initialState: userStateInterface = {
    user: null,
    msg: null,
    token: null,
    isAuthenticated: false
}

const getUserSlice = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getTokenAPI.pending, (state) => {
          state.token = null
          state.msg = null
          state.user = null
        })
        builder.addCase(getTokenAPI.fulfilled, (state, action) => {
          state.user = action.payload.user
          state.token = action.payload.token
          state.isAuthenticated = true
        })
        builder.addCase(getTokenAPI.rejected, (state, action) => {
          state.msg = action.payload
          state.user = null
          state.isAuthenticated = false
        })
      }
    })

export const userService = getUserSlice.reducer;