<template>
  <div class="search-page">
    <form action="/" class="search-head">
      <van-search
        v-model="keyword"
        placeholder="请输入游戏名称"
        show-action
        @search="onSearch"
        @cancel="onCancel"
      >
        <div v-if="keyword" slot="action" @click="onSearch">搜索</div>
        <div v-else slot="action" @click="onCancel">取消</div>
      </van-search>
    </form>
    <div class="search-body">
      <div class="action" v-if="!keyword && mywords.length">
        <h2>搜索历史</h2>
        <a @click="deleteHistory">清除</a>
      </div>
      <ul class="lists" v-if="!keyword">
        <li
          v-for="(w, index) in mywords"
          :key="index"
          @click="onLabelClick(w)"
        >{{ w }}</li>
      </ul>
      <div class="search-info" v-if="keyword && lists.length">
      <span>{{ keyword }}</span>的搜索结果 <span @click="clearSearch">清除</span>
    </div>

    <van-list
      v-if="lists.length"
      class="games"
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      :immediate-check="false"
    >
      <van-cell
        v-for="(item, index) in lists"
        :key="index"
      >
        <div
          class="game-item"
          slot="default"
        >
          <van-image
            :src="item.pic"
            fit="cover"
            lazy
            @click="$playGame(item)"
          />
          <template v-if="nav && nav.name === 'latest'">
            <span v-if="item.is_new" :class="['tag', 'new']">new</span>
            <span v-else-if="item.is_hot" :class="['tag', 'hot']">hot</span>
          </template>
          <template v-else>
            <span v-if="item.is_hot" :class="['tag', 'hot']">hot</span>
            <span v-else-if="item.is_new" :class="['tag', 'new']">new</span>
          </template>
          <div class="info">
            <h3><span>{{ getPlatformNameById(item.game_platform_id) }}</span>{{ item.name }}</h3>
            <span class="action">
              <van-icon @click="doFavorite(item.id,index)" :name="item.is_favorite === 2 ? 'like-o' : 'like'" />
            </span>
          </div>
        </div>
      </van-cell>
    </van-list>
    </div>
    
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { getGameSlotPlatform } from '@/utils/utils'
import {
  getGameLists,
  getHotGameLists,
  getNewGameLists,
  getFavoriteGameLists,
  favorite
} from '@/api/games'
// import { getGameLists } from '@/api/games'
export default {
  name: 'SearchPage',
  data () {
    return {
      keyword: '',
      mywords: [],
      cachedKey: '',
      pageNo:1,
      lists:[],
      pageSize: 20,
      loading: false,
      finished: false,
      nav:null,
      platform:[]
    }
  },
  computed: {
    ...mapState('global', ['gameSearch']),
    ...mapState('games', ['gameCatesPlatforms','platformGameIds']),
  },
  created () {
    // this.keyword = this.gameSearch.keyword || ''
    // const { category } = this.gameSearch
    // const key = `category_${category}_mywords`
    // this.cachedKey = key
    let mywords = JSON.parse(window.localStorage.getItem('mywords') || '[]')
    this.mywords = mywords
    const { nav, category } = this.gameSearch
    const { gameCatesPlatforms } = this
    this.platforms = getGameSlotPlatform(category, this.platformGameIds)
    this.nav = nav
    // console.log(category)
  },
  methods: {
    ...mapActions('global', [
      'setGameSearch'
    ]),
    loadData (reload) {
      this.$loading({
        mask: false
      })
      const { pageNo, keyword, mywords } = this
      const { platform, category, nav, payforline } = this.gameSearch
      if(mywords.indexOf(keyword) == -1) {
        mywords.push(keyword)
      }
      window.localStorage.setItem('mywords',JSON.stringify(mywords))

      const params = {
        game_cate_id: category,
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
      })
    },
    // doGameSearch () {
    //   const { keyword } = this
    //   const { category } = this.gameSearch
    //   console.log(category,keyword)
    //   this.setGameSearch({
    //     visible: false,
    //     category,
    //     keyword
    //   })
    // },
    doFavorite (gameid,i) {
      favorite({
        game_id: gameid
      }).then(res => {
        this.$toast(res.data.msg)
        if(this.lists[i].is_favorite == 1) {
          this.lists[i].is_favorite = 2
        } else if(this.lists[i].is_favorite == 2) {
          this.lists[i].is_favorite = 1
        }
      })
    },
    onSearch () {
      // this.$emit('result', this.keyword)
      // this.doGameSearch()
      this.loadData()
    },
    onLoad () {
      this.loadData()
    },
    onCancel () {
      this.setGameSearch()
    },
    deleteHistory () {
      window.localStorage.removeItem('mywords')
    },
    onLabelClick (keyword) {
      this.keyword = keyword
      this.pageNo = 1
      this.loadData()
    },
    clearSearch() {
      this.keyword = ''
      this.lists = []
      this.pageNo = 1
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
  }
}
</script>

<style lang="less" scoped>
.search-page{
  // position: fixed;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  background: #1E1E1E;
  z-index: 1000;
  overflow: auto;
  // -webkit-overflow-scrolling: touch;
  .search-head{
    background: @bg-color;
    height: 88px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1001;
    width:100%;
    .van-search{
      flex: 1;
      padding: 0;
      padding-left: @space-gap;
      background-color: transparent!important;
      align-items: center;
    }
    /deep/ .van-search__content{
      background-color: #1E1E1E;
      padding: 16px 20px;
      border-radius: 8px;
      .van-field__left-icon{
        margin-right: 20px;
      }
      .van-icon{
        font-size: 40px;
      }
      >.van-cell{
        padding: 0;
        line-height: 40px;
      }
      .van-field__control{
        line-height: 40px;
        color: #fff;
        font-size: 28px;
      }
    }
    /deep/ .van-search__action{
      padding: 0 @space-gap;
      font-size: 34px;
      color: #666;
    }
  }
}

.search-body{
  padding: @space-gap;
  color: #666;
  .action{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: @space-gap + 50;
    h2{
      font-size: 32px;
      margin: 0;
      line-height: 1.5;
    }
    a{
      color: #7C86E9;
      font-size: 28px;
    }
  }
  .lists{
    overflow: hidden;
    margin-top: 20px;
    li{
      border:2px solid #666;
      border-radius: 30px;
      padding:10px 20px;
      float: left;
      margin-right: 20px;
    }
  }
}
</style>