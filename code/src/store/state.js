export default {
    timeIntervals: {
        shortBreak: 5,
        workInterval: 25,
        longBreak: 30,
        workSessions: 4,
        currentSession: 1
    },
    mode: 'selection',
    timeIntervalSelect: 'workInterval',
    smallScreen: false,
    sound: {
        audio: new Audio(require('../assets/cuckoo-clock.mp3')),
        name: 'Cucko-clock'
    }
}