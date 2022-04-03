//对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
//在当前模块中引入store
import store from '@/store';
import "nprogress/nprogress.css";
//底下的代码也是创建axios实例
let requests = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

//请求拦截器
requests.interceptors.request.use((config) => {
  //config是配置对象
  if(store.state.detail.uuid_token){
    //请求头添加一个字段(userTempId)
    config.headers.userTempId = store.state.detail.uuid_token;
  }
  //需要携带token带给服务器
  if(store.state.user.token){
    config.headers.token = store.state.user.token;
  }
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (err) => {
    alert("服务器响应数据失败");
  }
);
// 暴露一个axios实例
export default requests;
