import axios from 'axios'
import { Toast } from 'vant';

export function request(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: '/api/v4',
      timeout: 5000
    })

    instance.interceptors.request.use(config => {
      Toast.loading({
        message: '加载中...',
        forbidClick: true, //加载中背景不允许操作
        duration: 0
      });
      return config
    })

    instance.interceptors.response.use(data => {
      Toast.clear();
      return data
    })

    instance(config).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}