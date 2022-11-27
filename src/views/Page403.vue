<template>
  <v-container grid-list-xl>
    <v-layout align-center justify-center column>
      <v-flex>
        <h1>403</h1>
      </v-flex>
      <v-flex>
        <h2>{{ $t('label.page.403') }}</h2>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Page403'
}
</script>
<style lang="scss">
h1 {
  font-weight: bold;
  font-style: italic;
  font-size: 800%;
}
h2 {
  font-weight: bold;
  font-style: italic;
  font-size: 200%;
}
</style>
