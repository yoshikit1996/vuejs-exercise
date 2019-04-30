<template>
  <div class="container d-flex align-items-center">
    <div id="app" class="p-11">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);

export default class App extends Vue {}
</script>

<style lang="stylus">
#app
  width 100%
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
