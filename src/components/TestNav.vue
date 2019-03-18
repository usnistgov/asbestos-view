<template>
    <div>
      <div>Head</div>
        <div>Fixtures</div>
        <test-part-nav :testId="id" type="variables"></test-part-nav>
        <div>Setup</div>
        <div>Test</div>
        <div>Teardown</div>
    </div>
</template>
<script>
    import TestPartNav from "./TestPartNav";

    export default {
        data() {
            return {

            }
        },
        props: ['id'],
        components: {TestPartNav},
        methods: {

        }
    }
</script>
<style scoped>

</style>
