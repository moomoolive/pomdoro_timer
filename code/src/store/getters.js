import state from './state.js'

export default {
    sessionUntilBreak(state) {
        return state.timeIntervals.workSessions - state.sessionNumber
    }
}