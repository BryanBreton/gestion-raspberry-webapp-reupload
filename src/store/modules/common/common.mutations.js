const mutations = {
  setErrors(state, errors) {
    state.errors = errors
  },
  setUserFunctions(state, userFunctions) {
    state.userFunctions = userFunctions
  },
  setUtilisateurConnecte(state, utilisateurConnecte) {
    state.utilisateurConnecte = utilisateurConnecte
  },
  setIsAuth(state, isAuth) {
    state.isAuth = isAuth
  }
}

export default mutations
