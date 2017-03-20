import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import {
  selectTodos,
} from '../selectors/todoSelector'


export default connect(selectTodos)(TodoList)
