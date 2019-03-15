<template>
    <div class="main">
        <div class="nav">
            <div class="test-defs-header">
                Test Definitions
            </div>

            <div v-for="testId in $store.state.base.testIds" :key="testId.id">
                <img v-if="testOpen(testId.id)" src="../assets/arrow-down.png">
                <img v-else src="../assets/arrow-right.png">
                <router-link class="nav-list-item" v-bind:to="testUrl(testId.name)">
                    Test {{testId.name}}
                </router-link>
            </div>
        </div>
        <router-view class="body" name="testPanel"></router-view>
    </div>
</template>

<script>
    import {newTest} from "../types/test";

    export default {
        data() {
            return {
                openTestId: null
            }
        },
        name: 'ToolBody',
        mounted() {
          this.loadTests()
        },
        methods: {
            testUrl(id) {
                return '/test/' + id
            },
            loadTests() {
                const testIds = [
                    {
                        id: '1',
                        name: '11937'
                    },
                    {
                        id: '2',
                        name: '20000'
                    },
                    {
                        id: '3',
                        name: '28001'
                    }
                    ]
                this.$store.commit('installTestIds', testIds)
                const test = newTest()
                test.id = '1'
                test.name = '11937'
                this.$store.commit('installTest', test)
                this.openTestId = '1'
            },
            testLoaded(name) {
                return this.$store.getters.testIndexByName(name) !== -1
            },
            testOpen(id) {
                return this.openTestId && this.openTestId === id
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
