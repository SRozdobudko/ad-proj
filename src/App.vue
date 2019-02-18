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
  data () {
    return {
      //
    }
  }
}
</script>
<style>
</style>
