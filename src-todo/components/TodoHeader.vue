<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="task" @keyup.enter="addItem"/>
      </div>
</template>

<script>
    export default {
      data() {
        return {
          task : ''
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
        addItem() {
          const task = this.task.trim()
          if (!task) {
            alert('输入任务不能为空')
            return
          }
          const todo = {task: task, complete: false}
//          this.addTodo(todo)
          this.$emit('addTodo', todo)
          this.task = ''
        }
      },
      props: {
        addTodo: Function
      }
    }
</script>

<style>
  /*header*/
  .todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
  }

  .todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>
