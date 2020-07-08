<template>
  <div>
    <ul>
      <li v-for="(message, index) in messageArr" :key="message.id">
        <router-link :to="`/home/message/detail/${message.id}`">{{message.title}}</router-link>
      </li>
    </ul>
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
