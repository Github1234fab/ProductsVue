
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      searchItems: ''
    }
  },
  mutations: {
    setSearchItems(state, value) {
      state.searchItems = value
    }
  },
  getters: {
    getSearchItems(state) {
      return state.searchItems
    }
  }
})

export default store