<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!--<todo-header :addTodo="addTodo"/>-->
      <!--<todo-header @addTodo="addTodo"/>-->
      <todo-header ref="header"/>
      <todo-list :todos="todos" :delTodo="delTodo"/>
      <!--<todo-footer :todos="todos" :delCompleteTodos="delCompleteTodos" :selAllTodos="selAllTodos"/>-->
      <todo-footer>
        <input type="checkbox" v-model="isCheck" slot="isCheck"/>
        <span slot="completeSize">已完成{{completeSize}}</span> / 全部{{todos.length}}
        <button class="btn btn-danger" v-show="completeSize" @click="delCompleteTodos" slot="delCompleteTodos">清除已完成任务</button>
      </todo-footer>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import LocalStorageUtil from './util/localStorageUtil'


  export default {
    data() {
      return {
//        todos: JSON.parse(window.localStorage.getItem('todos') || '[]')
        todos: LocalStorageUtil.getTodos()
      }
    },
    computed: {
      completeSize() {
        return this.todos.reduce((prevTotal, todo) => prevTotal + (todo.complete ? 1 : 0), 0)
      },
      isCheck: {
        get() {
          return this.completeSize === this.todos.length && this.completeSize > 0
        },
        set(value) {
          this.selAllTodos(value)
        }
      }
    },
    methods: {
      addTodo(todo) {
        this.todos.unshift(todo)
      },
      delTodo(index) {
        this.todos.splice(index, 1)
      },
      delCompleteTodos() {
        this.todos = this.todos.filter(todo => !todo.complete)
      },
      selAllTodos(isCheck) {
        this.todos.forEach(todo => todo.complete = isCheck)
      }
    },
    mounted() {// 执行异步代码
      // 给<todo-header/>绑定addTodo事件监听
      this.$refs.header.$on('addTodo', this.addTodo)
    },
    watch: {
      todos: {
        deep: true,
        handler: LocalStorageUtil.saveTodos
      }
    },
    components: {
      TodoHeader, TodoList, TodoFooter
    }
  }
</script>

<style>
  /*app*/
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>
