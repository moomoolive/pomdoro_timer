<template>
    <div>
        <div style="height: 8%;">
            <sessions-indicator />
        </div>
        <div style="height: 70%; z-index: 0; position:relative; margin-top: 1%;">
            <time-indicator
            v-if="showIndicator"
            @timer-finished="events"
            />
        </div>
        <div style="height: 13%; z-index: 1; position:relative; margin-top: 2%;">
            <clock-button-group
            v-if="showButtons" 
            @rerender="events"
            />
        </div>
    </div>
</template>

<script>
import clockButtonGroup from './clockComponents/clockButtonGroup.vue'
import sessionsIndicator from './clockComponents/sessionsIndicator.vue'
import timeIndicator from './clockComponents/timeIndicator.vue'

export default {
    name: 'clock',
    components: {
        clockButtonGroup,
        sessionsIndicator,
        timeIndicator
    },
    data() {
        return {
            showIndicator: true,
            showButtons: true,
            play: true,
            nextInterval: ''
        }
    },
    methods: {
        // Components with fontawesome icons need to be rerendered to
        // dynamically swap icons.
        // or at least that was the easiest way I found...
        rerender(component) {
            this[component] = false
            this.$nextTick(() => {
                    this[component] = true
                })
        },
        incrementSession(number) {
            this.$store.dispatch('updateCurrentSession', number) 
        },
        playAlarm() {
            const audio = new Audio(require('../assets/sound.mp3'))
            audio.play()
        },
        events(value) {
            if (value === 'changeInterval') {
                this.$store.dispatch( value, this.nextInterval)
                this.rerender('showIndicator')
                if (this.nextInterval === 'workInterval') this.incrementSession(1)
            }
            else if (value === 'pause/play') {
                this.play = !this.play
            }
            else if (value === "timeFinished") {
                this.$store.dispatch('changeInterval', this.nextInterval)
                this.play = false
                this.rerender('showIndicator')
                this.playAlarm()
                if (this.nextInterval === 'workInterval') this.incrementSession(1)
            }
            else if (value === 'stop') {
                this.$store.dispatch('changeAppMode', 'selection')
                return
            }
            this.rerender('showButtons')
        }
    },
    computed: {
        isLastSession() {
            return this.$store.getters.isLastSession
        },
        currentInterval() {
            return this.$store.state.timeIntervalSelect
        }
    },
    watch: {
        currentInterval(newValue, oldValue) {
            if (oldValue === 'longBreak' && newValue === 'workInterval') {
                this.$store.dispatch('updateCurrentSession', - this.$store.state.timeIntervals.currentSession + 1)
            }
            switch(newValue) {
                case 'workInterval':
                    if (this.isLastSession) this.nextInterval = 'longBreak'
                    else this.nextInterval = 'shortBreak'
                    break
                case 'longBreak':
                case 'shortBreak':
                    this.nextInterval = 'workInterval'
                    break
            }
        }
    },
    created() {
        this.$store.dispatch('changeInterval', 'workInterval')
        this.nextInterval = 'shortBreak'
    }
}
</script>

<style lang="scss" scoped>

</style>