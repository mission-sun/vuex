import Vue from 'vue';
import Vuex from 'vuex';
import  PersistedState from 'vuex-persistedstate';
// import moduleA  from './moduleA.js';


// console.log('moduleA', moduleA)


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
// 可以看成对数据的再次加工,调用时候对数据的加工操作
const getters = {
  count: function(state) {
    return state.count += 100
  }
}

// actions 中是异步改动state中的值，其中actions中也可以使用 muations中的值

const actions = {
  addAction(context) {
    console.log('context', context)
    setTimeout( () => {
      context.commit('add')
      console.log('我是延迟执行')
    }, 1000)
  },
  reduceAction({commit}) {
    // 异步数据同步化，将所有数据都放到同步中处理
    commit('reduce')
  }
}


const moduleA = {
  namespaced:true,
  state: {
    name: 'vue01',
    type: '01'
  },
  mutations: {
    mapChangeName(state, payload) {
      state.name = payload
    },
    changeName(state, newName) {
      state.name = newName
    },
    changeType(state, newType) {
      state.type = newType
    }
  },
  getters:{
    initData: state => {
      state.name = 'initName'
      return state
    }
  },
  actions: {
    changeData() {
      console.log('我是异步信息')
    }
  }
}

const moduleB = {
  state: {
    name: 'vue02',
    type: '02'
  }
}
export default new Vuex.Store({
  modules: {
    moduleA,
    moduleB
  }
})

// export default new Vuex.Store({
//   state,
//   mutations,
//   getters,
//   actions,
//   plugins: [PersistedState()]
// })




