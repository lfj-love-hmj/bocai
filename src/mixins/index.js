import { mapState } from 'vuex'

export default {
  data () {
    return {}
  },
  computed: {
    ...mapState({})
  },
  methods: {
    goBack (t) {
      window.history.go((t || -1))
    },
    tel (tel) {
      window.location.href = `tel:${tel}#mp.weixin.qq.com`
    },
    go (url) {
      let $router = this.$router
      if (/^javas/.test(url) || !url) return
      const useRouter = typeof url === 'object' || ($router && typeof url === 'string' && !/http/.test(url))
      if (useRouter) {
        if (typeof url === 'object' && url.replace === true) {
          $router.replace(url)
        } else {
          url === 'BACK' ? $router.go(-1) : $router.push(url)
        }
      } else {
        window.open(url)
      }
    },
    nevigateTo (path, query, params) {
      // 对象
      this.$router.push({path: path, query: query, params: params})
    }
  },
  async mounted () {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {

    })
  }
}
