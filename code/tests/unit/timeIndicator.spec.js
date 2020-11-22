import timeIndicator from '../../src/components/clockComponents/timeIndicator.vue'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('timeIndicator', () => {
    let store
    let state
    let actions

    beforeEach(() => {
        state = {
            nextInterval: jest.fn(),
            timeIntervalSelect: 'workInterval',
            timeIntervals: {
                workInterval: 25
            }
        }
        actions = {
            changeInterval: jest.fn()
        }
        store = new Vuex.Store({ state, actions })
    })

    it('The passing of a second changes timer display', async () => {
        const spy = jest.spyOn(timeIndicator.computed, 'iconSrc')
        const wrapper = shallowMount(timeIndicator, { store, localVue })
        await wrapper.setData({ stopWatch: 1})
        await localVue.nextTick()
        expect(wrapper.vm.time.minutes).toBe(24)
        wrapper.setData({ stopWatch: 2 })
        const timeDisplayAfter = wrapper.vm.seconds
        expect(timeDisplayBefore > timeDisplayAfter).toBeTruthy()
    })
})