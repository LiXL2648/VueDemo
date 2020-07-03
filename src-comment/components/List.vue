<template>
    <div>
      <div class="col-md-8">
        <h3 class="reply">评论回复：</h3>
        <h2 v-show="comments.length === 0">暂无评论，点击左侧添加评论！！！</h2>
        <ul class="list-group">
          <Item v-for="(comment, index) in comments" :key="index" :comment="comment" :delComment="delComment" :index="index"/>
        </ul>
      </div>
    </div>
</template>

<script>
    import Item from './Item.vue'
    export default {
      components: {
        Item
      },
      props: ['comments', 'delComment']// 声明接收属性，只指定属性名
    }
</script>

<style>
  .reply {
    margin-top: 0px;
  }
</style>
