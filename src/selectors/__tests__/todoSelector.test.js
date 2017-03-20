import { selectTodos } from '../todoSelector'

describe('TodoList Container', () => {
  it('receives todos props from state', () => {
    const state = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    const expectedState = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    expect(selectTodos(state)).toEqual(expectedState);
  })
})
