import request from '@/utils/request'

// 获取数据字典数据
export function getDictListByParentId(id) {
  return request({
    url: '/admin/core/dict/listByParentId/' + id,
    method: 'get',
  })
}
