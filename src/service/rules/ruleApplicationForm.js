import Joi from '@hapi/joi'
import check from '@/service/rules'
import $i18n from '@/plugins/i18n'

const MAX_URL_LENGTH = 1024
const MAX_NAME_LENGTH = 250
const MAX_VERSION_LENGTH = 15

export default {
  name: [
    v => {
      return $i18n.t(
        check(
          v,
          Joi.string()
            .max(MAX_NAME_LENGTH)
            .required()
        ),
        { valueMax: MAX_NAME_LENGTH }
      )
    }
  ],
  url: [
    v => {
      return $i18n.t(
        check(
          v,
          Joi.string()
            .uri()
            .max(MAX_URL_LENGTH)
            .required()
        ),
        { valueMax: MAX_URL_LENGTH }
      )
    }
  ],
  version: [
    v => {
      return $i18n.t(
        check(
          v,
          Joi.string()
            .regex(
              /^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(-(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(\.(0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*)?(\+[0-9a-zA-Z-]+(\.[0-9a-zA-Z-]+)*)?$/
            )
            .max(MAX_VERSION_LENGTH)
            .allow(null)
            .allow('')
        ),
        { valueMax: MAX_VERSION_LENGTH, example: '1.0.1-SNAPSHOT, 1.0.1, 15.0.2, 17.2.6' }
      )
    }
  ]
}
