import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../Axios';
import { userLoginInterface } from '../types/index';

export const getNotes = async (authToken) => {
    const response = await axiosInstance({
        url: "notes/",
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${authToken}`
        }
    }).then(
        (response) => {
            if (response.status === 200) {
                return response.json()
            }
        }
    );
    return response.data;
};