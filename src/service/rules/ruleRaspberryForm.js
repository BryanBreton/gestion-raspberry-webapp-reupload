import Joi from '@hapi/joi'
import check from '@/service/rules'
import $i18n from '@/plugins/i18n'

const MAX_LOCATION_LENGTH = 30
const MIN_LOCATION_LENGTH = 5

export default {
  location: [
    v => {
      return $i18n.t(
        check(
          v,
          Joi.string()
            .min(MIN_LOCATION_LENGTH)
            .max(MAX_LOCATION_LENGTH)
            .allow(null)
            .allow('')
        ),
        { valueMin: MIN_LOCATION_LENGTH, valueMax: MAX_LOCATION_LENGTH }
      )
    }
  ]
}
