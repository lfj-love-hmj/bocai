import Vue from 'vue'
import App from './App'
import router from './router/index'
import Vuex from 'vuex'
import store from './store'
import * as types from './store/types'
// import { bImgs, imgs } from './assets/index'
import ColorJS from '@assets/js/color'
import resultImgs from '@/assets'
import * as ConfigJS from '@/utils/const'
import { executeScript } from '@/utils/utils'
import vant, { Toast, Notify } from 'vant'
import componetList from './components'
import 'vant/lib/index.css'
import '@assets/styles/common.less'
import '@assets/styles/global.less'
import '@assets/styles/rewrite-vant.less'
import 'lib-flexible/flexible'
import VueClipboard from 'vue-clipboard2'
import VueLazyload from 'vue-lazyload'
import Vue2Filters from 'vue2-filters'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import VueCountdown from '@chenfengyuan/vue-countdown'

// import { autotrans } from '@/api/memberCenter'

import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.use(VueAwesomeSwiper)

import 'swiper/dist/css/swiper.css'

const { phoneArea } = componetList
Vue.prototype.$store = store
Vue.prototype.$colorjs = ColorJS
Vue.prototype.$config = ConfigJS.INDEX_CONFIG
Vue.prototype.$projectname = ConfigJS.PROJECT_NAME
Vue.$store = store
Vue.use(vant)

import images from './assets/images.js'
// 普通图片
Vue.prototype.$imgs = images.imgs
// 背景图片
Vue.prototype.$bImgs = images.bImgs
// 自定义全局组件
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(phoneArea)
Vue.use(Vuex)

Vue.prototype.$loading = (params) => {
  Toast.loading(Object.assign({
    className: 'toast-loading',
    mask: false,
    forbidClick: true,
    loadingType: 'spinner',
    // message: '加载中...',
    duration: 3000
  }, params))
}

Vue.prototype.$hideUsername = (username) => {
  return username.substr(0, 2) + '***' + username.substr(username.length - 1)
}
Vue.prototype.$platformName = (platformId, platforms) => {
  if (platforms && platforms[platformId]) {
    return platforms[platformId]
  } else {
    return platformId
  }
}
Vue.prototype.$openKefu = () => {
  router.push({
    name: 'Kefu'
  })
}

// 进游戏相关
var gamePlayWin
var gamePlayId
var gameCheckTimer
// 定时器函数
const gameCheck = () => {
  console.log(gamePlayWin, gamePlayId, gameCheckTimer)
  const { token } = store.state.users
  if (gameCheckTimer) {
    clearInterval(gameCheckTimer)
  }
  gameCheckTimer = setInterval(() => {
    if (gamePlayWin && !gamePlayWin.closed) {
      if (gamePlayId) {
        // 调用onlinecheck
        store.dispatch('games/gameOnlineCheck', {
          game_id: gamePlayId
        }).then(res => {
          // Notify('online check successful')
        })
      }
    } else if (gamePlayId) {
      // 窗口关闭，且存在gamePlayId，表明是进了游戏再关闭了
      // 调用 backtrans
      store.dispatch('games/gameBacktrans', {
        game_id: gamePlayId,
        access_token: token,
        merchant_no: process.env.VUE_APP_MERCHANT_NO
      }).then(res => {
        // Notify('game back transfer successful')
      })
      // 再关闭定时器
      clearInterval(gameCheckTimer)
    }
  }, 5000)
}
const openUrl = url => {
  // 生成一个a元素
  var a = document.createElement('a')
  // 创建一个单击事件
  var event = new MouseEvent('click')
  a.target = '_blank'
  // 将生成的URL设置为a.href属性
  a.href = url
  // 触发a的单击事件
  a.dispatchEvent(event)
}

Vue.prototype.$getGameStatus = (game, type) => {
  const gameIds = store.state.games.platformGameIds
  const arr = gameIds.filter(item => {
    return item.name === type
  })
  if (arr[0] && arr[0].list_data) {
    const temp = arr[0].list_data.filter(item => {
      if (game.name) {
        return (item.name).toLowerCase() === (game.name).toLowerCase()
      }
    })
    if (temp[0].status === 2) {
      return true
    } else {
      return false
    }
  }
}

