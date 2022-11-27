import store from '@/store'

const updateFail = {
  eventType: 'updateFail',
  handle: event => {
    const dataUpdateFailed = JSON.parse(event.data)
    store.dispatch('RaspberriesStore/setRaspberriesFullListWhenEventSSE', dataUpdateFailed)
    const snackbar = {
      show: true,
      color: 'error',
      text: 'update.raspberry.fail',
      info: dataUpdateFailed
    }
    store.dispatch('RaspberriesStore/setSnackbarDataTable', snackbar)
  }
}

export default updateFail
