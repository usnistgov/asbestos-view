<template>
  <div>
    <h1>Body</h1>
    <h2>This is Test {{ $route.params.id }}</h2>
  </div>
</template>
<script>

</script>
<style scoped>
  .main {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-areas: 'nav body';
  }
  .nav {
    text-align: left;
    align-content: start;
    grid-area: nav;
  }
  .body {
    text-align: left;
    align-content: start;
    grid-area: body;
  }

</style>
