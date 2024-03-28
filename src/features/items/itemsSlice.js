/* itemsSlice.js
 * David D'Alessandro
 * March 26, 2024
 * A collection of reducer logic and actions for the items feature of the app
 */

import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axiosInstance from "../../api/axiosInstance";

const itemsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.important - a.important,
});

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
      important: 0,
      category: "general",
      subtasks: [],
    };
    const response = await axiosInstance.post("todos", newItem);
    return response.data;
  }
);

export const updateItem = createAsyncThunk(
  "items/updateItem",
  async (payload) => {
    const { id } = payload;
    const newPayload = {
      id: payload.id,
      title: payload.title,
      completed: payload.completed,
      important: payload.important,
      category: payload.category,
      subtasks: payload.subtasks ? payload.subtasks : [],
    };
    const response = await axiosInstance.put(`todos/${id}`, newPayload);

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
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        const { id } = action.payload;
        itemsAdapter.updateOne(state, {
          id: id,
          changes: action.payload,
        });
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
