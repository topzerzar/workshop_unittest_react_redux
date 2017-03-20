import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import 'isomorphic-fetch'
import { fetchTodos } from '../todos'
import { FETCH_TODOS_SUCCESS } from '../types'

describe('Todos actions', () => {
  describe('Async fetch todos', () => {
    afterEach(() => nock.cleanAll())

    it('creates FETCH_TODOS_SUCCESS action', () => {
      nock('http://localhost:3000/')
      .get('/api/Todos')
      .reply(200, [{ id: 1, text: 'Hello', complete: false }])

      const expectedActions = [{
        type: FETCH_TODOS_SUCCESS,
        payload: [{ id: 1, text: 'Hello', complete: false }],
      }]
      const createStore = configureMockStore([thunk])
      const store = createStore()

      store.dispatch(fetchTodos())
        .then(() => expect(store.getActions()).toEqual(expectedActions))
    })
  })
})
