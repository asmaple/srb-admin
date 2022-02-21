import request from '@/utils/request'

// 会员列表
export function getPageList(page, limit, searchObj) {
  return request({
    url: `/admin/core/userInfo/list/${page}/${limit}`,
    method: 'get',
    // data: searchObj //在请求体中传递json
    params: searchObj,
  })
}

// 会员 锁定 / 解锁
export function lock(id, status) {
  return request({
    url: `/admin/core/userInfo/lock/${id}/${status}`,
    method: 'put',
  })
}

// 会员登录日志列表
export function getUserLoginRecordTop50(userId) {
  return request({
    url: `/admin/core/userLoginRecord/listTop50/${userId}`,
    method: 'get',
  })
}
