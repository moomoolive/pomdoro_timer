<template>
    <div class="buttonContainer">
        <selection-button
        :icon="leftIcon"
        :color="leftButtonColor"
        @click.native="nextInterval"
        />
        <selection-button
        :icon="middleIcon"
        @click.native="pausePlay"
        />
        <selection-button
        icon="fas fa-stop"
        color="brown"
        @click.native="toSelection"
        />
    </div>
</template>

<script>
import selectionButton from '../commonComponents/selectionButton.vue'

export default {
    name: 'clockButtonGroup',
    components: {
        selectionButton
    },
    data() {
        return {
            leftIcon: '',
            interval: '',
            middleIcon: '',
            leftButtonColor: ''
        }
    },
    methods: {
        nextInterval(interval) {
            this.$store.dispatch('changeInterval', this.interval)
            this.$emit('rerender')
        },
        pausePlay() {
            this.$emit('rerender', true)
        },
        toSelection() {
            this.$store.dispatch('changeAppMode', 'selection')
        }
    },
    computed: {
        timeInterval() {
            return this.$store.state.timeIntervalSelect
        }
    },
    created() {
        this.$parent.play? this.middleIcon = "fas fa-pause": this.middleIcon = "fas fa-play"
        switch(this.$store.state.timeIntervalSelect) {
            case 'workInterval':
                if (this.$store.getters.isLastSession) {
                    this.leftIcon = "fas fa-bed"
                    this.interval = "longBreak"
                    this.leftButtonColor = 'brown'
                } else {
                    this.leftIcon = 'fas fa-coffee'
                    this.interval = 'shortBreak'
                    this.leftButtonColor = 'green'
                }
                break
            case 'longBreak':
            case 'shortBreak':
                this.leftIcon = 'fas fa-briefcase'
                this.interval = 'workInterval'
                this.leftButtonColor = 'purple'
                break
        }
    }
}
</script>

<style lang="scss" scoped>
.buttonContainer {
    display: flex;
    text-align: center;
}
</style>