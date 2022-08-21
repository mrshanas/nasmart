// @ts-nocheck
import { SnackbarProgrammatic as Snackbar } from 'buefy'

interface cartItem {
  product: number
  quantity: number
}

export const state = () => ({
  cart: [],
  isLoading: false,
  isSuccess: false,
  message: '',
  title: '',
})

export const mutations = {
  addToCart(state: any, cartItem: cartItem) {
    if (state.cart.length) {
      const index = state.cart.findIndex(
        (item: cartItem) => item.product === cartItem.product
      )

      if (index !== -1) {
        // updating an existing item
        state.cart[index].quantity += cartItem.quantity
      } else {
        state.cart.push(cartItem)
      }
    } else {
      return state.cart.push(cartItem)
    }
  },
  deleteCartItem(state: any, id: Number) {
    const filteredCart = state.cart.filter(
      (item: cartItem) => item.product !== id
    )
    state.cart = filteredCart
  },
  emptyCart(state: any) {
    state.cart = []
  },
  CART_CHECKOUT(state: any) {
    state.isLoading = true
  },
  CART_CHECKOUT_SUCCESS(state: any) {
    state.isLoading = false
    state.title = 'Thank you for Shopping With Us'
    state.isSuccess = true
    state.message =
      'Your order has been placed the manager will contact you shortly'
    Snackbar.open(state.message)
  },
  CART_CHECKOUT_FAIL(state: any) {
    state.isLoading = false
    state.title = 'Oh Sorry !!'
    state.message = 'There might be a problem please try again'
  },
}

export const actions = {
  async _checkout({ commit }: any, data: any) {
    commit('CART_CHECKOUT')

    await this.$api
      .$post('/cart/checkout/', data)
      .then(() => {
        commit('CART_CHECKOUT_SUCCESS')
        commit('emptyCart')
      })
      .catch((err: Error) => {
        console.log(err)

        commit('CART_CHECKOUT_FAIL')
      })
  },
}

export const getters = {
  getCart(state: any) {
    return state.cart
  },
  // getDialog(state: any) {
  //   return {
  //     title: state.title,
  //     message: state.message,
  //     success: state.isSuccess,
  //   }
  // },
}
