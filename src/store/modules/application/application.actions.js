import ApplicationHttpService from '@/service/http/applicationService'
import { isNull } from 'lodash'

const actions = {
  async getApplications({ commit, dispatch, state }, page = 0) {
    try {
      commit('setLoadingDataTable', true)
      const response = await ApplicationHttpService.findApplications(page, state.sort, state.size)
      commit('setApplicationTotalElement', response.headers.get('x-total-element'))
      commit('setApplicationsFullList', await response.json())
    } catch (error) {
      dispatch('CommonStore/setErrors', error, { root: true })
    } finally {
      commit('setLoadingDataTable', false)
    }
  },
  async createApplications({ dispatch }, application) {
    try {
      await ApplicationHttpService.addApplications(application)
      dispatch('getApplications', 0)
      dispatch('setDisplayForm', { root: true })
    } catch (error) {
      dispatch('CommonStore/setErrors', error, { root: true })
    }
  },
  async updateApplications({ dispatch }, application) {
    try {
      delete application.Raspberries
      await ApplicationHttpService.updateApplications(application.applicationId, application)
      dispatch('getApplications', 0)
      dispatch('setDisplayForm', { root: true })
    } catch (error) {
      dispatch('CommonStore/setErrors', error, { root: true })
    }
  },
  async deleteApplication({ dispatch }, applicationId) {
    try {
      await ApplicationHttpService.removeApplications(applicationId)
    } catch (error) {
      dispatch('CommonStore/setErrors', error, { root: true })
    }
  },
  setApplicationCurrent({ commit }, applicationsCurrent) {
    commit('setApplicationCurrent', applicationsCurrent)
  },
  setDisplayForm({ commit }) {
    commit('setDisplayForm')
  },

  setTitleForm({ commit }, titleForm) {
    commit('setTitleForm', titleForm)
  },
  setApplicationCurrentName({ commit }, applicationsCurrentName) {
    commit('setApplicationCurrentName', applicationsCurrentName)
  },
  setApplicationCurrentUrl({ commit }, applicationsCurrentUrl) {
    commit('setApplicationCurrentUrl', applicationsCurrentUrl)
  },
  setApplicationCurrentVersion({ commit }, applicationsCurrentVersion) {
    commit('setApplicationCurrentVersion', applicationsCurrentVersion)
  },
  setApplicationCurrentRotation({ commit }, applicationsCurrentRotation) {
    commit('setApplicationCurrentRotation', applicationsCurrentRotation)
  },
  setApplicationSort({ commit }, { attributeSort, descending }) {
    if (!isNull(attributeSort)) {
      if (descending) {
        commit('setApplicationSort', `${attributeSort},desc`)
      } else {
        commit('setApplicationSort', `${attributeSort},asc`)
      }
    } else {
      commit('setApplicationSort', null)
    }
  },
  setApplicationSize({ commit }, size) {
    commit('setApplicationSize', size)
  }
}

export default actions
