<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchText"/>
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
  import Pubsub from 'pubsub-js'
  export default {
    data() {
      return {
        searchText: ''
      }
    },
    methods: {
      searchUsers() {
        // 发布搜索用户的消息
        const searchText = this.searchText.trim()
        if (!searchText) {
          alert('请输入搜索内容')
          return
        }
        Pubsub.publish('search', searchText)
      }
    }
  }
</script>

<style>

</style>
