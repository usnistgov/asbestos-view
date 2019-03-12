<template>
    <div>
      <h1>Top Layout</h1>
        <NavigationPage></NavigationPage>
    </div>
</template>

<script>

    import NavigationPage from "@/components/NavigationPage.vue"
    export default {
        name: 'TopLayout',
        components: {
            NavigationPage
        }
    }
</script>
