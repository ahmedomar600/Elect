import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
const initialState = {
  records: [],
  carts: [],
  loading: false,
  error: null,
  record: null,
  cartitem: [],
  postcart: [],
  ahmed: [],
  recordPro: null
};

export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://aocca.adaptable.app/api/v1/products`);
      const data = await res.json();
      // console.log(data);
      // console.log("ahmed");
      // console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchProdct = createAsyncThunk(
  "posts/fetchProdct",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(
        `https://aocca.adaptable.app/api/v1/products/${id}`
      );
      const data = await res.json();
      console.log("one produect", data);
      // console.log("ahmed");

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const token = localStorage.getItem("userToken");

export const fetchCartItems = createAsyncThunk(
  "cart/fetchCartItems",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`https://aocca.adaptable.app/api/v1/cart`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const data = await res.json();
      // console.log(data);
      // console.log("ahmed");
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const postcart = createAsyncThunk(
  "cart/postcart",
  async (_id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const token = localStorage.getItem("userToken");
      console.log("User Token:", token);
      console.log("Product ID to send:", _id);
      const res = await axios.post(
        `https://aocca.adaptable.app/api/v1/cart`,
        { productId: _id, color: "red" },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      console.log(productId);
      console.log("from postcart", res.data);
      return res.data;
    } catch (error) {
      console.log(productId);

      console.log("حدث خطأ: ", error);
      return rejectWithValue(error.message);
    }
  }
);
export const removeItemFromCart = createAsyncThunk(
  "cart/removeItemFromCart",
  async (_id, thunkAPI) => {
    const { rejectWithValue, getState } = thunkAPI;
    try {
      console.log(_id);
      const currentState = getState();
      const res = await axios.delete(
        `https://aocca.adaptable.app/api/v1/cart/${_id}`,

        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      return res.data;
    } catch (error) {
      console.log("حدث خطأ: ", error);
      return rejectWithValue(error.message);
    }
  }
);
const PostSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartitem.push(action.payload);
    },
    delToCart: (state, action) => {
      console.log(action.payload);
      state.carts = state.carts?.filter(
        (item) => item.data._id !== action.payload
      );
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.loading = false;
        state.record = action.payload;
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get cart item
      .addCase(fetchCartItems.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // get one product
      .addCase(fetchProdct.pending, (state, action) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProdct.fulfilled, (state, action) => {
        state.loading = false;
        state.recordPro = action.payload;
      })
      .addCase(fetchProdct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postcart.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        console.log("pend");
      })
      .addCase(postcart.fulfilled, (state, action) => {
        state.loading = false;
        state.postcart = action.payload;
        console.log(action.payload);
        console.log("send");
      })
      .addCase(postcart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeItemFromCart.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        console.log("pend");
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.loading = false;
        // state.ahmed = action.payload
        state.carts = action.payload
        console.log("deldone",action.payload);
        console.log("afterdelcarts",state.carts);
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("error", action.payload);
      });
  }
});

export const { addToCart, delToCart } = PostSlice.actions;
export default PostSlice.reducer;
