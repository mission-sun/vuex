import newUtils from './newUtils.js'
import axios from 'axios'
const URL={
    //首页table列表
    nodeS:"/index/devcost/api/estimates/projTypeMap",
    // axios.get('/index/devcost/api/estimates/projTypeMap')
}
const api = {
  getData(){
    axios.get(URL.nodeS).then(function (response) {
      console.log(response);
    })
  }
};
export default api
