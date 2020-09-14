import proComUrlObj from "@/utils/file"
const proComUrl = proComUrlObj

export default [
  // 万趣女优
  {
    meta: {
      index: "AVgirl"
    },
    path: "/sponsor/AVgirl",
    name: "AVgirl",
    component: () =>
      import(/* webpackChunkName: 'AVgirl' */ "@/views/sponsor/AVgirl")
  },
  // 意甲联赛
  {
    meta: {
      index: "competition"
    },
    path: "/sponsor/competition",
    name: "competition",
    component: () =>
      import(
        /* webpackChunkName: 'competition' */ "@/views/sponsor/competition"
      )
  },
  // 爱心无疆
  {
    meta: {
      index: "publicBenefit"
    },
    path: "/sponsor/publicBenefit",
    name: "publicBenefit",
    component: () =>
      import(
        /* webpackChunkName: 'publicBenefit' */ "@/views/sponsor/publicBenefit"
      )
  },
  // 太阳城演唱会赞助
  {
    meta: {
      index: "sunCity"
    },
    path: "/sponsor/sunCity",
    name: "sunCity",
    component: () =>
      import(/* webpackChunkName: 'sunCity' */ "@/views/sponsor/sunCity")
  },
  // 叉烧 hunters 赞助
  {
    meta: {
      index: "hunters"
    },
    path: "/sponsor/hunters",
    name: "hunters",
    component: () => {
      if (['chashao'].includes(process.env.VUE_APP_PROJECT_NAME) && proComUrl['hunters']) {
        return import(`@/assets/${process.env.VUE_APP_PROJECT_NAME}/views/${proComUrl['hunters']}`)
      } else {
        if (process.env.VUE_APP_PROJECT_NAME === "chashao"||process.env.VUE_APP_PROJECT_NAME === "wanqu") {
          return import("@/views/error/404")
        }else{
          return import ('@/views/error/404_new')
        }
      }
    }
  },
  // 超博 武磊 赞助
  {
    meta: {
      index: "wulei"
    },
    path: "/sponsor/wulei",
    name: "wulei",
    component: () => {
      if (['chobet'].includes(process.env.VUE_APP_PROJECT_NAME) && proComUrl['wulei']) {
        return import(`@/assets/${process.env.VUE_APP_PROJECT_NAME}/views/${proComUrl['wulei']}`)
      } else {
        if (process.env.VUE_APP_PROJECT_NAME === "chobet"||process.env.VUE_APP_PROJECT_NAME === "wanqu") {
          return import("@/views/error/404")
        }else{
          return import ('@/views/error/404_new')
        }
      }
    }
  }
];
