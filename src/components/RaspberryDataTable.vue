<template>
  <v-container grid-list-md6 text-xs-center>
    <div class="formWrapper">
      <div class="formLine">
        <v-autocomplete
          :label="$t('label.raspberry.search.application')"
          :items="raspberriesFullList"
          :item-text="getAppName"
          item-value="applicationId"
          clearable
          @change="changeApplication"
          v-model="appsearch"
        ></v-autocomplete>
        <v-autocomplete
          :label="$t('label.raspberry.search.location')"
          :items="raspberriesFullList"
          item-text="location"
          item-value="location"
          clearable
          @change="changeLocation"
          v-model="locsearch"
        ></v-autocomplete>
      </div>
      <div class="formLine">
        <v-autocomplete
          :label="$t('label.raspberry.search.ccu')"
          :items="raspberriesFullList"
          item-text="ccuMagasin"
          item-value="ccuMagasin"
          clearable
          @change="changeCcuMagasin"
          v-model="ccusearch"
        ></v-autocomplete>
        <v-text-field :label="$t('label.raspberry.search.hostname')" clearable @input="changeHostname()" v-model="hostnamesearch"></v-text-field>
      </div>
    </div>
    <v-data-table
      :items="raspberriesFullList"
      :total-items="totalElement"
      :pagination.sync="pagination"
      :headers="headers"
      :loading="loadingDataTable"
      :rows-per-page-text="$t('label.rowPerPage.dataTable')"
      :rows-per-page-items="rowsPerPage"
      class="elevation-1 table"
      id="tableau"
    >
      <template v-slot:items="props" id="temp">
        <tr v-bind:class="{ processing: props.item.processing }">
          <td class="text-xs-center td">{{ props.item.mac }}</td>
          <td class="text-xs-center td">{{ props.item.ip }}</td>
          <td id="hostname" class="text-xs-center td">{{ props.item.hostname }}</td>
          <td class="text-xs-center td">{{ props.item.location }}</td>
          <td class="text-xs-center td">{{ props.item.ccuMagasin }}</td>
          <td class="text-xs-center td">{{ props.item.version }}</td>
          <td class="text-xs-center td">{{ props.item.sous_version }}</td>
          <td class="text-xs-center td">{{ props.item.updated_at | formatDate }}</td>
          <td class="text-xs-center td">{{ props.item.ssid }}</td>
          <td class="text-xs-center td" id="application" v-if="!checkNull(props.item.Application)">{{ props.item.Application.name }}</td>
          <td class="text-xs-center td" id="application" v-else></td>
        </tr>
      </template>
    </v-data-table>
    <v-snackbar :value="snackbarDataTable.show" :color="snackbarDataTable.color">
      {{ $t(snackbarDataTable.text, snackbarDataTable.info) }}
      <v-btn dark flat @click="closeSnackBarDataTable()">
        {{ $t('label.close.button') }}
      </v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import store from '@/store'
import { startEventSource, endEventSource } from '@/service/eventsource'
import { isNull } from 'lodash'
export default {
  name: 'RaspberryDataTable',
  created() {
    startEventSource()
  },
  beforeDestroy: function() {
    endEventSource()
  },
  data() {
    return {
      locsearch: '',
      hostnamesearch: '',
      ccusearch: '',
      appsearch: '',
      rasp: null,
      pagination: {
        sortBy: 'updated_at',
        descending: true
      },
      //Headers utilisés ensuite pour le tableau
      headers: [
        { text: 'Mac', value: 'mac', sortable: true },
        { text: 'IP', value: 'ip', sortable: true },
        { text: "Nom de l'hôte", value: 'hostname', sortable: true },
        { text: 'Localisation', value: 'location', sortable: true },
        { text: 'CCU Magasin', value: 'ccu_magasin', sortable: true },
        { text: 'Version', value: 'version', sortable: true },
        { text: 'Sous_Version', value: 'sous_version', sortable: true },
        { text: 'Date de maj', value: 'updated_at', sortable: true },
        { text: 'SSID Wi-Fi', value: 'ssid', sortable: true },
        { text: "Nom de l'application", value: 'Application.name', sortable: true }
      ],
      deleteItemId: 0,
      rowsPerPage: [20, 30, 40, 50],
      filters: {
        location: null,
        applicationId: null,
        hostname: null,
        ccuMagasin: null
      }
    }
  },
  watch: {
    pagination: {
      handler() {
        store.dispatch('RaspberriesStore/setRaspberrySize', this.pagination.rowsPerPage)
        store.dispatch('RaspberriesStore/setRaspberrySort', { attributeSort: this.pagination.sortBy, descending: this.pagination.descending })
        store.dispatch('RaspberriesStore/getRaspberries', {
          filters: this.filters,
          page: this.pagination.page - 1
        })
      }
    }
  },
  computed: {
    ...mapState('RaspberriesStore', ['raspberriesFullList', 'totalElement', 'loadingDataTable', 'snackbarDataTable'])
  },
  methods: {
    changeApplication(applicationId) {
      this.filters.applicationId = encodeURIComponent(applicationId)
      store.dispatch('RaspberriesStore/getRaspberries', { filters: this.filters })
    },
    changeLocation(location) {
      this.filters.location = encodeURIComponent(location)
      store.dispatch('RaspberriesStore/getRaspberries', { filters: this.filters })
    },
    changeCcuMagasin(ccuMagasin) {
      this.filters.ccuMagasin = encodeURIComponent(ccuMagasin)
      store.dispatch('RaspberriesStore/getRaspberries', { filters: this.filters })
    },
    changeHostname() {
      this.filters.hostname = encodeURIComponent(this.hostnamesearch)
      store.dispatch('RaspberriesStore/getRaspberries', { filters: this.filters })
    },
    ...mapActions('RaspberriesStore', ['setDisplayForm', 'closeSnackBarDataTable']),
    checkNull: function(value) {
      return isNull(value)
    },
    getAppName(application) {
      return application.Application ? application.Application.name : 'Tous'
    }
  }
}
</script>
<style>
.processing {
  background-color: gray;
}
.formWrapper {
  display: flex;
  width: 100%;
}
.formWrapper :first-child {
  margin-right: 1%;
}
.formLine {
  width: 50%;
}
</style>
