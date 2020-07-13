<template>
  <ul>
    <li v-for="(news, index) in newsArr" :key="index">{{news}}</li>
  </ul>
</template>

<script>
  export default {
    data() {
      return {
        newsArr: ['News1', 'News2', 'News3']
      }
    }
  }
</script>

<style>

</style>
