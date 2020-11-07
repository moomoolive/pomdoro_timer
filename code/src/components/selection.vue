<template>
    <div>
        <h1>selection</h1>
        <div>
           <selection-button-group
           class="buttonGroup"
           />
        </div>
        <div>
            <work-sessions
            class="workSessionCounter"
            />
        </div>
        <div>
            <selection-button
            icon="fas fa-play"
            buttonText="Let's Work!"
            size="large"
            class="playButton"
            @click.native="startTimer"
            />
        </div>
    </div>
</template>

<script>
import selectionButtonGroup from './selectionComponents/selectionButtonGroup.vue'
import selectionButton from './commonComponents/selectionButton.vue'
import workSessions from './selectionComponents/workSessions.vue'

export default {
    name: 'selection',
    components: {
        selectionButtonGroup,
        selectionButton,
        workSessions
    },
    data() {
        return {

        }
    },
    methods: {
        startTimer() {
            this.$store.dispatch('changeAppMode', 'clock')
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
.buttonGroup {
    text-align: center;
}

.workSessionCounter {
    text-align: center;
    margin-top: $selectionButtonSpace;
}

.playButton {
    text-align: center;
    margin-top: $selectionButtonSpace;
}
</style>