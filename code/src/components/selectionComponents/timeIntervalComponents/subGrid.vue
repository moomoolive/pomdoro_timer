<template>
    <div class="subGrid">
        <selection-button
        :icon="icon"
        :size="size"
        :buttonText="message"
        @click.native="func"
        :style="`grid-row: ${gridRow}; grid-column: ${gridColumn}`"
        />
    </div>
</template>

<script>
import selectionButton from '../../commonComponents/selectionButton.vue'

export default {
    name: 'subGrid',
    components: {
        selectionButton
    },
    props: {
        size: String,
        icon: String,
        message: String,
        gridRow: String,
        gridColumn: String
    },
    methods: {
        startTimer() {
            this.$store.dispatch('changeAppMode', 'clock')
        },
        updatedSelectedTime(value) {
            const payload = {
                time: value,
                interval: this.timeInterval
            }
            this.$store.dispatch('updatedSelectedTime', payload)
        },
        func() {
            this.icon === ''? this.updatedSelectedTime(parseInt(this.message)) : this.startTimer()
        }
    },
    computed: {
        timeInterval() {
            return this.$store.state.timeIntervalSelect
        }
    }
}
</script>

<style lang='scss' scoped>
.subGrid {
    display: grid;
    height: 12em;
    width: 12em;
    grid-template-rows: repeat(19, 5.26%);
    grid-template-columns: repeat(19, 5.26%);
    align-items: center;
}
</style>