import axios from 'axios'
const utils = {

}
utils.request = (url, params = {}, method = 'POST', headers = {}) => {
  const conf = {
    url,
    data: params,
    method,
    headers: {...headers, 'X-Requested-With': 'XMLHttpRequest'},
    withCredentials: false
  }
  return axios(conf).then(response => {
    // const data = response;
    console.log("现在数据data",response)
  })
}

export default utils

