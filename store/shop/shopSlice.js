import { createSlice } from "@reduxjs/toolkit";

import { getCategories, getProducts, checkout } from "./shopThunk";

const initialState = {
  products: [],
  categories: [],
  wishlist: [],
  cart: [],
  product: {},
  cartItem: {},
  computedCart: {},
  isLoading: false,
};

export const shopSlice = createSlice({
  name: "shop",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      if (!state.cart.length) {
        state.cart.push(payload);
      } else {
        const cart = JSON.parse(JSON.stringify(state.cart));
        const index = state.cart.findIndex(
          (item) => item.product === payload.product
        );

        if (index !== -1) {
          // updating an existing item
          const productIndex = state.products.findIndex(
            (item) => item.id === payload.product
          );

          const productQty = state.products[productIndex]?.quantity;

          state.cart[index].quantity =
            payload.quantity < productQty ? payload.quantity : productQty;
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
    removeCartItem: (state, { payload }) => {
      const cart = JSON.parse(JSON.stringify(state.cart));
      state.cart = cart.filter((item) => item.product !== +payload);
    },
  },
  extraReducers: function (builder) {
    // cart checkout
    builder.addCase(checkout.fulfilled, (state, action) => {
      state.isLoading = false;
      console.log(action);
    });

    builder.addCase(checkout.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(checkout.rejected, (state, action) => {
      console.log(action);
    });

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

export const {
  addCart,
  emptyCart,
  getCart,
  getCartItem,
  getProduct,
  removeCartItem,
} = shopSlice.actions;

export default shopSlice.reducer;
