import { mount } from '@vue/test-utils'
import selectionButtonGroup from '../../src/components/selectionComponents/selectionButtonGroup.vue'

describe('selectionButtonGroup', () => {
    it('Pressing a button on selection screen changes interval', () => {
        const spy = jest.spyOn(selectionButtonGroup.methods, 'changeInterval')
        const wrapper = mount(selectionButtonGroup)
        wrapper.find('#shortBreak').trigger('click')
        expect(spy).toHaveBeenCalled()
    })
})