import { createSlice } from "@reduxjs/toolkit";
import {  addNewProduct, getProductByID, getProductCategories, getProductList } from "./productActions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    categories: [],
    loading: false,
    error: null,
    query: null,
    add: {
      loading: false,
      success: false 
    },
  },
  reducers: {
    setLimit: (state, action) => {
      state.query = {...state.query, limit: action.payload }
    },
    setSort: (state, action) => {
      state.query = {...state.query, sort: action.payload }
    },
    setFilters: (state, action) => {
      state.query = {...state.query, filters: action.payload }
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.add.success= false
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
      })
      .addCase(getProductCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getProductCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addNewProduct.pending, (state) => {
        state.add.loading = true;
        state.error = null;
      })
      .addCase(addNewProduct.fulfilled, (state) => {
        state.add.loading = false;
        state.add.success = true;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.add.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLimit, setSort , setFilters} = productSlice.actions;

export default productSlice.reducer;
