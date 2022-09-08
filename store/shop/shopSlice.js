import { createSlice } from "@reduxjs/toolkit";

import { getCategories, getProducts } from "./shopThunk";

const initialState = {
  products: [],
  categories: [],
  wishlist: [],
  cart: [],
  product: {},
  cartItem: {},
  computedCart: {},
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      if (!state.cart.length) {
        state.cart.push(payload);
      } else {
        const index = state.cart.findIndex(
          (item) => item.product === payload.product
        );

        if (index !== -1) {
          console.log(payload);
          // updating an existing item
          const productIndex = state.products.findIndex(
            (item) => item.id === payload.product
          );

          // not adding to cart amount exceeding the product quantity

          const limitedAmnt = state.cart[index].quantity + payload.quantity;
          const productQty = state.products[productIndex].quantity;

          if (
            !(state.cart[index].quantity > productQty) &&
            !(limitedAmnt > productQty)
          ) {
            state.cart[index].quantity += payload.quantity;
          }
        } else {
          state.cart.push(payload);
        }
      }
    },
    getCart: (state) => {
      const cart = JSON.parse(JSON.stringify(state.cart));

      const newCart = cart.map((item) => {
        const i = state.products.findIndex(
          (prod) => prod?.id === +item.product
        );
        const product = i !== -1 ? state.products[i] : {};

        item.product = product;
        item.subTotal = +product?.price * +item.quantity;
        return { ...item };
      });

      const totalPrice = newCart.reduce((prev, curr) => {
        prev += curr?.subTotal;
        return prev;
      }, 0);

      state.computedCart = { totalPrice, newCart };
    },
    emptyCart: (state) => {
      state.cart = [];
    },
    getProduct: (state, { payload }) => {
      const i = state.products.findIndex((item) => item.id === +payload);

      state.product = state.products[i];
    },
    getCartItem: (state, { payload }) => {
      const i = state.cart.findIndex((item) => item.product === +payload);

      state.cartItem = state.cart[i] ?? {};
    },
  },
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

export const { addCart, emptyCart, getCart, getCartItem, getProduct } =
  shopSlice.actions;

export default shopSlice.reducer;
