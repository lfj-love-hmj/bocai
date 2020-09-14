<template>
  <div class="search-page">
    <form action="/" class="search-head">
      <van-search
        v-model="keyword"
        placeholder="请输入游戏名称"
        show-action
        @search="onSearch"
        @input="onInput"
        @clear="onClear"
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
        <li v-for="(w, index) in mywords" :key="index" @click="onLabelClick(w)">{{ w }}</li>
      </ul>
      <div class="search-info" v-if="keyword && lists.length">
        <span>{{ keyword }}</span>的搜索结果
        <span @click="clearSearch">清除</span>
      </div>
      <template v-if="lists.length">
        <van-list
          class="games"
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          :immediate-check="false"
        >
            <van-cell v-for="(item, index) in lists" :key="index">
              <div class="game-item" slot="default">
                <van-image :src="item.pic" fit="cover" lazy @click="$playGame(item)" />
                <template v-if="nav && nav.name === 'latest'">
                  <span v-if="item.is_new" :class="['tag', 'new']">new</span>
                  <span v-else-if="item.is_hot" :class="['tag', 'hot']">hot</span>
                </template>
                <template v-else>
                  <span v-if="item.is_hot" :class="['tag', 'hot']">hot</span>
                  <span v-else-if="item.is_new" :class="['tag', 'new']">new</span>
                </template>
                <div class="info">
                  <h3>
                    <span>{{ getPlatformNameById(item.game_platform_id) }}</span>
                    {{ item.name }}
                  </h3>
                  <span class="action">
                    <van-icon
                      @click="doFavorite(item.id,index)"
                      :name="item.is_favorite === 0 ? 'like-o' : 'like'"
                    />
                  </span>
                </div>
              </div>
            </van-cell>
        </van-list>
      </template>
      <template v-else>
        <div class="empty-game">
          <img :src="$imgs['error/kong@2x']" alt="">
        </div>
        <div class="empty-text">
          <span>未搜到相关游戏</span><br />
          <span>请尝试更换条件查询</span>
        </div>
      </template>

    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import { getGameSlotPlatform } from "@/utils/utils";
import {
  getGameLists,
  getHotGameLists,
  getNewGameLists,
  getFavoriteGameLists,
  favorite
} from "@/api/games";
import _ from "lodash";

