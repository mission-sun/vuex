<template>
  <div id="app">
    <router-view/>

    <h1>vuex 代码测试</h1>
    <div>
      <h1>{{ count }}</h1>
      <!-- <h2>{{ countString }}</h2> -->
    </div>
    <div>
    <button @click="add">+</button>
    <button @click="reduce">-</button>

    <p>
      <button @click="addAction">+</button>
      <button @click="reduceAction">-</button>
    </p>
</div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

// mapState 方便我们快速获取state中的值
// mapMutations 方便我们快速的简化 $store.commit('add') 的方法  可以直接调用

export default {
  name: 'App',
  data(){
    return {
      name:'1212'
    }
  },
  // methods:mapMutations([
  //   'add','reduce'
  // ]),
  methods: {
    ...mapMutations([
      'add','reduce'
    ]),
    ...mapActions([
      'addAction',
      'reduceAction'
    ])
  },


  // store,
  // computed:{
  //   count() {
  //     return this.$store.state.count
  //   }
  // }
  // computed: mapState({
  //   count: state => state.count,
  //   countString: 'count'
  // })

  // 因为computed 中只有一个计算属性

  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
