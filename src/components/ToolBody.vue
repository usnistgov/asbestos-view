<template>
    <div class="main">
        <div class="nav">
            <div class="test-defs-header">
                Test Definitions
            </div>

            <div v-for="testId in testIds" :key="testId.id">
                <router-link class="nav-list-item" v-bind:to="testUrl(testId.testId)">Test {{testId.testId}}</router-link>
            </div>
        </div>
        <router-view class="body" name="testPanel"></router-view>
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
                    },
                    {
                        id: '3',
                        testId: '28001'
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
        grid-gap: 0px;
    }

    .test-defs-header {
        font-weight: bold;
    }

    .nav {
        text-align: left;
        align-content: start;
        grid-area: nav;
        border: 1px solid black;
    }

    .body {
        text-align: left;
        align-content: start;
        grid-area: body;
        border: 1px solid black;
    }

    .router-link-active {
        background-color: lightblue;
    }

    a:link {
        text-decoration: none;
    }
    .nav-list-item {
        line-height: 1.5;
    }
</style>
