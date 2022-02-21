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
