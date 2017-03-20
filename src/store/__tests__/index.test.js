import { createStore } from '../'
import todosReducer from '../../reducers/todosReducer'
import { ADD_TODO } from '../../actions/types'

describe('store', () => {
  let store

  beforeEach(() => {
    store = createStore()
  })

  it('has correct default state of the root reducer', () => {
    expect(store.getState().todos).toEqual(todosReducer(undefined, {}))
  })
})
