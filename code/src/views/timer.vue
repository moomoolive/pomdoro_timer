<template>
    <div>
        <pop-up
        v-if="audio.state"
        contents="sound"
        :soundMessage="titleMessages.cachedMessage"
        @stop-audio="audio.state = false"
        />
        <div style="height: 8%;">
            <sessions-indicator />
        </div>
        <div style="height: 70%; z-index: 0; position:relative; margin-top: 1%;">
            <time-indicator
            v-if="showIndicator"
            @timer-finished="events"
            />
        </div>
        <div style="height: 13%; z-index: 3; position:relative; margin-top: 2%;">
            <clock-button-group
            v-if="showButtons" 
            @rerender="events"
            />
        </div>
    </div>
</template>

<script>
import clockButtonGroup from '../components/clockComponents/clockButtonGroup.vue'
import sessionsIndicator from '../components/clockComponents/sessionsIndicator.vue'
import timeIndicator from '../components/clockComponents/timeIndicator.vue'
import { Howl, Howler } from 'howler'

export default {
    name: 'timer',
    components: {
        clockButtonGroup,
        sessionsIndicator,
        timeIndicator,
        popUp: () => import('../components/commonComponents/popUp.vue')
    },
    data() {
        return {
            showIndicator: true,
            showButtons: true,
            play: true,
            nextInterval: '',
            titleMessages: {
                longBreak: 'Long Break Finished!',
                shortBreak: 'Short Break Finished!',
                workInterval: 'Work Session Finished!',
                cachedMessage: ''
            },
            audio: {
                state: false,
                repeated: 0
            }
        }
    },
    methods: {
        rerender(component) {
            this[component] = false
            this.$nextTick(() => {
                    this[component] = true
                })
        },
        incrementSession(number) {
            this.$store.dispatch('updateCurrentSession', number) 
        },
        notifyMe() {
            if (Notification !== "denied" ) Notification.requestPermission()
            if (Notification.permission === "granted") {
                const notification = new Notification(
                    this.titleMessages.cachedMessage,
                    {tag: this.audio.repeated}
                )
            }
        },
        events(value) {
            if (value === 'changeInterval') {
                this.rerender('showIndicator')
                this.play = true
                if (this.nextInterval === 'workInterval') this.incrementSession(1)
            }
            else if (value === 'pause/play') {
                this.play = !this.play
            }
            else if (value === "timeFinished") {
                document.title = this.titleMessages[this.currentInterval]
                this.$store.dispatch('changeInterval', this.nextInterval)
                this.play = false
                this.rerender('showIndicator')
                this.audio.state = true
                if (this.nextInterval === 'workInterval') this.incrementSession(1)
            }
        }
    },
    computed: {
        isLastSession() {
            return this.$store.getters.isLastSession
        },
        audioState() {
            return this.audio.state
        },
        audioFile() {
            return this.$store.state.sound.audio
        },
        currentInterval() {
            return this.$store.state.timeIntervalSelect
        }
    },
    watch: {
        currentInterval(newValue, oldValue) {
            this.titleMessages.cachedMessage = this.titleMessages[oldValue]
            switch(newValue) {
                case 'workInterval':
                    if (this.isLastSession) this.nextInterval = 'longBreak'
                    else this.nextInterval = 'shortBreak'
                    break
                case 'longBreak':
                case 'shortBreak':
                    this.nextInterval = 'workInterval'
                    break
            }
        },
        audioState() {
            const x = setInterval(() => {
                if (this.audio.state && this.audio.repeated < 3 ) {
                    this.notifyMe()
                    this.audio.repeated++
                    this.audioFile.play()
                }
                else {
                    clearInterval(x)
                    this.audio.state = false
                    this.audio.repeated = 0
                }
            }, 20_000)
        }
    },
    created() {
        this.$store.dispatch('changeInterval', 'workInterval')
        this.nextInterval = 'shortBreak'
    }
}
</script>

<style lang="scss" scoped>
.soundPopup {
    height: 20%;
    width: 50%;
    margin-top: 3%;
    margin-left: 18%;
    background: gray;
    border: black solid;
    border-radius: 5%;
    text-align: center;
}
</style>