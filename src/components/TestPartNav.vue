<template>
    <div>
        <img v-if="open" src="../assets/arrow-down.png" @click="closeIt">
        <img v-else src="../assets/arrow-right.png" @click="openIt">
        {{ capitalize(type) }} <span style="color:blue; font-size: 0.8em"> ({{ count }})</span>
        <div v-if="open">
            <div v-for="element in elements(testId, type)" :key="element.id">
                <div class="element-nav">
                    {{ element.name }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                openPartIds: [],
                open: false
            }
        },
        props: [
            'testId',
            'type' // element of test - head, variable, setup,  teardown
            ],
        computed: {
            count() {
                return this.elements(this.testId, this.type).length
            }
        },
        methods: {
            capitalize(it) {
                return it.charAt(0).toUpperCase() + it.slice(1)
            },
            openIt() {
                this.open = true
            },
            closeIt() {
                this.open = false
            },
            elements(testId, type) {
                return this.elementsOfTest(testId, type )
            },
            elementsOfTest(testId, type) {
                let ids = []
                this.$store.state.base.tests.forEach (function(test) {
                    ids.push(test.id)
                })
                const testIndex = this.$store.state.base.tests.findIndex(function (test) {
                    return test.id === testId
                })
                if (testIndex === -1) { throw `Cannot find test id ${testId} in TestPartNav.elementsOfTest` }
                const test = this.$store.state.base.tests[testIndex]
                switch (type) {
                    case 'heads': return test.heads
                    case 'fixtures': return test.fixtures
                    case 'variables': return test.variables
                    case 'setups': return test.setups
                    case 'tests': return test.tests
                    case 'teardowns': return test.teardowns
                    default: return null
                }
            }
        }
    }
</script>
<style scoped>
    .element-nav {
        position: relative;
        left: 15px;
    }

</style>
