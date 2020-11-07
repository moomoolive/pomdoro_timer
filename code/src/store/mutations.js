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
    }
}