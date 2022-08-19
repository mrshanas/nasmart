const state = () => ({
  categories: [],
  isLoading: false,
  error: '',
})

const mutations = {
  FETCH_CATEGORIES(state: any) {
    state.isLoading = true
  },
  FETCH_CATEGORIES_SUCCESS(state: any, payload: any) {
    state.isLoading = false
    state.categories = payload
  },
  FETCH_CATEGORIES_FAIL(state: any) {
    state.isLoading = false
    state.error = 'Failed to fetch categories!'
  },
}

const actions = {
  async _fetchCategories({ commit }: any) {
    commit('FETCH_CATEGORIES')
    // @ts-ignore
    await this.$api
      .$get('/categories/')
      .then((res: any) => {
        commit('FETCH_CATEGORIES_SUCCESS', res)
      })
      .catch((err: Error) => {
        console.log(err)
        commit('FETCH_CATEGORIES_FAIL')
      })
  },
}

const getters = {
  getCategories(state: any) {
    return state.categories
  },
}

export default {
  actions,
  getters,
  mutations,
  state,
}
