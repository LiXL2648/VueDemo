<template>
  <ul>
    <li>id: {{message.id}}</li>
    <li>title: {{message.title}}</li>
    <li>content: {{message.content}}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        message: {}
      }
    },

    props: {
      messageArr: Array
    },

    mounted() {
      setTimeout(() => {
        const id = this.$route.params.id * 1// id可能是个文本
        this.message = this.messageArr.find(detail => detail.id === id)
      }, 1000)
    },

    watch: {
      $route: function(value) {
        const id = value.params.id * 1// id可能是个文本
        this.message = this.messageArr.find(detail => detail.id === id)
      }
    }
  }
</script>

<style>

</style>
