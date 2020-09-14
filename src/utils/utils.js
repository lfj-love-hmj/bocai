export const param = (params) => {
  return Object.keys(params).map((prop) => {
    return [prop, params[prop]].map(encodeURIComponent).join('=')
  }).join('&')
}

export const getPlatformByGameCate = (cateId, datas) => {
  let ret = []
  if (datas && datas.length) {
    datas.forEach(item => {
      if (item.game_cate_id === cateId) {
        ret = item.platform_list || []
        return false
      }
    })
  }
  return ret
}

export const getGameSlotPlatform = (cateId, datas) => {
  let ret = []
  if (datas && datas.length) {
    datas.forEach(item => {
      if (item.game_cate_id === cateId) {
        ret = item.list_data.filter(item => item.status === 1) || []
        return false
      }
    })
  }
  return ret
}

export const getGameCatePlatform = (cateId, datas) => {
  let ret = null
  if (datas && datas.length) {
    datas.forEach(item => {
      if (item.game_cate_id === cateId) {
        ret = item
        return false
      }
    })
  }
  return ret
}

export const getProvinceCity = (data) => {
  const province = data.province_list
  const city = data.city_list
  const ret = {}
  const province2 = {}
  for (const p in province) {
    if (province.hasOwnProperty(p)) {
      ret[province[p]] = []
      province2[p.slice(0, 2)] = province[p]
    }
  }
  for (const c in city) {
    if (city.hasOwnProperty(c)) {
      const code = c.slice(0, 2)
      if (province2.hasOwnProperty(code)) {
        ret[province2[code]].push(city[c])
      }
    }
  }
  return ret
}

export const executeScript = (html) => {
    var reg = /<script[^>]*>([^\x00]+)$/i;
    //对整段HTML片段按<\/script>拆分
    var htmlBlock = html.split("<\/script>");
    for (var i in htmlBlock) 
    {
        var blocks;//匹配正则表达式的内容数组，blocks[1]就是真正的一段脚本内容，因为前面reg定义我们用了括号进行了捕获分组
        if (blocks = htmlBlock[i].match(reg)) 
        {
            //清除可能存在的注释标记，对于注释结尾-->可以忽略处理，eval一样能正常工作
            var code = blocks[1].replace(/<!--/, '');
            try {
                eval(code) //执行脚本
            } catch (e) {

            }
        }
    }
}
