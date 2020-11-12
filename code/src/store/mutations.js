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
    }
}