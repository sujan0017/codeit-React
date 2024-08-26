import { createSlice } from "@reduxjs/toolkit";
import { getProductByID, getProductList } from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getProductByID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductByID.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [action.payload];
      })
      .addCase(getProductByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default productSlice.reducer;
