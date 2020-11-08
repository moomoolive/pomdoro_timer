<template>
    <div class="container">
        <selection-button
        icon="fas fa-minus"
        color="brown"
        id="minusButton"
        @click.native="incrementWorkSessions(-1)"
        />
        <b-button class="display">
            {{ display }}
        </b-button>
        <selection-button
        icon="fas fa-plus"
        color="brown"
        id="addButton"
        @click.native="incrementWorkSessions(1)"
        />
    </div>
</template>

<script>
import selectionButton from '../commonComponents/selectionButton.vue'

export default {
    name: 'workSessions',
    components: {
        selectionButton
    },
    methods:{
        incrementWorkSessions(number) {
            if (this.display > 1) {
            this.$store.dispatch('incrementSesssionNumber', number)
            } else {
                alert('You cannot have less than 1 work session!')
            }
        }
    },
    computed: {
        display() {
            return this.$store.state.timeIntervals.workSessions
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    flex-direction: row !important;
}

#addButton {
    justify-content: right !important;
}

#minusButton {
    justify-content: right !important;
}

.display {
    width: 100%;
    height: 75%;
    background-color: $secondaryColor !important;
    font-weight: bold;
    cursor: default !important;
}
</style>