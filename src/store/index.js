import { createStore } from 'vuex'

import coaches from './modules/coaches'
import requests from './modules/requests'

const store = createStore({
  modules: {
    coaches,
    requests
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
