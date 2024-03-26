/* store.js
 * David D'Alessandro
 * March 26, 2024
 * Centralized container to hold the state of the entire app
 */

import { configureStore } from "@reduxjs/toolkit";
import itemsReducer from "../features/items/itemsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
