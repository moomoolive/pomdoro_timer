import state from './state.js'

export default {
    changeInterval(state, payload) {
        state.timeIntervalSelect = payload
    },
    changeAppmode(state, mode) {
        state.mode = mode
    },
    incrementSesssionNumber(state, number) {
        state.timeIntervals.workSessions += number
    },
    updatedSelectedTime(state, payload) {
        state.timeIntervals[payload.interval] = payload.time
    },
    screenSize(state, boolean) {
        state.smallScreen = boolean
    },
    updateCurrentSession(state, value) {
        state.timeIntervals.currentSession += value
    },
    setDefaults(state, payload) {
        state.timeIntervals.shortBreak = payload.shortBreak
        state.timeIntervals.workInterval = payload.workInterval
        state.timeIntervals.longBreak = payload.longBreak
        state.timeIntervals.workSessions = payload.workSessions
    },
    changeSound(state, name) {
        state.sound.name = name 
        switch(name) {
            case 'Trumpet':
                state.sound.audio = new Audio(require('../assets/military-trumpet.mp3'))
                break
            case 'Cat':
                state.sound.audio = new Audio(require('../assets/cat-meowing.mp3'))
                break
            case 'Cucko-clock':
                state.sound.audio = new Audio(require('../assets/cuckoo-clock.mp3'))
                break
        }
    }
}