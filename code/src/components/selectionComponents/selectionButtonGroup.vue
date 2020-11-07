<template>
    <div>
        <div class="buttonGroup">
            <selection-button
            buttonText="Short Break"
            icon="fas fa-coffee"
            color="green"
            id='shortBreak'
            @click.native="changeInterval('shortBreak')"
            />
            <selection-button
            buttonText="Work Time"
            icon="fas fa-briefcase"
            color="purple"
            id='workInterval'
            @click.native="changeInterval('workInterval')"
            />
            <selection-button
            buttonText="Long Break"
            icon="fas fa-bed"
            color="brown"
            id='longBreak'
            @click.native="changeInterval('longBreak')"
            />
        </div>
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
#shortBreak, #workInterval, #longBreak {
    display: inline-block;
    margin-left: 4em;
    margin-right: 4em;
}
</style>