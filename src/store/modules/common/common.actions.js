import UserHttpService from '@/service/http/userService'
import { securityManager } from '@/security/securityManager'

const actions = {
  // Manage errors
  setErrors({ commit }, error) {
    commit('setErrors', error.errors.erreurs || error.errors || error.erreurs || error)
  },
  resetErrors({ commit }) {
    commit('setErrors', [])
  },
  async getUserFunction({ commit }) {
    const userFunctions = await UserHttpService.getUserFunctions(process.env.VUE_APP_FUNCTIONAL_DOMAIN)
    commit(
      'setUserFunctions',
      userFunctions.map(eachFunction => eachFunction.code)
    )
  },
  async getUser({ commit }) {
    commit('setUtilisateurConnecte', await UserHttpService.getUserConnecte())
  },
  async signOut() {
    await securityManager.signOut()
  },
  async initialization({ commit, dispatch }) {
    if (!(await securityManager.getUser())) {
      await securityManager.signIn()
    }
    await dispatch('getUserFunction')
    await dispatch('getUser')
    commit('setIsAuth', true)
  }
}

export default actions
