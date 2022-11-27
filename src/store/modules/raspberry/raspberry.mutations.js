const mutations = {
  setRaspberriesFullList(state, raspberriesFullList) {
    state.raspberriesFullList = raspberriesFullList
  },
  setRaspberryList(state, raspberryList){
    state.raspberriesFullList = raspberryList
  },
  setDisplayForm(state) {
    state.displayForm = !state.displayForm
  },
  setRaspberryApplicationsList(state, listApplications) {
    state.listApplications = listApplications
  },
  setRaspberrrCurrentApplicationId(state, applicationId) {
    state.raspberryCurrent.applicationId = applicationId
  },
  setLoadingAutocomplete(state) {
    state.loadingAutocomplete = !state.loadingAutocomplete
  },
  setLoadingDataTable(state, loadingDataTable) {
    state.loadingDataTable = loadingDataTable
  },
  setRaspberrySort(state, sort) {
    state.sort = sort
  },
  setRaspberrySize(state, size) {
    state.size = size
  },
  setRaspberryTotalElement(state, totalElement) {
    state.totalElement = Number(totalElement)
  },
  setSnackbarDataTable(state, snackbarDataTable) {
    state.snackbarDataTable = snackbarDataTable
  }
}

export default mutations
