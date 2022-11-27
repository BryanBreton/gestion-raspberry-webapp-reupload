<template>
  <div>
    <v-layout row justify-center>
      <v-btn id="boutonCreate" color="primary" dark @click="createApplication">{{ $t('label.application.create') }}</v-btn>
    </v-layout>
    <application-form></application-form>
    <application-data-table></application-data-table>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import store from '@/store'
import ApplicationDataTable from '@/components/ApplicationDataTable'
import ApplicationForm from '@/components/Form/ApplicationForm'
import $i18n from '@/plugins/i18n'
export default {
  name: 'Applications',
  components: { ApplicationDataTable, ApplicationForm },
  data() {
    return {}
  },
  methods: {
    ...mapActions('ApplicationStore', ['setTitleForm', 'setDisplayForm', 'setApplicationCurrent']),
    createApplication: async function() {
      store.dispatch('ApplicationStore/setApplicationCurrent', {})
      store.dispatch('ApplicationStore/setTitleForm', $i18n.t('label.application.create'))
      store.dispatch('ApplicationStore/setDisplayForm')
    }
  }
}
</script>
