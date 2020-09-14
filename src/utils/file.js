// 获取当前项目是否存在页面
const  proCom = require.context(`@assets`,true,/\.(vue)$/).keys();
let proComUrlObj = {}
// 配置url
proCom.length && proCom.map(item => {
  const tempArr = item.split('/').splice(2,item.split('/').length-3)
  if(tempArr.length>1) {
    proComUrlObj[`${item.split('/')[3]}`] = `${item.split('/')[2]}/${item.split('/')[3]}`
  } else {
    proComUrlObj[`${tempArr[0]}`] = tempArr[0]
  }
})

export default proComUrlObj