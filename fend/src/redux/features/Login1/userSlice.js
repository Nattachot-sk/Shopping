// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const loginUser = createAsyncThunk('user/login', async (userData) => {
  const response = await axios.post('http://localhost:3307/login', userData);
  return response.data;
});

export const fetchRole = createAsyncThunk('user/fetchRole', async () => {
  const response = await axios.get('http://localhost:3307/admin');
  return response.data.role; 
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    role: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.role = null; 
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(fetchRole.fulfilled, (state, action) => {
        state.role = action.payload;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;