import { createSlice } from "@reduxjs/toolkit";

import { getCategories, getProducts } from "./shopThunk";

const initialState = {
  products: [],
  categories: [],
  wishlist: [],
  cart: [],
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    // products
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });

    builder.addCase(getProducts.rejected, (state, action) => {
      console.log(action);
    });

    // categories
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });

    builder.addCase(getCategories.rejected, (state, action) => {
      console.log(action);
    });
  },
});

// export const {  } = shopSlice.actions;

export default shopSlice.reducer;
