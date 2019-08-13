<template>
    <div>
        <h3>动画练习</h3>
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

        <div class="animate">
            动画元素
        </div>
    </div>
</template>

<!-- <style lang="scss"> -->
<style lang='scss' scoped>
    /* translate() 
    rotate()
    scale()
    skew()
    matrix() */


    .box {
        width: 150px;
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