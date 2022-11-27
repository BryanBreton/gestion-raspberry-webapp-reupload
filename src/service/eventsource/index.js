import Handlers from './handlers'
import { isEmpty } from 'lodash'

const baseUrl = process.env.VUE_APP_URL_API_RASPBERRY

let eventSource

export const startEventSource = () => {
  if (isEmpty(eventSource) || eventSource.readyState === 2) {
    eventSource = new EventSource(`${baseUrl}/treatments`)
    Handlers.map(handler => {
      eventSource.addEventListener(handler.eventType, event => {
        handler.handle(event)
      })
    })
  }
}

export const endEventSource = () => {
  eventSource.close()
}
