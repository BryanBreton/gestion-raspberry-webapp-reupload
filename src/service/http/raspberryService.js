import { isNull, isEmpty } from 'lodash'
import RequestService from '@/service/http/requestService'

const baseUrl = process.env.VUE_APP_URL_API_RASPBERRY

const RaspberryHttpService = {
  /**
   * Get all Raspberries
   * @returns {Promise<Response>}
   */
  async findRaspberries(filters, page = 0, size = 20, sort) {
    const param = {
      page: page,
      size: size
    }
    if (!isNull(sort)) {
      param.sort = sort
    }
    const { location, hostname, applicationId, ccuMagasin } = filters
    if (!isNull(location) && !isEmpty(location)) {
      param.location = `${location}`
    }
    if (!isNull(hostname) && !isEmpty(hostname)) {
      param.hostname = `${hostname}`
    }
    if (!isNull(applicationId) && !isEmpty(applicationId)) {
      param.applicationId = `${applicationId}`
    }
    if (!isNull(ccuMagasin) && ccuMagasin !== '' && ccuMagasin !== undefined) {
      param.ccuMagasin = `${ccuMagasin}`
    }
    const url = RequestService.addParamsToUrl(`${baseUrl}/raspberries`, param)
    return RequestService.get(url)
  },
  /**
   * Get raspberry
   * @param {String} raspberryId
   * @returns {Promise<Response>}
   */
  async getRaspberry(raspberryId) {
    return (await RequestService.get(`${baseUrl}/raspberries/${raspberryId}`)).json()
  },
  /**
   * Add raspberry to application
   * @param {string} applicationId
   * @param {object} data
   * @returns {Promise<Response>}
   */
  async addRaspberry(applicationId, data) {
    return (await RequestService.post(`${baseUrl}/application/${applicationId}/raspberries`, data)).json()
  },
  /**
   * Delete raspberry
   * @param {String} raspberryId
   * @returns {Promise<Response>}
   */
  async removeRaspberry(raspberryId) {
    return await RequestService.delete(`${baseUrl}/raspberries/${raspberryId}`)
  },

  /**
   * Connect sse treatments
   * @returns {EventSource}
   */
  sseTreatments() {
    return new EventSource(`${baseUrl}/treatments`)
  }
}

export default RaspberryHttpService
