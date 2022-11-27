const mutations = {
  setApplicationsFullList(state, applicationsFullList) {
    state.applicationsFullList = applicationsFullList
  },
  setApplicationCurrent(state, applicationsCurrent) {
    state.applicationsCurrent = applicationsCurrent
  },
  setDisplayForm(state) {
    state.displayForm = !state.displayForm
  },
  setDisplayPopUp(state) {
    state.displayPopUp = !state.displayPopUp
  },
  setTitleForm(state, titleForm) {
    state.titleForm = titleForm
  },
  setApplicationCurrentName(state, applicationsCurrentName) {
    state.applicationsCurrent.name = applicationsCurrentName
  },
  setApplicationCurrentUrl(state, applicationsCurrentUrl) {
    state.applicationsCurrent.url = applicationsCurrentUrl
  },
  setApplicationCurrentVersion(state, applicationsCurrentVersion) {
    state.applicationsCurrent.version = applicationsCurrentVersion
  },
  setApplicationCurrentRotation(state, applicationsCurrentRotation) {
    state.applicationsCurrent.rotation = applicationsCurrentRotation
  },
  setApplicationTotalElement(state, totalElement) {
    state.totalElement = Number(totalElement)
  },
  setApplicationSort(state, sort) {
    state.sort = sort
  },
  setApplicationSize(state, size) {
    state.size = size
  },
  setLoadingDataTable(state, loadingDataTable) {
    state.loadingDataTable = loadingDataTable
  }
}

export default mutations
