<template>
    <div class="container">
        <selection-button
        icon="minus"
        color="brown"
        id="minusButton"
        @click.native="incrementWorkSessions(-1)"
        />
        <div id="display">
            <p class="displayText">
                {{ display }}
            </p>`
        </div>
        <selection-button
        icon="plus"
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
            if (this.display - 1 <= 1 && number === -1) {
                alert(`You cannot have less than 2 work sessions!`)
            } 
            else if (this.display + 1 >= 11 && number === 1) {
                alert(`You cannot have more than 10 work sessions!`)
            }
            else {
                this.$store.dispatch('incrementSesssionNumber', number)
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
    flex-direction: row;
}

#minusButton {
    text-align: right;
}

#addButton {
    text-align: left;
}

#display {
    text-align: center;
    background-color: $secondaryColor;
    border-radius: 30%;
    width: 75%;
    height: 90%;
    margin-left: 1%;
    margin-right: 1%;
    border-color: grey;
    font-size: 1vh;
    border-style: solid;
    border-width: 0.3em;
}

.displayText {
    position: relative;
    top: 30%;
    color: white;
    font-weight: bold;
    font-size: 200%;
}
</style>