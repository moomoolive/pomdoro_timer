<template>
    <div>
        <h1>selection</h1>
        <div>
           <selection-button-group
           class="buttonGroup"
           />
        </div>
        <div>
            <selection-button
            icon="fas fa-play"
            buttonText="Let's Work!"
            size="large"
            class="playButton"
            @click.native="changeInterval('workInterval')"
            />
        </div>
    </div>
</template>

<script>
import selectionButtonGroup from './selectionComponents/selectionButtonGroup.vue'
import selectionButton from './commonComponents/selectionButton.vue'

export default {
    name: 'selection',
    components: {
        selectionButtonGroup,
        selectionButton
    },
    data() {
        return {
            currentTimeInterval: 'workInterval'
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

.playButton {
    text-align: center;
    margin-top: 3em;
}
</style>