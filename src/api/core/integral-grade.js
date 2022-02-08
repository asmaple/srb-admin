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

// 删除积分
export function removeById(id) {
  return request({
    url: '/admin/core/integralGrade/remove/' + id,
    method: 'delete',
  })
}

// 保存积分
export function save(data) {
  return request({
    url: '/admin/core/integralGrade/save',
    data: data, // data 传输的是json数据
    method: 'post',
  })
}
// 更新积分
export function update(data) {
  return request({
    url: '/admin/core/integralGrade/update',
    data: data, // data 传输的是json数据
    method: 'put',
  })
}

// 根据id查询积分数据
export function getById(id) {
  return request({
    url: '/admin/core/integralGrade/get/' + id,
    method: 'get',
  })
}
