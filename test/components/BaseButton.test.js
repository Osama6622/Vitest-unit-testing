import { shallowMount } from '@vue/test-utils'
import { expect, it, describe } from 'vitest'
import BaseButton from '../../src/components/BaseButton.vue'
import { BUTTON_TYPE_PRIMARY, BUTTON_TYPE_SUCCESS, BUTTON_TYPE_WARNING, BUTTON_TYPE_DANGER, BUTTON_TYPE_NEUTRAL } from '../../src/constants'

describe('BaseButton Component', () => {
  it("renders 'primary' button by default", () => {
    const label = 'Label'
    const primaryButtonClasses = 'bg-purple-500 enabled:hover:bg-purple-600 text-white'

    const wrapper = shallowMount(BaseButton, {
      slots: { default: label }
    })

    expect(wrapper.text()).toContain(label)
    expect(wrapper.classes()).toEqual(expect.arrayContaining(primaryButtonClasses.split(' ')))
  })

  const buttonTypes = [
    {
      type: BUTTON_TYPE_PRIMARY,
      classes: 'bg-purple-500 enabled:hover:bg-purple-600 text-white'
    },
    {
      type: BUTTON_TYPE_SUCCESS,
      classes: 'bg-green-500 enabled:hover:bg-green-600 text-white'
    },
    {
      type: BUTTON_TYPE_WARNING,
      classes: 'bg-yellow-500 enabled:hover:bg-yellow-600 text-white'
    },
    {
      type: BUTTON_TYPE_DANGER,
      classes: 'bg-red-500 enabled:hover:bg-red-600 text-white'
    },
    {
      type: BUTTON_TYPE_NEUTRAL,
      classes: 'bg-gray-100 enabled:hover:bg-gray-200'
    }
  ]

  buttonTypes.forEach(({ type, classes }) => {
    it(`renders ${type} button with label`, () => {
      const label = 'Label'

      const wrapper = shallowMount(BaseButton, {
        props: { type },
        slots: { default: label }
      })
      expect(wrapper.html()).toContain(label)
      expect(wrapper.text()).toContain(label)
      expect(wrapper.classes()).toEqual(expect.arrayContaining(classes.split(' ')))
    })
  })
})
