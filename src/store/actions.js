/*
接收组件通知触发mutations调用间接更新状态方法的对象
 */
import {ADD_TODO, DEL_TODO, SEL_ALL_TODOS, DEL_COMPLETE_TODOS, GET_TODOS} from './mutation_types'
import localStorage from '../util/localStorageUtil'
export default {

  addTodo({commit}, todo) {
    // 提交对mutation的请求
    commit(ADD_TODO, {todo})
  },

  delTodo({commit}, index) {
    commit(DEL_TODO, {index})
  },

  selAllTodos({commit}, value) {
    commit(SEL_ALL_TODOS, {value})
  },

  delCompleteTodos({commit}) {
    commit(DEL_COMPLETE_TODOS)
  },

  getTodos({commit}) {
    setTimeout(() => {
      const todos = localStorage.getTodos()
      commit(GET_TODOS, {todos})
    }, 1000)
  }
}
