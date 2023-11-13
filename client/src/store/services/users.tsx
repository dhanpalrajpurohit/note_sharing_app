import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../Axios';
import {userLoginInterface} from '../../types/index';

export const getTokenAPI = createAsyncThunk("getTokenAPI", async (data: userLoginInterface) => {
    const response = await axiosInstance({
        url: "signin/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
    });
    const res_data = await response.data;
    return res_data;
});