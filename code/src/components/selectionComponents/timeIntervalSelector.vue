<template>
    <div :class="'selector ' + selectorColor">
        <div style="grid-row: 1; grid-column: 1;">
            <div style="height: 40%;">
                <selection-button :text="roundUp(1)" id="time1" @click.native="updateTimeInterval(roundUp(1))" />
            </div>
            <div style="height: 40%;">
                <selection-button :text="roundUp(2)" id="time2" @click.native="updateTimeInterval(roundUp(2))" />
            </div>
            <div>
                <interval-timing-display id="display" />
            </div>
        </div>
        <div style="grid-row: 1; grid-column: 2;">
            <div style="height: 40%;">
                <selection-button :text="roundUp(3)" id="time3" @click.native="updateTimeInterval(roundUp(3))" />
            </div>
            <div style="height: 40%;">
                <p class="selectorMessage">{{ selectorMessage }}</p>
            </div>
        </div>
        <div style="grid-row: 1; grid-column: 3;">
            <div style="height: 40%;">
                <selection-button :text="roundUp(4)" id="time4" @click.native="updateTimeInterval(roundUp(4))" />
            </div>
            <div style="height: 40%;">
                <selection-button :text="roundUp(5)" id="time5" @click.native="updateTimeInterval(roundUp(5))" />
            </div>
        </div>
        <div style="grid-row: 2; grid-column: 1;">
            <div style="height: 40%;">
                <selection-button :text="roundUp(6)" id="time6" @click.native="updateTimeInterval(roundUp(6))"  />
            </div>
        </div>
        <div class="middleGrid">
            <selection-button icon="fas fa-play" @click.native="play" />
        </div>
        <div style="grid-row: 2; grid-column: 3;">
            <div style="height: 40%;">
                <selection-button :text="roundUp(7)" id="time7" @click.native="updateTimeInterval(roundUp(7))" />
            </div>
        </div>
        <div style="grid-row: 3; grid-column: 1;">
            <div style="height: 40%;">
                <selection-button :text="roundUp(12)" id="time12" @click.native="updateTimeInterval(roundUp(12))" />
            </div>
            <div style="height: 40%;">
                <selection-button :text="roundUp(11)" id="time11" @click.native="updateTimeInterval(roundUp(11))" />
            </div>
        </div>
        <div style="grid-row: 3; grid-column: 2;">
            <div style="height: 40%;">
                <selection-button :text="roundUp(10)" id="time10" @click.native="updateTimeInterval(roundUp(10))" />
            </div>
        </div>
        <div style="grid-row: 3; grid-column: 3;">
            <div style="height: 40%;">
                <selection-button :text="roundUp(8)" id="time8" @click.native="updateTimeInterval(roundUp(8))"  />
            </div>
            <div style="height: 40%;">
                <selection-button :text="roundUp(9)" id="time9" @click.native="updateTimeInterval(roundUp(9))"  />
            </div>
        </div>
    </div>
</template>

<script>
import selectionButton from '../commonComponents/selectionButton.vue'
import intervalTimingDisplay from '../selectionComponents/intervalTimingDisplay.vue'

export default {
    name: 'timeIntervalSelector',
    components: {
        selectionButton,
        intervalTimingDisplay
    },
    data() {
        return {
            selectorColor: 'purple',
            selectorMessage: 'Work Time',
            scaleFactor: 5
        }
    },
    methods: {
        play() {
            this.$store.dispatch('changeAppMode', 'clock')
        },
        roundUp(value) {
            return Math.round(this.scaleFactor * value)
        },
        updateTimeInterval(timeValue) {
            const payload = {
                interval: this.intervalSelected,
                time: timeValue
                }
            this.$store.dispatch('updatedSelectedTime', payload)
        }
    },
    computed: {
        intervalSelected() {
            return this.$store.state.timeIntervalSelect
        }
    },
    watch: {
        intervalSelected() {
            switch(this.intervalSelected) {
                case 'workInterval':
                    this.selectorColor = 'purple'
                    this.scaleFactor = 5
                    this.selectorMessage = 'Work Time'
                    break
                case 'shortBreak':
                    this.selectorColor = 'green'
                    this.scaleFactor = 1
                    this.selectorMessage = 'Short Break'
                    break
                case 'longBreak':
                    this.selectorColor = 'brown'
                    this.scaleFactor = 7.5
                    this.selectorMessage = 'Long Break'
                    break 
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.selector {
    width: 60vh;
    height: 97%;
    position: relative;
    top: 1%;
    margin: 0 auto;
    border-radius: 50%;
    display: grid;
    grid-template-rows: repeat(3, 33.3%);
    grid-template-columns: repeat(3, 33.3%);
    border-style: solid;
    border-color: gray;
    border-width: 0.2vh;
    &.purple{background: $secondaryColor}
    &.green{background: $primaryColor;}
    &.brown{background: $tertiaryColor;}
}

.middleGrid {
    grid-row: 2;
    grid-column: 2;
    text-align: center;
    position: relative;
    top: 5%;
}

.selectorMessage {
    position: relative;
    top: 90%;
    text-align: center;
    font-weight: bold;
    color: white;
    font-size: 3vh;
}

#display {
    position: relative;
    left: -90%;
    top: -40%;
}

#time1 {
    position: relative;
    left: 22%;
    top: 155%;
}

#time2 {
    position: relative;
    left: 65%;
    top: -50%;
}

#time3 {
    text-align: center;
    position: relative;
    top: 1.5%;
}

#time4 {
    position: relative;
    right: -0%;
    top: 50%;
}

#time5 {
    position: relative;
    right: -43%;
    top: 50%;
}

#time6 {
    position: relative;
    top: 70%;
    left: 1.5%;
}

#time7 {
    position: relative;
    top: 70%;
    right: -67%;
}

#time8 {
    position: relative;
    right: -45%;
    top: 5%;
}

#time9 {
    position: relative;
    right: -0%;
    top: 13%;
}

#time10 {
    text-align: center;
    position: relative;
    top: 157%;
}

#time11 {
    position: relative;
    left: 65%;
    top: 8%;
}

#time12 {
    position: relative;
    left: 23%;
    top: 5%;
}
</style>