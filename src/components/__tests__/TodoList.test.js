import React from 'react'
import { shallow } from 'enzyme'
import TodoList from '../TodoList'

// Describe what to test
describe('TodoItem', () => {
  let component
  let props
  beforeEach(() => {
    props = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    component = shallow(<TodoList {...props} />)
  })
  // Test Scenario
  it('matches its snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('render correct structure', () => {
    expect(component.is('ul')).toBe(true)
    expect(component.hasClass('todo-list')).toBe(true)
  })

  it('renders TodoItem from props', () => {
    expect(component.find('TodoItem').length).toBe(props.todos.length)
  })
})

