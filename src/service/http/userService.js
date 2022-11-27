import RequestService from '@/service/http/requestService'
import { isEmpty } from 'lodash'

const baseUrl = process.env.VUE_APP_URL_API_REF_UTILISATEUR

/**
 * GroupHttpService
 * Http calls for Group.
 *
 * @type {{getGroups: (function(): Promise<Response>)}}
 */
const UserHttpService = {
  /**
   * Get Groups
   * @returns {Promise<Response>}
   */
  async getUserFunctions(codeApplication) {
    let url = `${baseUrl}/utilisateurConnecte/fonctions`
    if (!isEmpty(codeApplication)) {
      url += `?codeApplication=${codeApplication}`
    }

    return (await RequestService.get(url)).json()
  },

  async getUserConnecte() {
    const url = `${baseUrl}/utilisateurConnecte`
    return (await RequestService.get(url)).json()
  }
}

export default UserHttpService
