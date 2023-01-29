import axios from 'axios';
import { stringify } from 'qs';
import { message } from 'ant-design-vue';
import { getToken } from '@/utils/auth';
import router from '../routes';
import {
  get as getLanguage
} from '@/utils/config';
const service = axios.create({
  baseURL: '/api',
  timeout: 5000, // request timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
  },
})

// request interceptor
service.interceptors.request.use(
  config => {
    const contentType = 'application/x-www-form-urlencoded; charset=utf-8';
    const methods = ['post', 'put', 'delete'];
    if (config.headers['Content-Type'] === contentType && methods.includes(config.method)) {
      config.data = stringify(config.data);
    }
    console.log('getToken', getToken())
    if (getToken()) {
      config.headers['X-Token'] = getToken();
      config.headers['language'] = getLanguage() || 'en';
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    console.log('response', res);
    if (res.code !== 1) {
      message.error(res.msg);
      if (res.code === 401) {
        router.push({
          path: '/login'
        })
      } else {
        return Promise.reject(new Error(res.msg || 'Error'))
      }
    } else {
      return res.result;
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service;
