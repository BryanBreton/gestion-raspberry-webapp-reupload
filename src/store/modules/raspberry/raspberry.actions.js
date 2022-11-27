import RaspberryHttpService from '@/service/http/raspberryService'
import ApplicationHttpService from '@/service/http/applicationService'
import { isNull, cloneDeep } from 'lodash'

const actions = {
  async getRaspberries({ commit, dispatch, state }, { filters, page = 0 }) {
    commit('setLoadingDataTable', true)
    try {
      const response = await RaspberryHttpService.findRaspberries(filters, page, state.size, state.sort)
      commit('setRaspberryTotalElement', response.headers.get('x-total-element'))
      commit('setRaspberriesFullList', await response.json())
    } catch (error) {
      dispatch('CommonStore/setErrors', error, { root: true })
    } finally {
      commit('setLoadingDataTable', false)
    }
  },
  setRaspberryList({commit}, raspberryList) {
    commit('setRaspberryList', raspberryList)
  },
  setDisplayForm({ commit }) {
    commit('setDisplayForm')
  },
  setDisplayPopUp({ commit }) {
    commit('setDisplayPopUp')
  },
  setRaspberrrCurrentApplicationId({ commit }, applicationId) {
    commit('setRaspberrrCurrentApplicationId', applicationId)
  },
  async setRaspberryApplicationsList({ commit, dispatch }, searchName) {
    dispatch('setLoadingAutocomplete')
    try {
      const response = await ApplicationHttpService.findApplications(0, 'name,asc', 5, searchName)
      commit('setRaspberryApplicationsList', await response.json())
    } catch (error) {
      dispatch('CommonStore/setErrors', error, { root: true })
    } finally {
      dispatch('setLoadingAutocomplete')
    }
  },
  setLoadingAutocomplete({ commit }) {
    commit('setLoadingAutocomplete')
  },
  setRaspberrySort({ commit }, { attributeSort, descending }) {
    if (!isNull(attributeSort)) {
      if (descending) {
        commit('setRaspberrySort', `${attributeSort},desc`)
      } else {
        commit('setRaspberrySort', `${attributeSort},asc`)
      }
    } else {
      commit('setRaspberrySort', null)
    }
  },
  setRaspberrySize({ commit }, size) {
    commit('setRaspberrySize', size)
  },
  closeSnackBarDataTable({ state, commit }) {
    const snackbar = { ...state.snackbarDataTable, ...{ show: false } }
    commit('setSnackbarDataTable', snackbar)
  },
  setRaspberriesFullListWhenEventSSE({ state, commit }, updateRasp) {
    const copyRaspberriesFullList = cloneDeep(state.raspberriesFullList)
    const raspberries = copyRaspberriesFullList.map(rasp => {
      if (rasp.mac === updateRasp.mac) {
        rasp.processing = updateRasp.processing
      }
      return rasp
    })
    commit('setRaspberriesFullList', raspberries)
  },
  setSnackBarDataTable({ commit }, snackbar) {
    commit('setSnackbarDataTable', snackbar)
  }
}

export default actions
