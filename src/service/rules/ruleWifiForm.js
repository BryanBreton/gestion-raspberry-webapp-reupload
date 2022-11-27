import Joi from '@hapi/joi'
import check from '@/service/rules'
import $i18n from '@/plugins/i18n'

const MAX_URL_LENGTH = 100
const MAX_NAME_LENGTH = 250

export default {
  psk: [
    v => {
      return $i18n.t(check(v, Joi.string().required()), { valueMax: MAX_NAME_LENGTH })
    }
  ],
  ssid: [
    v => {
      return $i18n.t(
        check(
          v,
          Joi.string()
            .max(MAX_URL_LENGTH)
            .required()
        ),
        { valueMax: MAX_URL_LENGTH }
      )
    }
  ]
}
