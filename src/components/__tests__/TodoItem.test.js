import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

// Describe what to test
describe('TodoItem', () => {
  let component
  beforeEach(() => {
    component = shallow(<TodoItem text="Not Complete" />)
  })
  // Test Scenario
  it('match its snapshot - not complete', () => {
    expect(component).toMatchSnapshot()
  })

  it('match its snapshot - complete', () => {
    component.setProps({ complete: true }, { text: 'Hello' })
    expect(component).toMatchSnapshot()
  })

  it('render correct structure', () => {
    expect(component.is('li')).toBe(true)
  })

  it('has complete class if receive complete props', () => {
    component.setProps({ complete: true, text: 'Hello' })
    expect(component.hasClass('complete')).toBe(true)
    expect(component.text()).toBe('Hello')
  })
})