// import { getGameLists } from '@/api/games'
export default {
  name: "SearchPage",
  data() {
    return {
      keyword: "",
      mywords: [],
      cachedKey: "",
      pageNo: 1,
      lists: [],
      pageSize: 20,
      loading: false,
      finished: false,
      nav: null,
      platform: []
    };
  },
  computed: {
    ...mapState("global", ["gameSearch"]),
    ...mapState("games", ["gameCatesPlatforms","platformGameIds"])
  },
  created() {
    // this.keyword = this.gameSearch.keyword || ''
    // const { category } = this.gameSearch
    // const key = `category_${category}_mywords`
    // this.cachedKey = key
    let mywords = JSON.parse(window.localStorage.getItem("mywords") || "[]");
    this.mywords = mywords;
    const { nav, category } = this.gameSearch;
    const { gameCatesPlatforms } = this;
    this.platforms = getGameSlotPlatform(category, this.platformGameIds);
    this.nav = nav;
    // console.log(category)
  },
  methods: {
    ...mapActions("global", ["setGameSearch"]),
    loadData(reload) {
      if(!this.keyword) {
        return false
      }
      this.$loading({
        mask: false
      });
      const { pageNo, keyword, mywords } = this;
      const { platform, category, nav, payforline } = this.gameSearch;
      if (mywords.indexOf(keyword) == -1 && keyword) {
        mywords.push(keyword);
      }
      window.localStorage.setItem("mywords", JSON.stringify(mywords));

      const params = {
        game_cate_id: category,
        platform_id: (platform && platform.id) || null,
        page: pageNo,
        name: keyword
      };
      if (payforline) {
        Object.assign(params, {
          is_payfor: payforline
        });
      }
      let request;
      if (nav.name === "fav") {
        request = getFavoriteGameLists(params);
      } else if (nav.name === "latest") {
        request = getNewGameLists(params);
      } else if (nav.name === "hot") {
        request = getHotGameLists(params);
      } else {
        request = getGameLists(params);
      }
      request.then(res => {
        const { code, data, msg } = res.data;
        if (code === 0) {
          this.lists = reload ? data.data : this.lists.concat(data.data);
          this.total = data.total;
          this.pageNo++;
          if (this.pageNo > data.last_page) {
            this.finished = true;
          }
          this.loading = false;
          this.$toast.clear();
        } else {
          console.log(msg);
        }
      });
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
    doFavorite(gameid, i) {
      favorite({
        game_id: gameid
      }).then(res => {
        this.$toast(res.data.msg);
        if (this.lists[i].is_favorite == 1) {
          this.lists[i].is_favorite = 2;
        } else if (this.lists[i].is_favorite == 2) {
          this.lists[i].is_favorite = 1;
        }
      });
    },
    onSearch() {
      // this.$emit('result', this.keyword)
      // this.doGameSearch()
      this.lists = []
      this.pageNo = 1
      this.loadData();
    },
    onInput: _.debounce(function() {
      this.lists = []
      this.pageNo = 1
      this.loadData();
    },1000),
    onLoad() {
      this.loadData();
    },
    onCancel() {
      this.setGameSearch();
      this.$router.go(-1)
    },
    onClear() {
      this.lists = []
    },
    deleteHistory() {
      window.localStorage.removeItem("mywords");
      this.mywords = []
      this.lists = []
    },
    onLabelClick(keyword) {
      this.keyword = keyword;
      this.pageNo = 1;
      this.loadData();
    },
    clearSearch() {
      this.keyword = "";
      this.lists = [];
      this.pageNo = 1;
    },
    getPlatformNameById(id) {
      const { platforms } = this;
      let ret = "";
      platforms.forEach(platform => {
        if (id === platform.id) {
          ret = platform.name;
          return false;
        }
      });
      return ret;
    }
  }
};
</script>

<style lang="less" scoped>
@import '~@assets/styles/home/index.less';
.search-page {
  // position: fixed;
  // left: 0;
  // top: 0;
  // right: 0;
  // bottom: 0;
  background: none!important;
  //   z-index: 1000;
  //   overflow: auto;
  // -webkit-overflow-scrolling: touch;
  .search-head {
    background: #000;
    height: 88px;
    display: flex;
    align-items: center;
    position: fixed;
    z-index: 1001;
    width: 100%;
    top: 20px;
    color: #fff;
    .van-search {
      flex: 1;
      padding: 0;
      padding-left: @space-gap;
      background-color: transparent !important;
      align-items: center;
      .van-search__action:active{
        background: none;
      }
    }
    /deep/ .van-search__content {
      background-color: #191919;
      padding: 16px 20px;
      border-radius: 8px;
      .van-field__left-icon {
        margin-right: 20px;
        color: #666;
      }
      .van-icon {
        font-size: 40px;
      }
      > .van-cell {
        padding: 0;
        line-height: 40px;
      }
      .van-field__control {
        line-height: 40px;
        color: #fff;
        font-size: 28px;
      }
    }
    /deep/ .van-search__action {
      padding: 0 @space-gap;
      font-size: 34px;
      color: #fff;
    }
  }
}

.search-body {
  color: #fff;
  background: #000;
  padding-top: 30px;
  /deep/ .search-info {
    margin-bottom: @space-gap;
    text-align: center;
    > span {
      color: @primary-color;
      margin-right: 10px;
    }
  }
  .empty-game{
      width: 100%;
      text-align: center;
      margin-top: 88px;
      img{
        width: 120px;
        margin: 0 auto;
      }
  }
  .empty-text{
    text-align: center;
    margin:30px 0;
    span {
      display: inline-block;
      margin-top: 15px;
    }
  }
  /deep/.van-list {
    margin-top: 100px;
    &.games {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 90px;
      justify-content: space-between;
      padding: 0 30px;
      .van-cell {
        position: relative;
        width: 330px;
        // margin-left: @space-gap;
        margin-bottom: @space-gap;
        background: @bg-color;
        padding: 0;
        border-radius: 8px;
        overflow: hidden;
        &:after {
          border-bottom: none !important;
        }
        .game-item {
          color: #fff;
          position: relative;
          background-color: #fff;
          box-shadow:0px 2px 10px 0px rgba(0,34,80,0.05);
          .tag {
            width: 100px;
            height: 100px;
            position: absolute;
            right: 0;
            top: 0;
            text-align: center;
            padding-top: 70px;
            line-height: 30px;
            font-size: 20px;
            background-image: linear-gradient(to right, #ff9a5d, #ff3937);
            text-transform: uppercase;
            transform: rotate(45deg) translate(-20%, -20%);
            transform-origin: 100% 100%;
            &.new {
              background-image: linear-gradient(to right, #05d0da, #279cf8);
            }
          }
          .info {
            padding: 20px 15px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            .van-icon {
              font-size: 40px;
              color: #979797;
              &.van-icon-like {
                color: @primary-color;
              }
            }
          }
        }
        h3 {
          font-size: 28px;
          margin: 0;
          color: #333;
          span {
            background-color: @primary-color;
            color: #fff;
            font-size: 20px;
            padding: 2px 6px;
            font-weight: 300;
            margin-right: 6px;
            border-radius: 5px;
          }
        }
      }
      .van-image {
        width: 100%;
        height: 200px;
      }
      .van-list__loading,
      .van-list__finished-text {
        width: 100%;
        padding-bottom: @space-gap;
      }
    }
    .action{
      margin: 0;
      padding: 0;
    }
  }
  .action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: @space-gap + 80;
    padding: 20px 30px 0;
    h2 {
      font-size: 32px;
      margin: 0;
      line-height: 1.5;
    }
    a {
      color: #7c86e9;
      font-size: 28px;
    }
  }
  .lists {
    overflow: hidden;
    margin-top: 20px;
    margin-bottom: @space-gap;
    padding: 0 30px;
    li {
      border: 2px solid #666;
      border-radius: 30px;
      padding: 10px 20px;
      float: left;
      margin-right: 20px;
      margin-bottom: 10px;
    }
  }
}
</style>
