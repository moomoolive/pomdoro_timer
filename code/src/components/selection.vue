<template>
    <div>
        <div style="height: 66%;">
            <time-interval-selector />
        </div>
        <div style="height: 13%; margin-top: 1%;">
            <selection-button-group />
        </div>
        <div style="height: 8%; margin-top: 2%;">
            <work-sessions />
        </div>
        <div style="height: 5%">
            <p class="sessionLabel">Sessions to Long Break</p>
        </div>
    </div>
</template>

<script>
import selectionButtonGroup from './selectionComponents/selectionButtonGroup.vue'
import workSessions from './selectionComponents/workSessions.vue'
import timeIntervalSelector from './selectionComponents/timeIntervalSelector.vue'

export default {
    name: 'selection',
    components: {
        selectionButtonGroup,
        workSessions,
        timeIntervalSelector
    },
    data() {
        return {

        }
    },
    computed: {
        timeInterval() {
            return this.$store.state.timeIntervalSelect
        }
    },
    created() {
        this.$store.dispatch('changeInterval', 'workInterval')
    }
}
</script>

<style lang="scss" scoped>
.sessionLabel {
    font-size: 2vh;
    text-align: center;
    font-weight: bold;
}
</style>