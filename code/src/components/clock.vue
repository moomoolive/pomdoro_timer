<template>
    <div>
        <div style="height: 8%;">
            <sessions-indicator />
        </div>
        <div style="height: 70%; background: white">
            clock
        </div>
        <div style="height: 13%;">
            <clock-button-group v-if="showButtons" 
            @rerender="rerender"
            />
        </div>
    </div>
</template>

<script>
import clockButtonGroup from './clockComponents/clockButtonGroup.vue'
import sessionsIndicator from './clockComponents/sessionsIndicator.vue'

export default {
    name: 'clock',
    components: {
        clockButtonGroup,
        sessionsIndicator
    },
    data() {
        return {
            showButtons: true,
            play: true
        }
    },
    methods: {
        rerender(value) {
            if (value) this.play = !this.play
            this.showButtons = false
                this.$nextTick(() => {
                    this.showButtons = true
                })
        },
        pausePlay() {
            this.rerender()
        }
    },
    created() {
        this.$store.dispatch('changeInterval', 'workInterval')
    }
}
</script>

<style lang="scss" scoped>

</style>