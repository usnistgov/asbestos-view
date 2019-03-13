<template>
    <div>
      <h1>Top Layout</h1>
        <NavigationPage></NavigationPage>
        <router-view></router-view>
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
