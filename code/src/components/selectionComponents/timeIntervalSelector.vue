<template>
    <div>
        <div class="cssGrid">
            <div style="grid-row: 2; grid-column: 2; text-align: center;">
                <selection-button
                icon="fas fa-play"
                size="large"
                @click.native="startTimer"
                class="play"
                />
            </div>
        </div>
    </div>
</template>

<script>
import selectionButton from '../commonComponents/selectionButton.vue'

export default {
    name: 'timeIntervalSelector',
    components: {
        selectionButton
    },
    methods: {
        startTimer() {
            this.$store.dispatch('changeAppMode', 'clock')
        }
    }
}
</script>

<style lang="scss" scoped>
$size: 32em;

.cssGrid {
    display: grid;
    height: $size;
    width: $size;
    grid-template-rows: repeat(3, 33.3%);
    grid-template-columns: repeat(3, 33.3%);
    background-color: $secondaryColor;
    margin-left: auto;
    margin-right: auto;
    border-radius: 100%;
    align-items: center;
}

.play {
    grid-row: 2;
    grid-column: 2;
    text-align: center;
}
</style>