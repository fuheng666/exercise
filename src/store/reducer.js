import { combineReducers } from 'redux'
import todolist from './todoList/reducer'
import calculator from './calculator/reducer'
const reducer = combineReducers({
  todolist,
  calculator,
});
export default reducer