import store from '@/store'

const updateProcessing = {
  eventType: 'updateProcessing',
  handle: event => {
    const dataUpdateProcessing = JSON.parse(event.data)
    store.dispatch('RaspberriesStore/setRaspberriesFullListWhenEventSSE', dataUpdateProcessing)
  }
}

export default updateProcessing
