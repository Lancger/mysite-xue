import request from '@/utils/request'
// let base = 'http://dev-mysite.com'

export function getUserInfoById(data) {
  return request({
    url: `/api/member/info?mobile=` + data.mobile + '&envName=' + data.envName,
    method: 'get'
  })
}

