/* itemsSlice.js
 * David D'Alessandro
 * March 26, 2024
 * A collection of reducer logic and actions for the posts feature of the app
 */

import {
  createSlice,
  createAsyncThunk,
  createSelector,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const itemsAdapter = createEntityAdapter();

const initialState = itemsAdapter.getInitialState({
  status: "idle",
});

//CRUD with asyncThunks
export const fetchItems = createAsyncThunk("items/fetchItems", async () => {
  const response = await axiosInstance.get("todos");
  return response.data;
});

export const addNewItem = createAsyncThunk(
  "items/addNewItem",
  async (newItemDetails) => {
    const { id, title } = newItemDetails;
    const newItem = {
      id: String(id),
      title: title,
      completed: false,
      category: "general",
    };
    const response = await axiosInstance.post("todos", newItem);
    return response.data;
  }
);

export const deleteItem = createAsyncThunk(
  "items/deleteItem",
  async (itemId) => {
    const response = await axiosInstance.delete(`todos/${itemId}`);
    return response.data;
  }
);

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        itemsAdapter.addMany(state, action.payload);
      })
      .addCase(addNewItem.fulfilled, (state, action) => {
        itemsAdapter.addOne(state, action.payload);
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        itemsAdapter.removeOne(state, action.payload.id);
      });
  },
});

export const { addItem, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;

export const {
  selectAll: selectAllItems,
  selectById: selectItemById,
  selectIds: selectItemIds,
  selectTotal: selectItemCount,
} = itemsAdapter.getSelectors((state) => state.items);
