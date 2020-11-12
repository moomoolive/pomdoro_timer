<template>
    <div class="buttonContainer">
        <selection-button
        ref="button"
        icon="fas fa-coffee"
        color="green"
        @click.native="changeInterval('shortBreak')"
        />
        <selection-button
        icon="fas fa-briefcase"
        color="purple"
        @click.native="changeInterval('workInterval')"
        />
        <selection-button
        icon="fas fa-bed"
        color="brown"
        @click.native="changeInterval('longBreak')"
        />
    </div>
</template>

<script>
import selectionButton from '../commonComponents/selectionButton.vue'

export default {
    name: 'selectionButtonGroup',
    components: {
        selectionButton
    },
    data() {
        return {
            isMounted: false
        }
    },
    methods: {
        changeInterval(interval) {
            this.$store.dispatch('changeInterval', interval)
        }
    },
    computed: {
        smallScreenIndicator1() {
            if (this.isMounted) return this.$refs.button.windowHeight
        },
        smallScreenIndicator2() {
            if (this.isMounted) return this.$refs.button.windowWidth
        }
    },
    watch: {
        smallScreenIndicator1(oldValue, newValue) {
            const screenLength = 520
            if (newValue <= screenLength && oldValue > screenLength) {
                this.$store.dispatch('screenSize', false)
            }
            else if (newValue > screenLength && oldValue <= screenLength) {
                this.$store.dispatch('screenSize', true)
            }
        },
        smallScreenIndicator2(oldValue, newValue) {
            const screenLength = 850
            if (newValue <= screenLength && oldValue > screenLength) {
                this.$store.dispatch('screenSize', false)
            }
            else if (newValue > screenLength && oldValue <= screenLength) {
                this.$store.dispatch('screenSize', true)
            }
        }
    },
    mounted() {
        this.isMounted = true
    }
}
</script>

<style lang="scss" scoped>
.buttonContainer {
    display: flex;
    text-align: center;
}
</style>