import axios from 'axios';
import baseURL from './config';

// baseURL 实列
const instance = axios.create({
  baseURL
});

// get 方法
export function get(url, config={}) {
  return new Promise((resolve, rejected)=> {
    instance.get(url, config).then(res => {
      resolve(res);
    }).catch(err => {
      rejected(err)
    })
  })
}

// post 方法
export function post(url, data={}, config={}) {
  return new Promise((resolve, rejected)=> {
    instance.post({
      url,
      data,
    }).then(res => {
      resolve(res)
    }).catch(err => {
      rejected(err)
    })
  })
}

// 请求拦截器
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});





