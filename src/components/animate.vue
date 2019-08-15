<template>
    <div>
        <h3>缓慢动画</h3>
        <p>
            值得注意的是 过渡（基本hover）和动画( animate )的区别
        </p>

        <p>基本要素
            <br />
            过渡: transition  transform
            <br/>
            动画: @keyframe   animation
        </p>
        <div class="box">
            我是元素内的内容
        </div>

        <!-- <div class="animate">
            动画元素
        </div> -->

        <!-- 实现过渡效果第一种方式通过 transition -->
        <!-- 这种方法比较简单代码量也是比较少的 -->

        <!-- <button @click="showWindow">click me</button>
        <div  class="contain" :class="[isShow ? 'animation-show' : 'animation-hide' ]"> -->

        <!-- 第二种使用动画的方式 -->

        <button @click="showWindow">click me</button>
        <div  class="contain" :class="[isShow ? 'animation-show' : 'animation-hide' ]">


        </div>

        
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isShow: true
            }
        },
        methods: {
            showWindow() {
                this.isShow = !this.isShow
            }
        }
    }


</script>

<!-- <style lang="scss"> -->
<style lang='scss' scoped>


    /**
        animation

        过渡效果和动画的区别

        1、初始化有个动画效果的一般都是通过动画实现的
        2、动画可配置性白较高，但是写法相对比较复杂
        3、动画只是一个动画效果，动画结束后，还会恢复到到初始属性值

        transition
        过渡效果相对比较简单、更改的是元素的实际的属性值, 元素结束后，实际动画属性就此变更
    /


    /* 通过动画实现过渡效果 */
    .contain {
        position: absolute;
        left: 0;
        right:0;
        bottom: 0;
        width: 100%;
        height: 300px;
        background: yellowgreen;
    }
    .animation-hide {
        animation: animateHidden 0.5s ;
        height: 0px;
    }

    .animation-show {
        animation: animationShow 0.5s;
        height: 300px;
    }
    @keyframes animationShow {
        from { height: 0px;}
        to {height: 300px;}
    }

    @keyframes animateHidden {
        from { height: 300px;}
        to {height: 0px;}
    }



    /* 底部通过过渡实现的动画 */
    /* .contain {
        position: absolute;
        left: 0;
        right:0;
        bottom: 0;
        width: 100%;
        height: 300px;
        background: yellowgreen;
        transition: height .5s ease-out;
    }
    .animation-hide {
        height: 0px;
    } */






    .box {
        width: 50px;
        height: 50px;
        border: 1px solid red;
        transform: scale(1.0);
        transition: transform 2s;
        &:hover{
            transform: scale(2.0)
        }
    }
    @keyframes myFirst{
        0% { 
            transform: translateX(10px)
        }
        20% { background: yellow }
        50% { }
        70% { }
        100%{ }
    }
    @keyframes myfirst1
    {
        0%   {
            left:0px;
            top:0px;
            transform: rotate(0)
        }
        25%  {left:100px; top:0px;
            transform: rotate(30deg)
        }
        50%  {left:200px; top:0px;}
        75%  {left:200px; top:0px;
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(-180deg);
            left:0px;
            top:0px;
        }
    }

    .animate {
        width: 100px;
        height: 100px;
        border: 1px solid red;
        animation: myfirst1 2s linear  1 alternate;
        position: relative;
    }

</style>