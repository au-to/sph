import axios from "axios";
// 引入进度条
import nprogress from "nprogress";
import "../../node_modules/nprogress/nprogress.css";
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
})
// 请求拦截器
// 发送请求前
requests.interceptors.request.use(function (config) {
    nprogress.start();
    return config;
},
    // 请求错误处理
    function (error) {
        return Promise.reject(error);
    })

// 响应拦截器
requests.interceptors.response.use(function (response) {
    // 对响应数据的处理
    nprogress.done();
    return response;
},
    // 响应错误处理
    function (error) {
        return Promise.reject(error);
    }
)
export default requests;