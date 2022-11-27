import { BusinessException } from '@u-iris/iris-common'
import { securityManager } from '@/security/securityManager'

const HttpMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE'
}

const initHttp = async (method, body) => {
  const accessToken = await securityManager.getAccessToken()
  const headers = new Headers()
  headers.append('Content-Type', 'application/json')
  headers.append('Authorization', `Bearer ${accessToken}`)
  return {
    headers,
    method,
    body: JSON.stringify(body),
    mode: 'cors',
    cache: 'default'
  }
}

const addParamsToUrl = (url, params) => {
  const paramsToAdd = Object.keys(params).reduce((accumulator, key, index) => {
    return index > 0 ? (accumulator += '&' + key + '=' + params[key]) : (accumulator += key + '=' + params[key])
  }, '?')

  return url + paramsToAdd
}

/**
 * Request
 * @param url to call <String>
 * @param methodHttp HttpVerb (GET, POST, PUT, DELETE) <HttpMethod>
 * @param body (optional)
 * @returns {Promise<*>}
 */
async function request(url, methodHttp, body) {
  let response

  try {
    response = await fetch(url, await initHttp(methodHttp, body))
    if (!response.ok) {
      throw new BusinessException(await response.json())
    }
    return response
  } catch (e) {
    throw new BusinessException(e.errors.errors || e.errors || e.erreurs || e)
  }
}

/**
 * Request Service
 *  Service for http request
 * @type {{get(*=): Promise<*>}}
 */
const RequestService = {
  get(url) {
    return request(url, HttpMethod.GET)
  },
  post(url, data) {
    return request(url, HttpMethod.POST, data)
  },
  put(url, data) {
    return request(url, HttpMethod.PUT, data)
  },
  delete(url) {
    return request(url, HttpMethod.DELETE)
  },
  addParamsToUrl
}

export default RequestService
