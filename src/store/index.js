import Vue from 'vue'
import Vuex from 'vuex'
import CommonStore from '@/store/modules/common/common.modules'
import ApplicationStore from '@/store/modules/application/application.modules'
import RaspberriesStore from '@/store/modules/raspberry/raspberry.modules'

Vue.use(Vuex)

export default new Vuex.Store({
  // false only in production -> better perf
  strict: process.env.NODE_ENV !== 'production',
  modules: { CommonStore, ApplicationStore, RaspberriesStore }
})
