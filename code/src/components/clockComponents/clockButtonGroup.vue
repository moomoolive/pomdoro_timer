<template>
    <div class="buttonContainer">
        <selection-button
        :icon="leftIcon"
        :color="leftButtonColor"
        @click.native="changeInterval"
        />
        <selection-button
        :icon="middleIcon"
        @click.native="pausePlay"
        />
        <selection-button
        icon="stop"
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
            leftIcon: 'coffee',
            middleIcon: 'pause',
            leftButtonColor: 'green'
        }
    },
    methods: {
        changeInterval(interval) {
            this.$store.dispatch('changeInterval', this.nextInterval)
            this.middleIcon = 'pause'
            this.leftButton()
            this.$emit('rerender', 'changeInterval')
        },
        pausePlay() {
            if (this.middleIcon === 'pause') this.middleIcon = "play" 
            else  this.middleIcon = "pause"
            this.$emit('rerender', 'pause/play')
        },
        toSelection() {
            this.$router.push('/')
        },
        leftButton() {
            switch(this.nextInterval) {
            case 'longBreak':
                this.leftIcon = "bed"
                this.leftButtonColor = 'brown'
                break
            case 'shortBreak':
                this.leftIcon = 'coffee'
                this.leftButtonColor = 'green'
                break
            case 'workInterval':
                this.leftIcon = 'briefcase'
                this.leftButtonColor = 'purple'
                break
            }
        }
    },
    computed: {
        isLastSession() {
            return this.$store.getters.isLastSession
        },
        nextInterval() {
            return this.$store.getters.nextInterval
        }
    },
    created() {
        
    }
}
</script>

<style lang="scss" scoped>
.buttonContainer {
    display: flex;
    text-align: center;
}
</style>