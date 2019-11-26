import vue from 'vue'

const mutations = {
  SET_APP_NAME (state, params) {
    state.state.appName = params
  },
  SET_APP_VERSION (state) {
    vue.set(state.state, 'appVersion', 'v2.0')
  },
  SET_STATE_VALUE (state, params) {
    state.state.stateValue = params
  }
}

export default mutations
