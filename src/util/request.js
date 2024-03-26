import axios from 'axios';
import {
  Message
} from 'element-ui'
import {
  showLoading, // 加载中开
  hideLoading
} from "./loading"
const uuid =  require('uuid')
// const whitelist = ['/file/download']



// axios 实例
var service = axios.create({
  // onUploadProgress: (progressEvent) => { },
  baseURL: '',
  timeout: 5000,// 请求超时时间
  // headers: {
  //   'X-Custom-Header': 'foobar'
  // }
});




// 请求拦截器
service.interceptors.request.use(
  config => {
    if (config.loading != false) {
      showLoading() // 打开加载中
    }
    var uuid_num = localStorage.getItem('uuid_hc') || ''
    if (!uuid_num || uuid_num.length ==0){
      localStorage.setItem('uuid_hc',uuid.v1())
    }
    config.headers["Authorization"] = "Bearer "+(localStorage.getItem('access_token') || ''); // 设置请求头token
    config.headers["X-Request-ID"] = localStorage.getItem('uuid_hc') || ''; // 设置uuid
    // access_token
    // const inituser = localStorage.getItem('inituser') ? JSON.parse(localStorage.getItem('inituser')) : {}
    // var a = localStorage.getItem("flagxz");
    // // alert(a)
    // // if(a)
    // if(a=='2'){
    //   console.log()
    // }else{
    //   config.headers["token"] = localStorage.getItem('token') || '';
    // }
    // config.headers["token"] = localStorage.getItem('token') || ''; // 设置请求头token
    // config.headers["token"] = localStorage.getItem('token') || '';
    return config;
  },
  // 发送失败
  error => {
    hideLoading(); // 关闭加载中
    return Promise.reject(error);
  }
);


// 响应拦截器
service.interceptors.response.use(
  response => {
    hideLoading(); // 关闭加载中
    const status = response.status;
    const data = response.data;
    const url = response.config.url;
    // alert(status)
    var code = status+''
    // alert(code)
    if (code[0] != 2) {
      // return Promise.reject(data);
      Message({
        message: "请求失败",
        type: 'error',
      });
      // return data
    } else {
      if (data.code === 200) {
        return data
      } else {
        // if (whitelist.indexOf(response.config.url) != -1) {
        //   return data
        // }
        // if (data.code === 10005 || data.code === 10008) {
        //   var loginurl = localStorage.getItem('loginurl')
        //   window.location.href = "/#" + (loginurl || '/login');
        // }
        // Message({
        //   message: "请求错误：" + data.message,
        //   type: 'error',
        // });
        return data
      }
    }
  },
  error => {
    hideLoading();
    // console.log(error)
    // console.log(error.response)
    // console.log(1111111111)
    // const status = response.status;
    // const data = response.data;
    // const url = response.config.url;
    if(error.response){
      var data= error.response.data.error
      Message({
        message:data.message ||  "网络超时,请稍后重试",
        type: 'error',
      });
    }else{
      Message({
      message:error ||  "网络超时,请稍后重试",
      type: 'error',
    });
    }
    // Message({
    //   message:error ||  "网络超时,请稍后重试",
    //   type: 'error',error
    // });
    // return Promise.reject(error)
  }
);
// service.interceptors.response.use(
//   response => {
//       // return response.data;
//       // const dataAxios = response;
//       const dataAxios = response.data;
//       const { code } = dataAxios;
//       if (code === undefined) {
//           return dataAxios;
//       } else {
//           return dataAxios.data;
//       }
//   },
//   error => {
//       if (error.response) {
//           if (error.response.data.errorCode == 'A11051' || error.response.data.errorCode == 'A11052') {
//               return Promise.reject(error.response.data);
//           } else if (error.response.data.errorCode == 'A11321') {
//               return Promise.reject(error.response.data);
//           } else if (error.response.data.errorCode == 'A00012') {
//               errorLog(error.response.data, 2);
//               cremode('logout')
//           } else {
//               errorLog(error.response.data, 2);
//               return Promise.reject(error.response.data);
//           }
//       } else {
//           errorLog(error);
//           return Promise.reject(error);
//       }
//   }
// );
export default service;