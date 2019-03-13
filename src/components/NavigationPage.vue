<template>
    <div>
    <h2>Navigation</h2>
    <p>
        <router-link to="/foo">Go to Foo</router-link>
        /
        <router-link to="/bar">Go to Bar</router-link>
        /
        <router-link to="/cve">Go to Cve</router-link>
        /
        <a href="#" @click="add">Add</a>
        {{ added }}
    </p>

    </div>
</template>

<script>

    export default {
        data () {
            return {
                added: false
            }
        },
        name: 'Navigation',
        methods: {
            add () {
                this.added = true
                let { routes } = this.$router.options
                let routeData = routes.find(r => r.path === this.$route.path)
                routeData.children = [
                    { path: 'cve', component:  {template: '<span>Cleveland</span>'}}
                ]
                this.$router.addRoutes([routeData])
            }
        }
    }
</script>
