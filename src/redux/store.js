import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./features/searchSlice";
import collectionReducer from "./features/collectionSlice";

import { mediaApi } from "./services/mediaApi";

export const store = configureStore({
  reducer: {
    search: searchReducer,

    collection: collectionReducer,

    [mediaApi.reducerPath]: mediaApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(mediaApi.middleware),

  devTools: import.meta.env.DEV,
});