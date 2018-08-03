import axios from 'axios'

// axios.defaults.timeout = 1000 * 5
// Vue.prototype.$http = axios  // 将axios写入Vue原型
// axios.defaults.baseURL = "http://devgnome.voicecloud.cn:3006/"


// 添加请求拦截器
axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use((response) => {
    // if(response.data.flag){
    //     return response.data.data
    // }else{
    //     console.log(response.data.msg)
    //     return false
    // }
}, (error) => {
    // console.log(error.message)
    // return Promise.reject(error);
});

const ajax = {
    post: (url, data) => {
        return axios.post(url, data)
    }
}

export default ajax