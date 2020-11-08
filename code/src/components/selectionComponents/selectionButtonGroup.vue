<template>
    <div class="buttonContainer">
        <selection-button
        buttonText="Short Break"
        icon="fas fa-coffee"
        color="green"
        @click.native="changeInterval('shortBreak')"
        />
        <selection-button
        buttonText="Work Time"
        icon="fas fa-briefcase"
        color="purple"
        @click.native="changeInterval('workInterval')"
        />
        <selection-button
        buttonText="Long Break"
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
    methods: {
        changeInterval(interval) {
            this.$store.dispatch('changeInterval', interval)
        }
    }
}
</script>

<style lang="scss" scoped>
.buttonContainer {
    display: flex;
    flex-direction: row;
}
</style>