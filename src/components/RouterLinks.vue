<template>
  <div class="router-links">
    <v-tabs v-model="active" fixed-tabs color="transparent" slider-color="#6bbdae">
      <v-tab v-if="isAdminRaspberry" :to="'/raspberrypi' + (code ? '/' + code : '')" class="link">{{ $t('label.routerLinks.raspberrypi') }}</v-tab>
      <v-tab v-if="isAdminApplication" :to="'/application' + (code ? '/' + code : '')" class="link">{{ $t('label.routerLinks.application') }}</v-tab>
    </v-tabs>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'routerLinks',
  props: {
    code: {
      type: String
    }
  },
  data() {
    return {
      active: null
    }
  },
  computed: {
    ...mapGetters('CommonStore', ['isPreparationRaspberry', 'isAdminRaspberry', 'isAdminApplication'])
  }
}
</script>

<style lang="scss" scoped>
.router-links {
  margin-bottom: 1em;
}
.router-links .link {
  color: black;
  font-weight: bold;
}
</style>
