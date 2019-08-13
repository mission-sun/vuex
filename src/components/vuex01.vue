<template>
    <div>
        <hr>
        <h1>通过 空间名称 数据处理数据</h1>
        <div>{{ name }}</div>
        <div>初始化的数据{{initData}}</div>
        
        <button @click="changeName">原始方法更改name值</button>

        <button @click="modeifyMapChangeName()">通过辅助函数方式更改name值</button>

        <button @click="actionChange">action事件触发</button>
    </div>
</template>
<script>

import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            // name:'vuex01'
        }
    },
    // 定义的name值和data中的值会有重复
    computed:{
        ...mapState({
            name: state => state.moduleA.name
        }),
        ...mapGetters({
            initData: 'moduleA/initData'
        })
    },
    methods: {
        /*
         *  commit 总结  只有state 具有模块化，其它不具有这个特性
         1、当我们提交 commit 的时候，会提交所有的模块 
         2、当我们想针对某个模块提交的时候 需要 给模块增加 spaceName  此时的commit必须增加空间名称，不然会报错
         */
        changeName() {
            this.$store.commit('moduleA/changeName','change')
            this.$store.commit('moduleA/changeType','03')
        },
        ...mapMutations(
            // ['mapChangeName']
            {call:'moduleA/mapChangeName'}
        ),
        modeifyMapChangeName() {
            // this.mapChangeName('newMapName')
            this.call('newMapName')
            // this.mapChangeName('moduleA/newMapName')
        },
        ...mapActions(
            { modeifyData: 'moduleA/changeData'}
        ),
        actionChange() {
            this.modeifyData()
        } 
    }
}


</script>