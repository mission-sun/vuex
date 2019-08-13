<template>
    <div>
        <hr />    
        <div @click="emitName">我是组件继承</div>
        <div>{{ propsTitel }}</div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            name:'$emit is amazing'
        }
    },
    props:{
        propsTitel: String
    },
    methods: {
        emitName() {
            this.$emit('changeName', this.name)
        }
    }
}


</script>