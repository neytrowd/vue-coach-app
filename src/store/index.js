import { createStore } from 'vuex'

import coaches from './modules/coaches'

const store = createStore({
  modules: {
    coaches
  },
  state() {
    return {
      uerId: 'c3'
    }
  },
  getters: {
    userId(state) {
      return state.uerId
    }
  }
})

export default store
