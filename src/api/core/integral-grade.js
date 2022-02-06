import request from '@/utils/request'

// 接口测试
export function hello() {
  return request({
    url: '/admin/core/integralGrade/hello',
    method: 'get',
  })
}

// 积分列表
export function getList() {
  return request({
    url: '/admin/core/integralGrade/list',
    method: 'get',
  })
}
