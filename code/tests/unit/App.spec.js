import { shallowMount, createLocalVue } from '@vue/test-utils'
import App from '../../src/App.vue'
import Vuex from 'vuex'
jest.mock("@/components/commonComponents/sounds")

const localVue = createLocalVue()
localVue.use(Vuex)

describe('App', () => {
    let state
    let store

    beforeEach(() => {
        state = {
            mode: jest.fn()
        }
        store = new Vuex.Store({ state })
    })

    it('Selection component rendered and NOT clock on app creation', () => {
        const wrapper = shallowMount(App, {store, localVue})
        expect(wrapper.vm.showSelection).toBe(true)
        expect(wrapper.vm.showClock).toBe(false)
    })

    it('Default user settings retrieved on app creation', () => {
        const spy = jest.spyOn(App.methods, 'getUserSettings')
        const wrapper = shallowMount(App, {store, localVue})
        expect(spy).toHaveBeenCalled()
    })

    it('Check screen size of incoming device on app creation', () => {
        const spy = jest.spyOn(App.methods, 'checkSmallScreen')
        const wrapper = shallowMount(App, {store, localVue})
        expect(spy).toHaveBeenCalled()
    })
})