Vue.prototype.$playGame = (game, type, index) => {
  const { token, wallet = {} } = store.state.users
  // const gameId = game.default_game_id || game.id
  // const platformId = game.game_platform_id || game.platform_id
  let gameId = game.default_game_id || game.game_id || game.id
  let platformId = game.game_platform_id || game.platform_id
  let status = null
  const gameIds = store.state.games.platformGameIds
  const arr = gameIds.filter(item => {
    return item.name === type
  })
  if (arr[0] && arr[0].list_data) {
    const temp = arr[0].list_data.filter(item => {
      return (item.name).toLowerCase() === (game.name).toLowerCase()
    })
    gameId = temp[0].default_game_id.split(',').length > 1 && index
      ? temp[0].default_game_id.split(',')[index] : temp[0].default_game_id.split(',').length > 1 && !index
        ? temp[0].default_game_id.split(',')[0] : temp[0].default_game_id
    platformId = temp[0].id
    status = temp[0].status
    // console.log(gameId, platformId, temp[0].default_game_id.split(',').length)
  }

  if (gameId === undefined || platformId === undefined) {
    return Toast('该游戏暂不可用')
  }
  if (status === 2 || (game.status && game.status === 2)) {
    return Toast('该游戏正在维护中')
  }

  let goGame = () => {
    let routeUrl = router.resolve({
      path: '/game',
      query: {
        at: token,
        game_id: gameId,
        platform_id: platformId
      }
    })
    // 处理vr游戏
    if([121].indexOf(platformId) != -1) {
      gamePlayWin = window.open(routeUrl.href, 'gamePlayWin')
      // openUrl(routeUrl.href)
      gamePlayId = gameId
      gameCheck()
    } else {
      window.open(routeUrl.href, '_blank')
    }
  }
  if (token) {
    // 判断余额
    if (((wallet.money - 0) + (wallet.all_platform_money - 0) + (wallet.financing_money - 0)) <= 10) {
      store.dispatch('global/setPopShow', {
        status: true,
        hideFooter: true,
        tipsDisplay: {
          show: true,
          type: 1,
          confirm() {
            router.push({ path: '/deposit' })
          },
          cancel() {
            goGame()
          }
        }
      })
      return ''
    }
    // 判断是否开启免转
    // if (wallet.is_auto_trans !== 1) {
    //   store.dispatch('global/setPopShow', {
    //     status: true,
    //     hideFooter: true,
    //     tipsDisplay: {
    //       show: true,
    //       type: 3,
    //       confirm () {
    //         autotrans({
    //           access_token: token,
    //           merchant_no: process.env.VUE_APP_MERCHANT_NO,
    //           is_auto_trans: 1
    //         }).then(res => {
    //           goGame()
    //         })
    //       },
    //       cancel () {
    //         goGame()
    //       }
    //     }
    //   })
    //   return ''
    // }
    // TODO 本地判断是否新手
    let isFirstTime = JSON.parse((window.localStorage.getItem('isFirstTime') || '[]'))
    if (isFirstTime.indexOf(gameId) < 0) {
      store.dispatch('global/setPopShow', {
        status: true,
        hideFooter: true,
        tipsDisplay: {
          show: true,
          type: 2,
          confirm() {
            isFirstTime.push(gameId)
            window.localStorage.setItem('isFirstTime', JSON.stringify(isFirstTime))
            goGame()
          },
          cancel() {
            router.push({ path: '/deposit' })
          }
        }
      })
      return ''
    }
    goGame()
  } else {
    store.commit('global/' + types.SET_NO_LOGIN, true)
  }
}

VueClipboard.config.autoSetContainer = true
Vue.use(VueClipboard)
Vue.use(Vue2Filters)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  // error: "dist/error.png",
  // loading: require('@assets/img3_0/common/loading.png'),
  attempt: 1
})

Vue.mixin({
  mixins: [Vue2Filters.mixin]
})

Vue.config.productionTip = false

// 页面切换进度条
NProgress.configure({
  easing: 'ease',//动画方式
  speed: 500, //进度条的速度
  showSpinner: false, //是否显示加载ico
  trickleSpeed: 200,//自动递增间隔
  minimum: 0.3// 初始化时的最小百分比
})

const isDev = process.env.NODE_ENV === 'development'

router.beforeEach((to, from, next) => {
  NProgress.start()
  // 第三方支付
  if (to.query.busi_pay_type == 1) {
    window.localStorage.setItem('thirdPayMsg', JSON.stringify(to.query))
  }
  // 百度统计
  if (_hmt && to.path) {
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  // 站长统计
  if (window._czc && to.path) {
    //监听路由变化
    let location = window.location;
    let contentUrl = location.pathname + location.hash;
    let refererUrl = '/';
    window._czc.push(['_trackPageview', contentUrl, refererUrl])
  }

  // 推广注册code
  if (to.query.id && to.name === 'Home') {
    window.sessionStorage.setItem('agentCode', to.query.id)
  }

  // 邀请好友注册code
  if (to.query.code && to.name === 'Home') {
    window.sessionStorage.setItem('spread_code', to.query.code)
  }
  next()
})

router.afterEach((to, from, next) => {
  window.scrollTo(0, 0)
  NProgress.done()
  if (to.query.at || to.query.token) {
    // 快速存款 http游戏 油条充值授权
    store.dispatch(
      "users/updateToken",
      to.query.at || to.query.token
    );
    store.dispatch("users/getUserInfo");
  }
})

// 生产环境才加
var _hmt
if (process.env.NODE_ENV === 'production') {
  setTimeout(() => {
    // console.log(store.getters['global/siteInfo'].h5_stat)
    executeScript(store.getters['global/siteInfo'].h5_stat)
  }, 6000)
}

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')

