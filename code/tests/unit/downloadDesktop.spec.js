import downloadDesktop from '../../src/components/headerComponents/downloadDesktop.vue'
import { mount } from '@vue/test-utils'

describe('This component is a dropdown menu to download the desktop App', () => {

    it('Download is initiated when either button is clicked', async () => {
        const spy = jest.spyOn(downloadDesktop.methods, 'close')
        const wrapper = mount(downloadDesktop)
        const downloadWindowsButton = wrapper.find('#windows')
        await downloadWindowsButton.trigger('click')
        expect(spy).toHaveBeenCalled()
    })
})