import Joi from '@hapi/joi'

export default function(value, joiSchema) {
  try {
    Joi.attempt(value, joiSchema)
    return true
  } catch (error) {
    return `validation.${error.details[0].type}`
  }
}
