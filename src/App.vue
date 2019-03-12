<template>
  <div id="app">
    <top-layout></top-layout>
    <router-view></router-view>
  </div>
</template>

<script>
import TopLayout from "./components/TopLayout"
import {router} from "./routes/router.js"

export default {
  name: 'app',
  components: {
    TopLayout
  },
  router: router
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
