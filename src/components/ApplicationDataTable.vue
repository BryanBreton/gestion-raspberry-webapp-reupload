<template>
  <v-container grid-list-md6 text-xs-center>
    <v-dialog v-model="deleteDialog" lazy max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">{{ $t('header.application.confirmDelete') }}</span>
        </v-card-title>
        <v-card-text>
          <span>{{ $t('text.action.irreversible') }}</span>
        </v-card-text>
        <v-card-actions>
          <!-- eslint-disable-next-line -->
          <v-btn
            :color="colorButton"
            flat
            @click="removeApplication"
            class="confirm-button"
          >{{ $t('label.confirm.button') }}</v-btn>
          <!-- eslint-disable-next-line -->
          <v-btn
            :color="colorButton"
            flat
            @click="deleteDialog = false"
            class="confirm-button"
          >{{ $t('label.close.button') }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-data-table
      :items="applicationsFullList"
      :total-items="totalElement"
      :pagination.sync="pagination"
      :headers="headers"
      :loading="loadingDataTable"
      :rows-per-page-text="$t('label.rowPerPage.dataTable')"
      :rows-per-page-items="rowsPerPage"
      class="elevation-1 table"
    >
      <template v-slot:items="props">
        <td class="text-xs-center">{{ props.item.name }}</td>
        <td class="text-xs-center">{{ props.item.url }}</td>
        <td class="text-xs-center">{{ props.item.version }}</td>

        <td class="text-xs-center">{{ getRotation(props.item.rotation) }}</td>
        <td class="justify-center layout px-0">
          <v-btn icon class="mx-0">
            <v-icon color="teal" @click="updateApplication(props.item)">edit</v-icon>
          </v-btn>

          <v-btn
            icon
            class="mx-0"
            @click="deleteItem(props.item.applicationId)"
            :disabled="props.item.Raspberries[0] && props.item.Raspberries[0].RaspberriesCount > 0 ? true : false"
          >
            <v-icon :color="props.item.Raspberries[0] && props.item.Raspberries[0].RaspberriesCount > 0 ? 'grey' : 'pink'">delete</v-icon>
          </v-btn>
        </td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import store from '@/store'
import $i18n from '@/plugins/i18n'
import { cloneDeep } from 'lodash'

export default {
  name: 'ApplicationDataTable',
  created() {
    Promise.all([store.dispatch('ApplicationStore/getApplications')])
  },
  data() {
    return {
      headers: [
        { text: 'Nom', value: 'name', sortable: true },
        { text: 'URL', value: 'url', sortable: true },
        { text: 'Version', value: 'version', sortable: true },
        { text: 'rotation', value: 'rotation', sortable: true }
      ],
      deleteDialog: false,
      deleteItemId: 0,
      pagination: {},
      colorButton: '#007d8f',
      rowsPerPage: [20, 30, 40, 50]
    }
  },
  watch: {
    pagination: {
      handler() {
        store.dispatch('ApplicationStore/setApplicationSize', this.pagination.rowsPerPage)
        store.dispatch('ApplicationStore/setApplicationSort', { attributeSort: this.pagination.sortBy, descending: this.pagination.descending })
        store.dispatch('ApplicationStore/getApplications', this.pagination.page - 1)
      }
    }
  },
  computed: {
    ...mapState('ApplicationStore', ['applicationsFullList', 'totalElement', 'loadingDataTable'])
  },
  methods: {
    ...mapActions('ApplicationStore', ['setTitleForm', 'setDisplayForm', 'setApplicationCurrent', 'setApplicationCurrentPage', 'setApplicationSort']),
    updateApplication: async function(application) {
      const copyApplication = cloneDeep(application)
      store.dispatch('ApplicationStore/setApplicationCurrent', copyApplication)
      store.dispatch('ApplicationStore/setTitleForm', $i18n.t('label.application.update'))
      store.dispatch('ApplicationStore/setDisplayForm')
    },
    deleteItem: function(itemId) {
      this.deleteItemId = itemId
      this.deleteDialog = true
    },
    removeApplication: async function() {
      await store.dispatch('ApplicationStore/deleteApplication', this.deleteItemId)
      this.deleteDialog = false
      await store.dispatch('ApplicationStore/getApplications', this.pagination.page - 1)
    },
    getRotation(value) {
      switch (value) {
        case 0:
          return 'Paysage'
        case 1:
          return 'Portrait a Droite'
        case 2:
          return 'Paysage Inversé'
        case 3:
          return 'Portrait a Gauche'
      }
    }
  }
}
</script>
<style scoped>
.table:hover {
  box-shadow: 10px 5px 5px #555555 !important;
}
</style>
