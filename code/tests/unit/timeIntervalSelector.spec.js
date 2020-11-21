import { shallowMount, createLocalVue, mount } from '@vue/test-utils'
import timeIntervalSelector from '../../src/components/selectionComponents/timeIntervalSelector.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('timeIntervalSelector', () => {
    let store
    let state

    state = {
        timeIntervalSelect: 'workInterval',
        smallScreen: true
    }
    store = new Vuex.Store({ state })

    it('Correct message corresponding to selected interval', () => {
        const wrapper = shallowMount(timeIntervalSelector, { localVue, store })
        expect(wrapper.vm.selectorMessage).toBe('Work Session')
        expect(wrapper.vm.selectorColor).toBe('purple')
    })

    it('Pressing play button triggers clock component to load', () => {
        const wrapper = mount(timeIntervalSelector, { localVue, store })
        wrapper.find('#playButton').trigger('click')
        expect(wrapper.emitted().play).toBeTruthy()
    })

    it('Small screen hides Timing Display', () => {
        const wrapper = mount(timeIntervalSelector, { localVue, store })
        expect(wrapper.find('#display').exists()).toBeFalsy()
    })
})