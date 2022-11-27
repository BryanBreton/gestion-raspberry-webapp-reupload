import actions from '@/store/modules/common/common.actions'
import getters from '@/store/modules/common/common.getters'
import mutations from '@/store/modules/common/common.mutations'
import state from '@/store/modules/common/common.state'

const CommonStore = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

export default CommonStore
