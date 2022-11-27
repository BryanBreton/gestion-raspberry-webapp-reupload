import RequestService from '@/service/http/requestService'
import { isNull } from 'lodash'

const baseUrl = process.env.VUE_APP_URL_API_RASPBERRY

const ApplicationHttpService = {
  /**
   * Get all Applications
   * @returns {Promise<Response>}
   */
  async findApplications(page, sort, size = 20, name = null) {
    const param = {
      page: page,
      size: size
    }
    if (!isNull(sort)) {
      param.sort = sort
    }
    if (!isNull(name)) {
      param.name = `*${name}*`
    }
    const url = RequestService.addParamsToUrl(`${baseUrl}/applications`, param)
    return RequestService.get(url)
  },
  /**
   * Get application
   * @param {String} applicationId
   * @returns {Promise<Response>}
   */
  async getApplication(applicationId) {
    return await (await RequestService.get(`${baseUrl}/applications/${applicationId}`)).json()
  },
  /**
   * Add application
   * @param {object} data
   * @returns {Promise<Response>}
   */
  async addApplications(data) {
    return await (await RequestService.post(`${baseUrl}/applications`, data)).json()
  },
  /**
   * Update application
   * @param {String} applicationId
   * @param {Object} data
   * @returns {Promise<Response>}
   */
  async updateApplications(applicationId, data) {
    return await (await RequestService.put(`${baseUrl}/applications/${applicationId}`, data)).json()
  },
  /**
   * Delete application
   * @param {String} applicationId
   * @returns {Promise<Response>}
   */
  async removeApplications(applicationId) {
    return await RequestService.delete(`${baseUrl}/applications/${applicationId}`)
  }
}

export default ApplicationHttpService
