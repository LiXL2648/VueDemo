<template>
  <div>
    <div v-if="!repoUrl">Loading...</div>
    <div v-else>The most popular repositories is <a :href="repoUrl">{{repoName}}</a></div>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    data() {
      return {
        repoName: '',
        repoUrl: ''
      }
    },
    mounted() {
      const url = 'https://api.github.com/search/repositories?q=v&sort=stars'
      /*this.$http.get(url).then(
        respone => {
          const result = respone.data
          const repo = result.items[0]
          this.repoName = repo.name
          this.repoUrl = repo.html_url
        },
        respone => {
          alert('访问失败')
        }
      )*/

      Axios.get(url).then(
        respone => {
          const result = respone.data
          const repo = result.items[0]
          this.repoName = repo.name
          this.repoUrl = repo.html_url
        }
      ).catch(error => {
        alert('访问失败')
      })
    }
  }
</script>

<style>

</style>
