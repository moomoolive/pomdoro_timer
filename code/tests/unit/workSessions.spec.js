import { shallowMount, createLocalVue } from '@vue/test-utils'
import workSessions from '../../src/components/selectionComponents/workSessions.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('workSessions', () => {
    let store
    let state

    beforeEach(() => {
        state = {
            timeIntervals: {
                workSessions: "0"
            }
        }
        store = new Vuex.Store({ state })
    })

    it('work session display mirrors vuex work sessions', () => {
        const wrapper = shallowMount(workSessions, { localVue, store })
        expect(wrapper.find('.displayText').text()).toEqual(state.timeIntervals.workSessions)
    })
})