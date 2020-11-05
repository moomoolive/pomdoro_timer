<template>
    <div>
        <div class="buttonGroup">
            <selection-button
            buttonText="Button"
            icon="fas fa-coffee"
            color="green"
            id='button1'
            />
            <selection-button
            buttonText="Button"
            icon="fas fa-coffee"
            color="purple"
            id='button2'
            />
            <selection-button
            buttonText="Button"
            icon="fas fa-coffee"
            color="brown"
            id='button3'
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
    }
}
</script>

<style lang="scss" scoped>
.buttonGroup {
    margin-left: 2em;
    margin-right: 2em;
}

#button1, #button2, #button3 {
    display: inline-block;
    margin-left: 4em;
    margin-right: 4em;
}
</style>