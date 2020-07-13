<template>
  <div>
    <p>click <!--{{$store.state.count}}-->{{count}} times, count is <!--{{$store.getters.oddOrEven}}-->{{oddOrEven}}</p>
    <button @click="increment">increment</button>
    <button @click="decrement">decrement</button>
    <button @click="incrementIfOdd">increment if odd</button>
    <button @click="incrementAsync">increment async</button>
  </div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  export default {

    computed: {
//      oddOrEven: function () {
//        //return this.count % 2 === 0 ? '偶数' : '奇数'
//        return this.$store.getters.oddOrEven
//      }
      ...mapState(['count']),
      ...mapGetters(['oddOrEven'])//mapGetters(['oddOrEven']) 的返回值：{oddOrEven() {return this.$store.getters.oddOrEven}}
    },
    methods: {
      ...mapActions(['increment', 'decrement', 'incrementIfOdd', 'incrementAsync'])
      // 增加
      /*increment() {
        // ++this.count
        this.$store.dispatch('increment')
      },*/

      //减少
      /*decrement() {
        // --this.count
        this.$store.dispatch('decrement')
      },*/

      // 如果是奇数就增一
      /*incrementIfOdd() {
//        if (this.count % 2 === 1) {
//          ++this.count
//        }
        this.$store.dispatch('incrementIfOdd')
      },*/

      // 异步增一
      /*incrementAsync() {
//        setTimeout(() => {
//          ++this.count
//        }, 1000)
        this.$store.dispatch('incrementAsync')
      }*/
    }
  }
</script>

<style>

</style>
