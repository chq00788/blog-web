import axios from 'axios';
import $ from 'jquery'

axios.defaults.timeout = 5000;
axios.defaults.baseURL = '';


export default {
  get(url,params,callback,errorCallback){
    let data='';
    $.each(params,function(name,value) {
      data+=name+'='+value+'&'
    });
    data = data.substring(0,data.length-1);
    let urls=data ? (url+'?'+data):url;
    axios({
      url: urls,
      method: 'get'
    }).then(callback).catch(errorCallback)
  },
  post(url,params,callback,errorCallback){
    axios({
      url: url,
      method: 'post',
      data: params,
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        // ret+='&token='+localStorage.verifyToken;
        return ret
      }],
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then(callback).catch(errorCallback)
  }
}
