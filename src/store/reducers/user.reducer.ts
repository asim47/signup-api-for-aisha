import { createSlice } from '@reduxjs/toolkit';
import { UserStore } from '../../interfaces';

const initialState: UserStore = {
  isAuth: false,
  customer: null,
  token: null,
};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUserData(state, action) {
      state.customer = action.payload.customer;
      state.token = action.payload.token;
      state.isAuth = true;

      localStorage.setItem("@token", action.payload.token);
    },
    setLogout(state) {
      state.customer = null;
      state.token = null;
      state.isAuth = false;

      localStorage.removeItem("@token");
    }
  },
});

export const {
  setUserData,
  setLogout
} = UserSlice.actions;

export const UserReducer = UserSlice.reducer;
