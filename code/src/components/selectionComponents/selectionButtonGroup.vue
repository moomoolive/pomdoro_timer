<template>
    <div>
        <div class="buttonGroup">
            <selection-button
            buttonText="Button"
            icon="fas fa-coffee"
            color="green"
            id='shortBreak'
            @click.native="changeInterval('shortBreak')"
            />
            <selection-button
            icon="fas fa-coffee"
            color="purple"
            id='workInterval'
            @click.native="changeInterval('workInterval')"
            />
            <selection-button
            buttonText="Button"
            icon="fas fa-coffee"
            color="brown"
            id='longBreak'
            size='large'
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
.buttonGroup {
    margin-left: 2em;
    margin-right: 2em;
}

#shortBreak, #workInterval, #longBreak {
    display: inline-block;
    margin-left: 4em;
    margin-right: 4em;
}
</style>