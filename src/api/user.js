import request from '@/utils/request';

/**
 * 用户登录
 * @param {*} id 
 * @returns 
 */
export function getLogin(params) {
  return request({
    url: `/api-app/metronme/login`,
    method: 'get',
    params
  })
}