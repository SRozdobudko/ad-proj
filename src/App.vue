<template>
  <v-app>
    <Header></Header>
    <v-content>
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
  this.$http.get('http://localhost:3000/user').then(resp => {
    setTimeout(() => {
      this.$store.dispatch('takeUser', resp.body[0]);
    }, 2000);
  })
  }
}
</script>
<style>
</style>
