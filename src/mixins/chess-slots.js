
import { mapState, mapActions } from 'vuex'
import { getGameSlotPlatform } from '@/utils/utils'
import {
  getGameLists,
  getHotGameLists,
  getNewGameLists,
  getFavoriteGameLists,
  getBonusGameLists,
  favorite
} from '@/api/games'
import SearchTrigger from '@/components/search/trigger'
// import GameSearch from '@/components/search/search'
export default {
  components: {
    // GameSearch,
    SearchTrigger
  },
  data () {
    return {
      nav: null,
      active: 0,
      platforms: [],
      platform: null,
      lists: [],
      total: 0,
      pageNo: 1,
      pageSize: 20,
      loading: false,
      finished: false
    }
  },
  computed: {
    ...mapState('games', ['gameCatesPlatforms','platformGameIds']),
    ...mapState('global', ['gameSearch']),
    ...mapState('users', ['token']),
    keyword () {
      return this.gameSearch.keyword
    }
  },
  watch: {
    platform () {
      this.pageNo = 1
      this.loadData(true)
    },
    active () {
      this.pageNo = 1
      this.loadData(true)
    },
    keyword (val) {
      console.log(val)
      if (this.gameSearch.category === this.cateId) {
        this.showResult(true)
      }
    }
  },
  methods: {
    ...mapActions('games', [
      'getAllGameCatesPlatforms',
      'getPlatformGameIds'
    ]),
    ...mapActions('global', [
      'setGameSearch'
    ]),
    init () {
      const { platformGameIds, cateId } = this
      this.nav = this.navs[this.active]
      this.setGameSearch()
      if (platformGameIds.length) {
        this.platforms = getGameSlotPlatform(cateId, platformGameIds)
        this.loadData()
      } else {
        this.getPlatforms()
      }
    },
    onLoad () {
      this.loadData()
    },
    loadData (reload) {
      this.$loading({
        mask: false
      })
      if(this.slotsType) {
        const platform = this.platforms.filter(item => item.name === this.slotsType.toUpperCase() || item.name === this.slotsType)
        this.platform = platform[0]
      }
      const { platform, cateId, pageNo, nav, keyword, payforline } = this
      const params = {
        game_cate_id: cateId,
        platform_id: platform && platform.id || null,
        page: pageNo,
        name: keyword
      }

      if (payforline) {
        Object.assign(params, {
          is_payfor: payforline
        })
      }
      let request
      if (nav.name === 'fav') {
        request = getFavoriteGameLists(params)
      } else if (nav.name === 'latest') {
        request = getNewGameLists(params)
      } else if (nav.name === 'hot') {
        request = getHotGameLists(params)
      } else if (nav.name === 'reward') {
        request = getBonusGameLists(params)
      } else {
        request = getGameLists(params)
      }
      request.then(res => {
        const { code, data, msg } = res.data
        if (code === 0) {
          this.lists = reload ? data.data : this.lists.concat(data.data)
          this.total = data.total
          this.pageNo++
          if (this.pageNo > data.last_page) {
            this.finished = true
          }
          this.loading = false
          this.$toast.clear()
        } else {
          console.log(msg)
        }
        this.$emit('changeSlotsType')
      })
    },
    doFavorite (gameid,i) {
      favorite({
        game_id: gameid
      }).then(res => {

        if(this.lists[i].is_favorite == 1) {
          this.lists[i].is_favorite = 2
          this.$toast('取消收藏成功')
        } else if(this.lists[i].is_favorite == 2) {
          this.lists[i].is_favorite = 1
          this.$toast('收藏成功')
        }
      })
    },
    getPlatforms () {
      const { cateId } = this
      this.getPlatformGameIds().then(res => {
        // console.log('sss', res)
        this.platforms = getGameSlotPlatform(cateId, res)
        this.loadData()
      })
    },
    getPlatformById (id) {
      const { platforms } = this
      let ret = null
      platforms.forEach(platform => {
        if (id === platform.game_platform_id) {
          ret = platform
          return false
        }
      })
      return ret
    },
    getPlatformNameById (id) {
      const { platforms } = this
      let ret = ''
      platforms.forEach(platform => {
        if (id === platform.id) {
          ret = platform.name
          return false
        }
      })
      return ret
    },
    onTabChange (index, title) {
      this.nav = this.navs[index]
    },
    onPlatformClick (platform) {
      console.log(123123,platform)
      this.platform = platform
      this.slotsType = null
    },
    onGameTypeClick (gametype) {
      this.gametype = gametype
    },
    showResult (keyword) {
      // this.keyword = keyword
      this.pageNo = 1
      this.loadData(true)
    },
    clearSearch () {
      this.setGameSearch({
        keyword: ''
      })
    }
  }
}
