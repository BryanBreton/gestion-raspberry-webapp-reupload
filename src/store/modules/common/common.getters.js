import functions from '@/service/functions'

const getters = {
  isPreparationRaspberry(state) {
    return state.userFunctions.includes(functions.PREPARATION_RASPBERRY)
  },
  isAdminRaspberry(state) {
    return state.userFunctions.includes(functions.ADMIN_RASPBERRY)
  },
  isAdminApplication(state) {
    return state.userFunctions.includes(functions.ADMIN_APPLICATION)
  }
}

export default getters
