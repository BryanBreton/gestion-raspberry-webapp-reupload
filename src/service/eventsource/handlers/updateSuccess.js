import store from '@/store'

const updateSuccess = {
  eventType: 'updateSuccess',
  handle: event => {
    const dataUpdateSuccess = JSON.parse(event.data)
    store.dispatch('RaspberriesStore/setRaspberriesFullListWhenEventSSE', dataUpdateSuccess)
    const snackbar = {
      show: true,
      color: 'success',
      text: 'update.raspberry.success',
      info: dataUpdateSuccess
    }
    store.dispatch('RaspberriesStore/setSnackBarDataTable', snackbar)
  }
}

export default updateSuccess
