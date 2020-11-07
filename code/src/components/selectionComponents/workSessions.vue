<template>
    <div>
        <div>
            <selection-button
            icon="fas fa-minus"
            color="brown"
            id='minusButton'
            size="small"
            @click.native="incrementWorkSessions(-1)"
            />
            <div id="display">
                <b-button class="display" variant="danger" size="lg">
                    {{ display }}
                </b-button>
            </div>
            <selection-button
            icon="fas fa-plus"
            color="brown"
            id='addButton'
            size="small"
            @click.native="incrementWorkSessions(1)"
            />
        </div>
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
#display {
    margin-left: 0.5em;
    margin-right: 0.5em;
}

.display {
    width: 5em !important;
    background-color: $secondaryColor !important;
}

#addButton, #display, #minusButton {
    display: inline-block;
}
</style>