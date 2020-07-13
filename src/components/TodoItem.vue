<template>
  <li @mouseenter="isEnter=true" @mouseleave="isEnter=false" :class="{isEnter: isEnter, isLeave: !isEnter}">
    <label>
      <input type="checkbox" v-model="todo.complete"/>
      <span>{{todo.task}}</span>
    </label>
    <button class="btn btn-danger" v-show="isEnter" @click="delItem">删除</button>
  </li>
</template>

<script>
    export default {
      data() {
        return {
          isEnter: false
        }
      },
      methods: {
        delItem() {
          const {todo, index} = this
          if (window.confirm('确定删除任务 ' + todo.task + ' 吗？')) {
            // delTodo(index)
            this.$store.dispatch('delTodo', index)
          }
        }
      },
      props: {
        todo: Object,
        index: Number,
      }
    }
</script>

<style>
  /*item*/
  li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
  }

  li label {
    float: left;
    cursor: pointer;
  }

  li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
  }

  li button {
    float: right;
    display: none;
    margin-top: 3px;
  }

  li:before {
    content: initial;
  }

  li:last-child {
    border-bottom: none;
  }
  li.isEnter {
    background-color: darkgray;
  }
  li.isLeave {
    background-color: white;
  }
</style>
