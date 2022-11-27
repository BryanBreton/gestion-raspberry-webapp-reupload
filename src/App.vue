<template>
  <v-app id="app">
    <div v-if="isAuth">
      <div id="nav">
        <!-- eslint-disable-next-line -->
        <v-snackbar v-model="showErrors" :timeout="10000" :vertical="errors.length > 1" top auto-height>
          <div v-for="error in errors" v-bind:key="error.codeErreur">{{ error.libelleErreur }}</div>
          <v-btn color="#e91e63" flat @click="showErrors = false">{{ $t('label.close.button') }}</v-btn>
        </v-snackbar>
        <routing-nav-bar></routing-nav-bar>
      </div>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import store from '@/store'
import { mapState, mapActions } from 'vuex'
import RoutingNavBar from '@/components/RoutingNavBar'

export default {
  name: 'App',
  components: { RoutingNavBar },
  data() {
    return {
      showRouterLinks: true
    }
  },
  async mounted() {
    await this.initialization()
  },
  computed: {
    ...mapState('CommonStore', ['errors', 'isAuth']),
    showErrors: {
      get() {
        return this.errors && this.errors.length > 0
      },
      set() {
        this.resetErrors()
      }
    }
  },
  methods: {
    resetErrors: function() {
      store.dispatch('CommonStore/resetErrors')
    },
    ...mapActions('CommonStore', ['initialization'])
  },
  watch: {
    $route() {
      if (this.$route.name === 'Page403') {
        this.showRouterLinks = false
      }
    }
  }
}
</script>
