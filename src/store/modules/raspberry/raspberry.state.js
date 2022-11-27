const state = {
  raspberriesFullList: [],
  raspberryCurrent: {},
  displayForm: false,
  listApplications: [],
  loadingAutocomplete: false,
  loadingDataTable: false,
  searchLocation: null,
  sort: null,
  size: 10,
  totalElement: 0,
  snackbarDataTable: {
    show: false,
    color: 'success',
    text: 'update.raspberry.success',
    info: {}
  }
}

export default state
