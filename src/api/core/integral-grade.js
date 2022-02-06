import request from '@/utils/request'

export function hello() {
  return request({
    url: '/admin/core/integralGrade/hello',
    method: 'get',
  })
}
