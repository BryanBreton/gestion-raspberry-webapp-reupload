import actions from '@/store/modules/raspberry/raspberry.actions'
import getters from '@/store/modules/raspberry/raspberry.getters'
import mutations from '@/store/modules/raspberry/raspberry.mutations'
import state from '@/store/modules/raspberry/raspberry.state'

const RaspberriesStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default RaspberriesStore
