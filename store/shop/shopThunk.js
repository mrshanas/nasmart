import { createAsyncThunk } from "@reduxjs/toolkit";

import API from "@/utils/axios";

export const getProducts = createAsyncThunk("shop/getProducts", async () => {
  const res = await API.get("/products/");
  return res.data;
});

export const getCategories = createAsyncThunk(
  "shop/getCategories",
  async () => {
    return await API.get("/categories/").then((res) => res.data);
  }
);

export const checkout = createAsyncThunk("shop/cartCheckout", async (data) => {
  return await API.post("/cart/checkout/", data);
});
