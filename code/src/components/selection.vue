<template>
    <div>
        <div class="selector">
            <time-interval-selector
            />
        </div>
        <div class="buttonGroup">
           <selection-button-group
           />
        </div>
        <div class="workSessionCounter">
            <work-sessions
            />
        </div>
        <p class="label">
            Sessions Until Long Break
        </p>
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
        },
        intervalSelected() {
            let message = ''
            switch (this.timeInterval) {
                case "workInterval":
                    message = "Work Time"
                    break
                case "longBreak":
                    message = "Long Break"
                    break
                case "shortBreak":
                     message = "Short Break"
                     break
            }
            return message
        }
    },
    created() {
        this.$store.dispatch('changeInterval', 'workInterval')
    }
}
</script>

<style lang="scss" scoped>
.buttonGroup {
    text-align: center;
    margin-top: $selectionButtonSpace;
}

.workSessionCounter {
    text-align: center;
    margin-top: $selectionButtonSpace;
}

.selector {
    margin-top: $selectionButtonSpace;
}

.label {
    margin-top: $selectionButtonSpace/2;
    text-align: center;
    font-weight: bold;
    font-size: 1.06em;
    color: white;
}

.selectorLabel {
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
}
</style>