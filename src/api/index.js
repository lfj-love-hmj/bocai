import request from '@/utils/request'

// 首页排行棒（简化数据版）
// 参数名	必选	类型	说明
// merchant_no	是	int	商户号
export const profitRankIndex = (params) => {
  return request({
    url: '/indexprofitlist',
    params
  })
}

// 新排行榜接口
// 参数名	必选	类型	说明
// merchant_no	是	int	商户号
export const profitRank = (params) => {
  return request({
    url: '/newtoplist',
    params
  })
}

// 品牌实力接口
// 参数名	必选	类型	说明
// merchant_no	是	int	商户号
export const strength = (params) => {
  return request({
    url: '/strength',
    params
  })
}