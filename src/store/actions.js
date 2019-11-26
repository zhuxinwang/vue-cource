import { getAppName } from '../api/app'

const actions = {
  // updateAppName ({ commit }) {
  //   getAppName().then(res => {
  //     commit('SET_APP_NAME', res.info.appName)
  //   }).catch(err => {
  //     console.log('错误' + err)
  //   })
  // }
  async updateAppName ({ commit }) {
    try {
      const { info: { appName } } = await getAppName()
      commit('SET_APP_NAME', appName)
    } catch (e) {
      console.log(e)
    }
  }
}

export default actions
