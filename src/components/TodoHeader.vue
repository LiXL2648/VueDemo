<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="task" @keyup.enter="addItem"/>
      </div>
</template>

<script>
    export default {
      data() {
        return {
          task : ''// 组件内部使用的状态，不存在共享的问题，不需要使用vuex管理
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
          this.$store.dispatch('addTodo', todo);
//          this.addTodo(todo)
//          this.$emit('addTodo', todo)
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
