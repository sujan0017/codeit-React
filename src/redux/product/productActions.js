import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getList,
  getById,
  getCategories,
  addProduct,
  deleteProduct,
  editProduct,
  getTotal,
} from "../../api/product";

const getProductList = createAsyncThunk(
  "product/list",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getList(query ?? {});

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getProductByID = createAsyncThunk(
  "product/id",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getById(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getProductCategories = createAsyncThunk(
  "product/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategories();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const addNewProduct = createAsyncThunk(
  "product/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addProduct(data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const deleteProductById = createAsyncThunk(
  "product/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await deleteProduct(id);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
const updateProduct = createAsyncThunk(
  "product/edit",
  async (data, { rejectWithValue }) => {
    try {
      const response = await editProduct(data.id, data);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getRelatedProducts = createAsyncThunk(
  "product/related",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getList(query ?? {});

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getTotalProducts = createAsyncThunk(
  "product/total",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getTotal();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);


export {
  getProductList,
  getProductByID,
  getProductCategories,
  addNewProduct,
  deleteProductById,
  updateProduct,
  getRelatedProducts,
  getTotalProducts
};
