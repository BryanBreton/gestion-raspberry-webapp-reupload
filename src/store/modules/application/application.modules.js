import actions from '@/store/modules/application/application.actions'
import getters from '@/store/modules/application/application.getters'
import mutations from '@/store/modules/application/application.mutations'
import state from '@/store/modules/application/application.state'

const ApplicationsStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default ApplicationsStore
