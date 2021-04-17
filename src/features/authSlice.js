import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    empId: "",
    role: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.empId = action.payload;
    },
    setAuthentication: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setRole: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const LoginUser = (empId, password) => (dispatch) => {
  axios
    .post("https://emplo-eye.herokuapp.com/login", {
      empId: empId,
      password: password,
    })
    .then((result) => {
      if (result.data.auth) {
        dispatch(setUser(result.data.result.empId));
        dispatch(setAuthentication(true));
        dispatch(setRole(result.data.result.role));
        sessionStorage.setItem("auth", true);
      } else {
        alert("Wrong Username or password");
      }
    });
};

export const Logout = () => (dispatch) => {
  dispatch(setAuthentication(false));
};

export const { setUser, setRole, setAuthentication } = authSlice.actions;

export const isAuthenticated = (state) => state.auth.isAuthenticated;
export const empId = (state) => state.auth.empId;
export const role = (state) => state.auth.role;

export default authSlice.reducer;
