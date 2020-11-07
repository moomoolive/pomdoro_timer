<template>
    <div class="middleGrid">
        <selection-button
        icon="fas fa-play"
        size="large"
        @click.native="startTimer"
        class="play"
        />
    </div>
</template>

<script>
import selectionButton from '../../commonComponents/selectionButton.vue'

export default {
    name: 'middleGrid',
    components: {
        selectionButton
    },
    computed: {
    }
}
</script>

<style lang='scss' scoped>
.middleGrid {
    display: grid;
    grid-template-rows: repeat(3, 33.3%);
    grid-template-columns: repeat(3, 33.3%);
    align-items: center;
}

.play {
    grid-row: 2;
    grid-column: 2;
}
</style>