<template>
  <div>
    <v-layout row justify-center>
      <v-dialog v-model="displayForm" persistent max-width="500">
        <v-card>
          <v-card-title class="headline">{{ titleForm }}</v-card-title>
          <v-form ref="applicationForm" v-model="valid" lazy-validation>
            <v-card-text>
              <v-container grid-list-md>
                <v-layout wrap>
                  <v-flex xs12>
                    <!-- eslint-disable-next-line -->
                    <v-text-field
                      :label="$t('label.application.nom')"
                      :value="applicationsCurrent.name"
                      @input="setApplicationCurrentName"
                      :rules="rules.name"
                      :counter="255"
                      required
                      outline
                      autofocus
                      id="appName"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <!-- eslint-disable-next-line -->
                    <v-text-field
                      :label="$t('label.application.url')"
                      :value="applicationsCurrent.url"
                      @input="setApplicationCurrentUrl"
                      :rules="rules.url"
                      :counter="1024"
                      required
                      outline
                      id="appUrl"
                    ></v-text-field>
                  </v-flex>
                  <v-flex xs12>
                    <!-- eslint-disable-next-line -->
                    <v-text-field
                      :label="$t('label.application.version')"
                      :value="applicationsCurrent.version"
                      @input="setApplicationCurrentVersion"
                      :rules="rules.version"
                      :counter="15"
                      outline
                      id="appVersion"
                    ></v-text-field>

                    <v-select
                      :value="applicationsCurrent.rotation"
                      @input="setApplicationCurrentRotation"
                      :rules="rules.rotation"
                      :counter="17"
                      outline
                      item-text="value"
                      item-value="key"
                      :items="items"
                      filled
                      :label="$t('label.application.rotation')"
                      id="appRotation"
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" flat @click="setDisplayForm">{{ $t('label.close.button') }}</v-btn>
              <v-btn :disabled="!valid" color="green darken-1" flat id="submit" @click="createOrUpdateApplication(applicationsCurrent)">
                {{ $t('label.submit.button') }}
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import store from '@/store'
import resourceRules from '@/service/rules/ruleApplicationForm'

export default {
  name: 'ApplicationForm',
  data() {
    return {
      items: [
        { key: 0, value: 'paysage' },
        { key: 1, value: 'portrait a droite' },
        { key: 2, value: 'paysage inversé' },
        { key: 3, value: 'portrait a gauche' }
      ],
      valid: false,
      rules: resourceRules
    }
  },
  computed: {
    ...mapState('ApplicationStore', ['displayForm', 'applicationsCurrent', 'titleForm'])
  },
  methods: {
    ...mapActions('ApplicationStore', [
      'setDisplayForm',
      'setApplicationCurrentName',
      'setApplicationCurrentUrl',
      'setApplicationCurrentVersion',
      'setApplicationCurrentRotation',
      'createApplications'
    ]),
    createOrUpdateApplication: async function(application) {
      if (this.$refs.applicationForm.validate()) {
        if (application.applicationId) {
          store.dispatch('ApplicationStore/updateApplications', application)
        } else {
          store.dispatch('ApplicationStore/createApplications', application)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
