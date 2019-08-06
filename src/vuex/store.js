import Vue from 'vue';
import Vuex from 'vuex';
import  PersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

const state = {
  count: 1,
  value: 'vuex 代码测试方法'
}

const mutations = {
  add(state){
    state.count++;
  },
  reduce(state) {
    state.count--;
  }
}
// 可以看成对数据的再次加工
const getters = {
  count: function(state) {
    return state.count += 100
  }
}

// actions 中是异步改动state中的值，其中actions中也可以使用 muations中的值

const actions = {
  addAction(context) {
    setTimeout( () => {
      context.commit('add')
      console.log('我是延迟执行')
    }, 1000)
  },
  reduceAction({commit}) {
    commit('reduce')
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: [PersistedState()]
})
