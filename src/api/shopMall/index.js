import request from '@/utils/request'


// 虚拟兑换活动商品列表
export const getGoodslist = params => {
  return request({
    url: '/goodslist',
    params
  })
}

// 虚拟商品兑换接口
export const changeShop = data => {
  return request({
    method: 'post',
    url: '/exchangegoods',
    data
  })
}

// 虚拟商品兑换账变类型
export const coinaccounttype = params => {
  return request({
    url: '/coinaccounttype',
    params
  })
}

// 虚拟商品账变列表
export const getShopTypeList = params => {
  return request({
    url: '/coinaccountchangelist',
    params
  })
}