<template>
  <div id="app">
    <h1>My App</h1>

    <router-view></router-view>

  </div>
</template>

<script>

import {router} from "./routes/router.js"

export default {
  name: 'app',
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
