interface cartItem {
  product: number
  quantity: number
}

export const state = () => ({
  cart: [],
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
}

export const actions = {
  // async _checkout({commit}){}
}

export const getters = {
  getCart(state: any) {
    return state.cart
  },
}
