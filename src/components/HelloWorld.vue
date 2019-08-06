<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
     <button @click="getData()">点击获取数据</button>
     <p v-for="(item, index) in student" :key="index" @click="changeSex(index)">
       {{item.name}}：{{ item.age }}: {{item.sex}}
     </p>
     <!-- <p>姓名：{{ student[0].name }}</p>
     <p>年龄：{{ student[0].age }}</p>
     <p>性别：{{ student[0].sex }}</p> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '解决问题',
      state: true,
      student: [{
        name: 'name1',
        age: 10,
      },
      {
        name: 'name2',
        age: 11,
      }
      ],
      studentA:{
        name: 'name1',
        age: 10,
      }
    }
  },
  created() {
    this.student.forEach(item => {
      // item.sex = '男'
      this.$set(item, 'sex', '男')
    })
    this.studentA.sex = 'aaa'
  },
  methods:{
    changeSex(index) {
      console.log('student', this.student)
      console.log('studentA', this.studentA)
      //  this.$forceUpdate();
      // this.$set(this.student[index], 'sex', '女')
      this.student[index].sex = '女'
    },
    getData(){

      // if(this.state) {
      //   this.student.name = 'xiaoming'
      //   this.student.age = '121212'
      //   this.student.sex = '男'
      //   this.state = false
      // }else {
      //   this.student.name = 'xiaoxiao'
      //   this.student.age = '1111'
      //   this.student.sex = 'nv'
      //   this.state = true
      // }

      console.log("解决跨域方案")
      this.$api.getData();
      const arr = [{
        "detainRatio": 0.833333,  //挽回率
        "convertRatio": 1.500000, //对照组转化率
        "covertRatio": 0.875000,//覆盖率
        "chasingOrderRatio": 0.583333,//追单率
        "detainOrderNum": 2,//挽回订单量
        "detainOrderAmount": 10.00,//挽回订单金额
        "titleShow":"2018-12"//要展示的时间正序排列
        },{
        "detainRatio": 0.83,  //挽回率
        "convertRatio": 1.500000, //对照组转化率
        "covertRatio": 0.875000,//覆盖率
        "chasingOrderRatio": 0.583333,//追单率
        "detainOrderNum": 2,//挽回订单量
        "detainOrderAmount": 10.00,//挽回订单金额
        "titleShow":"2018-01" //要展示的时间正序排列
        }]
      const name = 'detainOrderNum';
      const temp = this.exarctArray(arr,name);
      console.log('获取临时数据', temp)
    },
    exarctArray(arr, name) {
      const newArr = [];
      arr.forEach((ele) => {
        newArr.push(ele[name])
      });
      return newArr
    }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
