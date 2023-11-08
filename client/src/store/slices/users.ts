import { createSlice} from '@reduxjs/toolkit';
import {getUserAPI, getProfileAPI, logoutAPI} from './../services/authentication';


export interface UserState {
    name: string
    msg: string,
    data: string,
    token: string
};

const initialState: UserState = {
    name: "",
    msg: "",
    data: "",
    token: ""
}

export const getUserSlice = createSlice({
    name: "user",
    initialState
    
})

export default getUserSlice;