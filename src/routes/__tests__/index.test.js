import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'
import Routes from '../../routes'

describe("Routes", () => {
  it('should render TodoApp if path is /', () => {
    const component = shallow(
      <Router initialEntries={['/']}>
        <Routes />
      </Router>
    )
    // expect().toEqual()
  })
})
