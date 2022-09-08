import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

import shopReducer from "./shop/shopSlice";

const persistConfig = {
  key: "root",
  storage,
};

const shop = persistReducer(persistConfig, shopReducer);

export const store = configureStore({
  reducer: shop,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);
