<template>
    <div>
        <div style="height: 8%;">
            <sessions-indicator />
        </div>
        <div style="height: 70%">
            <time-indicator
            v-if="showIndicator"
            @timer-finished="rerender"
            />
        </div>
        <div style="height: 13%;">
            <clock-button-group
            v-if="showButtons" 
            @rerender="rerender"
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
            play: true
        }
    },
    methods: {
        rerenderButtons(value) {
            if (value) this.play = !this.play
            if (value === 'timeFinished') {
                this.play = false
            }
            this.showButtons = false
                this.$nextTick(() => {
                    this.showButtons = true
                })
        },
        rerenderTime() {
            this.showIndicator = false
                this.$nextTick(() => {
                    this.showIndicator = true
                })
        },
        rerender(...value) {
            console.log('rerender')
            this.rerenderButtons(...value)
            if (!value[0] || value[0] === 'timeFinished') this.rerenderTime()
        }
    },
    created() {
        this.$store.dispatch('changeInterval', 'workInterval')
    }
}
</script>

<style lang="scss" scoped>

</style>