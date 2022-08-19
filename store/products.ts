const state = () => ({
  products: [],
  isLoading: false,
})

const mutations = {
  FETCH_PRODUCTS(state: any) {
    state.isLoading = true
  },
  FETCH_PRODUCTS_SUCCESS(state: any, payload: any) {
    state.isLoading = false
    state.products = payload
  },
  FETCH_PRODUCTS_FAIL(state: any) {
    state.isLoading = false
  },
}

const actions = {
  async _fetchProducts({ commit }: any) {
    commit('FETCH_PRODUCTS')
    // @ts-ignore
    await this.$api
      .$get('/products/')
      .then((res: any) => {
        commit('FETCH_PRODUCTS_SUCCESS', res)
      })
      .catch((err: Error) => {
        console.log(err)

        commit('FETCH_PRODUCTS_FAIL')
      })
  },
}

const getters = {
  getProducts(state: any) {
    return state.products
  },
}

export default {
  actions,
  getters,
  mutations,
  state,
}
