const TODO_KEY = 'todos'
export default {
  saveTodos(todos) {
    window.localStorage.setItem(TODO_KEY, JSON.stringify(todos))
  },
  getTodos() {
    return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]')
  }
}
