import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const collectionSlice = createSlice({
  name: "collection",

  initialState,

  reducers: {
    addToCollection: (state, action) => {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (!exists) {
        state.items.push(action.payload);
      }
    },

    removeFromCollection: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );
    },

    clearCollection: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCollection,
  removeFromCollection,
  clearCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;