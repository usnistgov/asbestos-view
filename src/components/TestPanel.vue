<template>
  <div>
    <!--route has simple ids-->
    <div v-if="$route.params.variableId">
      variableId is {{ $route.params.variableId }} of Test {{ $route.params.testId }}
    </div>
    <div v-else>
      Test {{ $route.params.testId }}
    </div>
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
