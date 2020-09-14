/**
 * 全局方法封装
 */

// import md5 from 'blueimp-md5'
// import request from './request'
// import router from '../router/index'

/**
 * [保存localStorage]
 * @param  {[type]} name  [description]
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export const setLocalStorage = (name, value) => {
  if (!name || !value) {
    return
  }
  window.localStorage.setItem(name, value)
}

/**
 * [获取localStorage]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const getLocalStorage = name => {
  if (!name) {
    return
  }
  return window.localStorage.getItem(name)
}

/**
 * [删除localStorage]
 * @param  {[type]} name [description]
 * @return {[type]}      [description]
 */
export const removeLocalStorage = name => {
  if (!name) {
    return
  }
  window.localStorage.removeItem(name)
}

/**
 * [计算sign]
 * @return {[type]} [description]
 */
// export const getSign = (data) => {
//   var signKeys = ['method', 'uid', 'devtype', 'client_ip', 'devname', 'rtick', 'v'].sort((a, b) => {
//     return a > b ? 1 : -1
//   })
//   const serverKey = 'e34f3fee5adfe66'
//   var str = ''
//   for (let key of signKeys) {
//     str += `${key}=${data[key]}`
//   }
//   str += serverKey
//   return md5(str)
// }

/**
 * 验证邮箱号
 */
export function ismail (value) {
  var reg = /[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}/
  if (!reg.test(value)) {
    value = ''
    return false
  } else {
    return true
  }
}

/**
 * 验证手机号
 */
export function isnum (value) {
  var reg = /^1\d{10}$/
  if (!reg.test(value)) {
    value = ''
    return false
  } else {
    return true
  }
}

// 涂鸦函数
export function graffiti (scale) {
  var canvas = document.getElementById('mycanvas')
  var ctx = canvas.getContext('2d')

  canvas.addEventListener('mousedown', function (e) {
    var e = e || window.event
    var x1 = e.clientX - canvas.getBoundingClientRect().left,
      y1 = e.clientY - canvas.getBoundingClientRect().top,
      lineSize = '2',
      lineColor = '#f00'
    ctx.beginPath()
    ctx.fillStyle = lineColor
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.arc(x1 / scale + scrollX, y1 / scale + scrollY, lineSize, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()

    document.onmousemove = function (e) {
      var e = e || window.event
      var x2 = e.clientX - canvas.getBoundingClientRect().left,
        y2 = e.clientY - canvas.getBoundingClientRect().top
      var asin = lineSize * Math.sin(Math.atan(((y2 - y1)) / ((x2 - x1))))
      var acos = lineSize * Math.cos(Math.atan(((y2 - y1)) / ((x2 - x1))))
      // 分别获取矩形的四个点的xy轴位置
      var x3 = x1 + asin
      var y3 = y1 - acos
      var x4 = x1 - asin
      var y4 = y1 + acos
      var x5 = x2 + asin
      var y5 = y2 - acos
      var x6 = x2 - asin
      var y6 = y2 + acos

      ctx.beginPath()
      ctx.fillStyle = lineColor
      ctx.arc(x2 / scale + scrollX, y2 / scale + scrollY, lineSize, 0, 2 * Math.PI)
      ctx.fill()
      ctx.closePath()
      ctx.beginPath()
      ctx.fillStyle = lineColor
      ctx.moveTo(x3 / scale + scrollX, y3 / scale + scrollY)
      ctx.lineTo(x5 / scale + scrollX, y5 / scale + scrollY)
      ctx.lineTo(x6 / scale + scrollX, y6 / scale + scrollY)
      ctx.lineTo(x4 / scale + scrollX, y4 / scale + scrollY)
      ctx.fill()
      ctx.closePath()
      x1 = x2
      y1 = y2
    }
    canvas.onmouseup = function () {
      document.onmousemove = null
      document.onmouseup = null
    }
  })
};

/*** 格式化日期时间
 * @param datetime 日期时间对象
 * @return 返回格式化后的字符串：yyyy-MM-dd HH:mm:ss
 */
export function formateDate(datetime) {
  // 获取年月日时分秒值
  var year = datetime.getFullYear(),
    month = ("0" + (datetime.getMonth() + 1)).slice(-2),
    date = ("0" + datetime.getDate()).slice(-2)
  // 连接
  var result = year + "-"+ month +"-"+ date;
  // 返回
  return result;
}

// 密码校验
export function checkPassword(value){
  // var reg = /^[a-zA-Z0-9]{6,20}$/;
  var reg = /^(?=.*\d)(?=.*[A-Za-z])[\x20-\x7e]{6,20}$/
  if (!reg.test(value)) {
    value = ''
    return false
  } else {
    return true
  }
};

// 账号名校验
export function checkUser(value){
  var reg = /^[a-zA-Z0-9]{6,12}$/;
  if (!reg.test(value)) {
    value = ''
    return false
  } else {
    return true
  }
};

// qq账号
export function qqAcount(value){
  var reg = /^[1-9][0-9]{4,}$/;
  if (!reg.test(value)) {
    value = ''
    return false
  } else {
    return true
  }
};

// 代理密码校验
export function agPassword(value){
  var reg = /^[0-9a-zA-Z]{8,12}$/;
  if (!reg.test(value)) {
    value = ''
    return false
  } else {
    return true
  }
};

// 代理密码校验
export function agPassword20(value){
  var reg = /^[0-9a-zA-Z]{6,20}$/;
  if (!reg.test(value)) {
    value = ''
    return false
  } else {
    return true
  }
};
