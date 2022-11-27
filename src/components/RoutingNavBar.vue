<template>
  <v-layout align-center justify-space-between wrap>
    <v-flex xs1></v-flex>
    <v-flex xs10 align-content-center>
      <router-links v-if="showRouterLinks"></router-links>
    </v-flex>
    <v-flex xs1>
      <v-layout row justify-center>
        <v-flex xs1>
          <iris-logout-dropdown :arrow="false" v-on:logoutEvent="signOut()">
            <template slot="avatar">
              <iris-avatar :size="40" :username="`${utilisateurConnecte.prenom} ${utilisateurConnecte.nom}`"></iris-avatar>
            </template>
          </iris-logout-dropdown>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import RouterLinks from '@/components/RouterLinks'

export default {
  name: 'RoutingNavBar',
  components: { RouterLinks },
  data() {
    return {
      showRouterLinks: true
    }
  },
  computed: {
    ...mapState('CommonStore', ['userFunctions', 'utilisateurConnecte']),
    ...mapActions('CommonStore', ['signOut'])
  }
}
</script>
