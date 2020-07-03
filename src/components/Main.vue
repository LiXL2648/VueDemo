<template>
  <div>
    <h2 v-if="initView">请输入用户名搜索</h2>
    <h2 v-if="loading">LOADING...</h2>
    <h2 v-if="errorMsg">{{errorMsg}}</h2>

    <div class="row">
      <div class="card" v-for="(user, index) in users" :key="index">
        <a :href="user.blogUrl" target="_blank">
          <img :src="user.avatarUrl" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  import Pubsub from 'pubsub-js'
  import Axios from 'axios'
  export default {
    data() {
      return {
        initView: true,
        loading: false,
        errorMsg: '',
        users: null
      }
    },
    mounted() {
      //不能直接在此发送Ajax，需要触发search模块的的点击事件时发送
      //订阅搜索用户的消息
      Pubsub.subscribe('search', (msg, searchText) => {
        // 更新请求状态
        this.initView = false
        this.loading = true
        this.users = null
        this.errorMsg = ''

        const url = `https://api.github.com/search/users?q=${searchText}`
        // 发送Ajax请求
        Axios.get(url).then(
          respone => {
            const users = respone.data.items.map(item => ({
              name: item.login,
              avatarUrl: item.avatar_url,
              blogUrl: item.html_url
            }))

            this.loading = false
            this.users = users

            //显示查找的结果
          }).catch(error => {
            this.loading = false
            this.errorMsg = '请求失败'
        })
      })
    }
  }
</script>

<style>
  .card {
    float: left;
    width: 33.333%;
    padding: .75rem;
    margin-bottom: 2rem;
    border: 1px solid #efefef;
    text-align: center;
  }

  .card > img {
    margin-bottom: .75rem;
    border-radius: 100px;
  }

  .card-text {
    font-size: 85%;
  }
</style>
