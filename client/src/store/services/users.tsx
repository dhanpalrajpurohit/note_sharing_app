import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../../Axios';

export const getTokenAPI = createAsyncThunk("getTokenAPI", async (data, thunkAPI) => {
    const response = await axiosInstance({
        url: "get_token/",
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        data: data,
    });
    const res_data = await response.data;
    return res_data;
});