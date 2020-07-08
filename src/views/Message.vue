<template>
  <div>
    <ul>
      <li v-for="(message, index) in messageArr" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
        <button @click="pushShow(message.id)">push</button>
        <button @click="replaceShow(message.id)">replace</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <hr/>
    <router-view :messageArr="messageArr"></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        messageArr: []
      }
    },
    methods: {
      pushShow(id) {
        this.$router.push(`/home/message/detail/${id}`)
      },
      replaceShow(id) {
        this.$router.replace(`/home/message/detail/${id}`)
      }
    },
    mounted() {
      setTimeout(() => {
        this.messageArr = [
            {id: 1, title: 'message1', content: 'message1 content'},
            {id: 2, title: 'message2', content: 'message1 content'},
            {id: 3, title: 'message3', content: 'message1 content'},
            {id: 4, title: 'message4', content: 'message1 content'}
          ]
      }, 1000)
    }
  }
</script>

<style>

</style>
