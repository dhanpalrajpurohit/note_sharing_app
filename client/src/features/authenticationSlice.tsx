import { createAsyncThunk } from '@reduxjs/toolkit';

import { axiosInstance } from '../Axios';
import {userLoginInterface} from '../types/index';

export const getTokenAPI = createAsyncThunk("getTokenAPI", async (data: userLoginInterface, thunkAPI) => {
  try{
    const response = await axiosInstance({
      url: "signin/",
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      data: data,
  });
  return response.data;
  }
  catch(error){
      return thunkAPI.rejectWithValue(error.response.data);
  }    
});