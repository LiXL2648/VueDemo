/*
包含多个由action触发mutation直接更新状态的方法对象
 */
import {ADD_TODO, DEL_TODO, SEL_ALL_TODOS, DEL_COMPLETE_TODOS, GET_TODOS} from './mutation_types'

export default {
  [ADD_TODO](state, {todo}) {
    state.todos.unshift(todo)
  },

  [DEL_TODO](state, {index}){
    state.todos.splice(index, 1)
  },

  [SEL_ALL_TODOS](state, {value}) {
    state.todos.forEach(todo => todo.complete = value)
  },

  [DEL_COMPLETE_TODOS](state) {
    state.todos = state.todos.filter(todo => !todo.complete)
  },

  [GET_TODOS](state, {todos}) {
    state.todos = todos
  }
}
