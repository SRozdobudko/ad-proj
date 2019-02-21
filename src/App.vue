<template>
  <v-app>
    <Header></Header>
    <v-content>
      <v-progress-linear v-if="loading" :indeterminate="true"></v-progress-linear>
      <!--<v-container fluid>-->
        <v-fade-transition mode="out-in">
          <router-view></router-view>
        </v-fade-transition>
      <!--</v-container>-->
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'

export default {
  components: {
    Header
  },
mounted() {
      this.$store.dispatch('getUser');
  },
  computed: {
    loading() {
      return this.$store.getters.loading;
    }
  }
}
</script>
<style>
</style>
