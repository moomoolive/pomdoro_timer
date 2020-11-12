<template>
    <div :class="'timeDisplay ' + backgroundColor">
        <div class="container">
            <div class="icon">
                <i :class="icon" style="color: white;"></i>
            </div>
            <div class="timer">
                {{ minutes }} : {{ seconds }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "timeIndicator",
    data() {
        return {
            backgroundColor: '',
            icon: '',
            minutes: 10,
            seconds: '00',
            nextInterval: '',
            isMounted: false,
            isDestroyed: false,
            originalTime: 0
        }
    },
    methods: {
        countDown() {
            const x = setInterval(() => {
                if (this.appMode === 'selection' || !this.isPlaying || this.isDestroyed) {
                    clearInterval(x)
                    return
                }
                let secs = parseInt(this.seconds)
                if (secs === 0 && this.minutes !== 0) {
                    this.seconds = '59'
                    this.minutes--
                }
                else if (this.minutes === 0 && this.seconds === '00') {
                    this.$store.dispatch('changeInterval', this.nextInterval)
                    this.$emit('timer-finished', 'timeFinished')
                    clearInterval(x)
                } else {
                    const k = secs - 1 < 10? `0${secs - 1}` : `${secs - 1}`
                    this.seconds = k
                }
            }, 1000)
        }
    },
    computed: {
        isPlaying() {
            if (this.isMounted) return this.$parent.play
        },
        appMode() {
        return this.$store.state.mode
        },
        timeLeftFraction() {
            const totalTime = this.originalTime * 60
            const timeNow = (this.minutes * 60) + parseInt(this.seconds)
            return Math.round((timeNow/totalTime) * 100)
        }
    },
    watch: {
        isPlaying() {
            this.countDown()
        } 
    },
    created() {
        const times = this.$store.state.timeIntervals
        const currentInterval = this.$store.state.timeIntervalSelect
        this.minutes = this.originalTime = times[currentInterval]
        switch(currentInterval) {
                case 'workInterval':
                    this.backgroundColor = 'workInterval'
                    this.icon = 'fas fa-briefcase'
                    this.nextInterval = 'shortBreak'
                    break
                case 'shortBreak':
                    this.backgroundColor = 'shortBreak'
                    this.icon = "fas fa-coffee"
                    this.nextInterval = 'workInterval'
                    break
                case 'longBreak':
                    this.backgroundColor = 'longBreak'
                    this.icon = "fas fa-bed"
                    this.nextInterval = 'workInterval'
                    break 
        }
    },
    mounted() {
        this.isMounted = true
    },
    beforeDestroy() {
        this.isDestroyed = true
        if (this.icon === "fas fa-coffee")this.$store.dispatch('updateCurrentSession', 1)
    }
}
</script>

<style lang="scss" scoped>
.timeDisplay {
    width: 60vh;
    height: 97%;
    position: relative;
    top: 1%;
    margin: 0 auto;
    border-radius: 50%;
    border-style: solid;
    border-color: gray;
    border-width: 0.2vh;
    &.workInterval{background: $secondaryColor}
    &.shortBreak{background: $primaryColor;}
    &.longBreak{background: $tertiaryColor;}
}

.container {
    height: 40%;
    position: relative;
    top: 9%;
}

.timer{
    text-align: center;
    color: white;
    font-weight: bold;
    font-size: 5vh;
}

.icon {
    position: relative;
    top: 40%;
    text-align: center;
    font-size: 10vh;
}
</style>