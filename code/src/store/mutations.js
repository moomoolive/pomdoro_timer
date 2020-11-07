import state from './state.js'

export default {
    changeInterval(state, payload) {
        state.timeIntervalSelect = payload
    }
}