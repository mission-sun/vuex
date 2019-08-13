<template>
  <div id="app">
    <router-view/>

    <!-- <h1>vuex 代码测试</h1> -->
    <!-- <div>
      <Vuex01 />
      <Vuex02 />
      <Com :propsTitel="name"  @changeName='getChildData' />
      <MySlot>
        <div style="color:red"> 我是颜色一</div>
      </MySlot>
      <MySlot>
        <div style="color:blue"> 我是颜色二</div>
      </MySlot>
    </div> -->
    <div>
</div>
  </div>
</template>

<script>

import Vuex01 from './components/vuex01'
import Vuex02 from './components/vuex02'
import Com from './components/com'
import MySlot from './components/mySlot'
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
  components: {
    Vuex01,
    Vuex02,
    Com,
    MySlot
  },
  // methods:mapMutations([
  //   'add','reduce'
  // ]),
  methods: {
    // ...mapMutations([
    //   'add',
    //   'reduce'
    // ]),
    // ...mapActions([
    //   'addAction',
    //   'reduceAction'
    // ])
    getChildData(data) {
      this.name = data;
      console.log('data', data)
    }
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
    // count() {
    //   console.log('store', this.$store.state)
    //   return this.$store.state.moduleA.count
    // },
    // ...mapState({
    //   // count:state => state.moduleA.count
    // }),
    // ...mapState('moudleA',{
    //   count: state => state.moduleA.count
    // })
    // ...mapGetters(['count']
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
