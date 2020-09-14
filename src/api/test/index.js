import request from '@/utils/request'

export function test() {
  return request({
    method: 'post',
    data: query
  })
}
