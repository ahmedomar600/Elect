import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        "https://aocca.adaptable.app/api/v1/auth/signup",
        userData
      );
      console.log("نجاح: البيانات المستلمة", res.data);
      return res.data;
    } catch (error) {
      // الاستثناءات الخاصة بالشبكة أو الخطأ العام
      console.log("حدث خطأ: ", error);
      return rejectWithValue("حدث خطأ: " + error.message);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue, getState }) => {
    try {
      const res = await axios.post(
        "https://aocca.adaptable.app/api/v1/auth/login",
        userData
      );
      localStorage.setItem("userToken", res.data.token);
      console.log("نجاح: البيانات المستلمة", res.data);
      // const currentState = getState();

      return res.data;
    } catch (error) {
      // الاستثناءات الخاصة بالشبكة أو الخطأ العام
      console.log("حدث خطأ: ", error);
      return rejectWithValue("حدث خطأ: " + error.message);
    }
  }
);
// api.js
const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

const initialState = {
  loading: false,
  userInfo: [],
  userToken,
  error: null,
  errors: null,
  success: false
};
// Assuming you have obtained a token and stored it in a variable
const token = localStorage.getItem("userToken"); // Replace with your actual token

// // Set the "Authorization" header with the Bearer token
// axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

// // Now, when you make a request using Axios, the "Authorization" header will be automatically included
// axios
//   .get("https://aocca.adaptable.app/api/v1/auth/login")
//   .then((response) => {
//     // Handle the response from the API
//     console.log("Dataaa:", response.data);
//   })
//   .catch((error) => {
//     // Handle errors, if any
//   });

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userToken = localStorage.removeItem("userToken");
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.success = action.payload;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // login user
      .addCase(loginUser.pending, (state, action) => {
        state.loading = true;
        state.errors = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userInfo = action.payload.data;

        state.userToken = action.payload.access_token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.errors = action.payload;
      });
  }
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
