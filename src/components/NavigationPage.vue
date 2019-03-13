<template>
    <div class="main">
        <div class="nav">
        <h2>Navigation</h2>
            <router-link to="/foo">Go to Foo</router-link>
            /
            <router-link to="/bar">Go to Bar</router-link>

            <div v-for="testId in testIds" :key="testId.id">
                <br/>
                <router-link v-bind:to="testUrl(testId.testId)">Test {{testId.testId}}</router-link>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                testIds: [
                    {
                        id: '1',
                        testId: '11937'
                    },
                    {
                        id: '2',
                        testId: '20000'
                    }
                ]
            }
        },
        name: 'Navigation',
        methods: {
            testUrl(id) {
                return '/test/' + id
            }
        }
    }
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
