<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todo-header/>
      <todo-list/>
     <todo-footer/>
    </div>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'
  import TodoList from './components/TodoList.vue'
  import TodoFooter from './components/TodoFooter.vue'
  import LocalStorageUtil from './util/localStorageUtil'

  export default {
    mounted() {
      this.$store.dispatch('getTodos')
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
