var yaboUi = ['10024','10022','10023','10025','10026','10027','10028','10029','10033']

var esportUi = ['10050']
export default [

  // -------代理中心路由-------开始-------
  {
    path: '/agent',   // 代理中心
    name: 'agent',
    component: () => {
      if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/yabo-series/agent')
      }
      if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/esport-series/agent')
      }
      return import('@/views/agent')
    }
  },

  {
    path: '/agentHomepage',   // 代理首页
    name: 'agentHomepage',
    component: () => {
      if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/yabo-series/agent/agentHomepage')
      }
      if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/esport-series/agent/agentHomepage')
      }
      return import('@/views/agent/agentHomepage')
    }
  },
  {
    path: '/reportForm',  // 佣金列表
    name: 'reportForm',
    component: () => {
      // if(process.env.VUE_APP_PROJECT_NAME === 'wanqu') {
      //   return import('@/views/agent/reportFormNew')
      // }
      return import('@/views/agent/reportForm')
    }
  },
  {
    path: '/reportFormDetail',  // 佣金详情
    name: 'reportFormDetail',
    component: () => import('@/views/agent/reportFormDetail')
  },
  {
    path: '/moneyExchange',  // 帐变记录
    name: 'moneyExchange',
    component: () => import('@/views/agent/moneyExchange')
  },
  {
    path: '/vipOpen',  //会员开户
    name: 'vipOpen',
    component: () => import('@/views/agent/vipOpen')
  },
  {
    path: '/contactInfo',  //代理联系方式
    name: 'contactInfo',
    component: () => {
      if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/yabo-series/agent/contactInfo')
      }
      if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/esport-series/agent/contactInfo')
      }
      return import('@/views/agent/contactInfo')
    }
  },
  {
    path: '/agentAuth',
    component: () => {
      if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/yabo-series/agent/auth/index')
      }
      if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/esport-series/agent/auth/index')
      }
      return import('@/views/agent/auth/index')
    },
    children: [
      {
        path: 'login',
        name: 'agentLogin',
        component: () => {
          if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
            return import('@/views/yabo-series/agent/auth/agentLogin')
          }
          if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
            return import('@/views/esport-series/agent/auth/agentLogin')
          }
          return import('@/views/agent/auth/agentLogin')
        }
      }, {
        path: 'register',
        name: 'agentRegister',

        component: () => {
          if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
            return import('@/views/yabo-series/agent/auth/agentRegister')
          }
          if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
            return import('@/views/esport-series/agent/auth/agentRegister')
          }
          return import('@/views/agent/auth/agentRegister')
        }
      },
      // 配置根路由
      {path: '/', redirect: 'login'},
      {path: '/agentLogin', redirect: 'login'},
      {path: '/agentRegister', redirect: 'register'},

    ]
  },
  {
    path: '/agentRegister', //代理注册
    name: 'agentRegister',
    component: () => {
      if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/yabo-series/agent/auth/agentRegister')
      }
      if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/esport-series/agent/auth/agentRegister')
      }
      return import('@/views/agent/auth/agentRegister')
    }
  },
  {
    path: '/agentLogin', //代理登录
    name: 'agentLogin',
    component: () => {
      if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/yabo-series/agent/auth/agentLogin')
      }
      if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/esport-series/agent/auth/agentLogin')
      }
      return import('@/views/agent/auth/agentLogin')
    }
  },
  {
    path: '/agBankBind', //银行卡绑定
    name: 'agBankBind',
    component: () => import('@/views/agent/agBankBind')
  },
  {
    path: '/agAddBankBind',//新增银行卡
    name: 'agAddBankBind',
    component: () => {
      if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/yabo-series/agent/agAddBankBind')
      }
      if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/esport-series/agent/agAddBankBind')
      }
      return import('@/views/agent/agAddBankBind')
    }
  },
  {
    path: '/agRevisePassword', //密码修改
    name: 'agRevisePassword',
    component: () => {
      if (yaboUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/yabo-series/agent/agRevisePassword')
      }
      if (esportUi.includes(process.env.VUE_APP_PROJECT_NAME)) {
        return import('@/views/esport-series/agent/agRevisePassword')
      }
      return import('@/views/agent/agRevisePassword')
    }
  },
  {
    path: '/carryCash',  //提现
    name: 'carryCash',
    component: () => import('@/views/agent/carryCash')
  },
  {
    path: '/agentFrom',   //代理列表
    name: 'agentFrom',
    component: () => import('@/views/agent/agentFrom')
  },
  {
    path: '/agTermsEngagement', //合作代理条款
    name: 'agTermsEngagement',
    component: () => import('@/views/agent/agTermsEngagement')
  },
  {
    path: '/agMemberList', //会员列表
    name: 'agMemberList',
    component: () => {
      // if(process.env.VUE_APP_PROJECT_NAME === 'wanqu') {
      //   return import('@/views/agent/agMemberListNew')
      // }
      return import('@/views/agent/agMemberList')
    }
  },
  {
    path: '/agMemberDetail', //会员详情
    name: 'agMemberDetail',
    component: () => import('@/views/agent/agMemberDetail')
  },
  {
    path: '/agMemberWithdraw', //会员转账
    name: 'agMemberWithdraw',
    component: () => import('@/views/agent/agMemberWithdraw')
  }
]
