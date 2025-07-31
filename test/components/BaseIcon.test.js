import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BaseIcon from '../../src/components/BaseIcon.vue'
import { ICONS } from '../../src/icons'

describe('BaseIcon Component', () => {
  it('renders icon with default class', () => {
    const wrapper = mount(BaseIcon, {
      props: { name: 'CheckCircle' }
    })

    expect(wrapper.classes()).toContain('h-8')
  })

  it('renders icon with custom classes', () => {
    const classes = 'h-12 text-purple-600'

    const wrapper = mount(BaseIcon, {
      attrs: { class: classes },
      props: { name: 'CheckCircle' }
    })

    expect(wrapper.classes().join(' ')).toBe(classes)
  })

  // Snapshot for each icon
  Object.keys(ICONS).forEach((name) => {
    it(`renders ${name} icon`, () => {
      const wrapper = mount(BaseIcon, {
        props: { name }
      })

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

})
