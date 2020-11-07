<template>
    <div>
        <h1>selection</h1>
        <div>
           <selection-button-group
           />
        </div>
    </div>
</template>

<script>
import selectionButtonGroup from './selectionComponents/selectionButtonGroup.vue'

export default {
    name: 'selection',
    components: {
        selectionButtonGroup
    },
    data() {
        return {
            currentTimeInterval: 'workInterval'
        }
    },
    created() {
        this.$store.dispatch('changeInterval', 'workInterval')
    }
}
</script>

<style lang="scss" scoped>
</style>