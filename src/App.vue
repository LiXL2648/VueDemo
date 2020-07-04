<template>
  <mt-button type="primary" style="width: 100%" @click.native="handleClick">Test</mt-button>
</template>

<script>
  import {Toast} from 'mint-ui'
  export default {
    methods: {
      handleClick() {
        Toast("Test")
      }
    }
  }
</script>

<style>

</style>
