<template>
    <div id="home">
        <vtabbar class="m-footer" :index="0"></vtabbar>
        <!-- <div class="newyear-gif">
          <van-image :src="require('@assets/img3_0/decorate/newyear.gif')"></van-image>
        </div> -->
        <div :class="['m-body',{'bg-img':['Home'].indexOf($route.name) !== -1}]">

            <gheader class="m-header"></gheader>
            <van-tabs
                    v-model="active"
                    animated
                    :ellipsis="false"
                    :swipe-threshold="6"
                    :color="$colorjs.baseColor"
                    line-height="3px"
                    sticky
                    class="nav-type-1"
                    @change="onTabChange"
            >
                <van-tab
                        v-for="(item, index) in navs"
                        :title="item.title"
                        :key="index"
                        :class="item.name"
                >
                    <!-- 精选 -->
                    <template v-if="item.name === 'featured'">
                        <Banner :pageName="item.name"/>
                        <!-- <van-image lazy-load :src="require('@assets/img3_0/banner-pic/casino.png')" style="margin-top:0.4rem;" v-else/> -->
                        <Notice v-if="$projectname !== '10015'"/>

                        <Featured @handleActive="handleActive"/>
                    </template>
                    <!-- 真人 -->
                    <template v-if="item.name === 'casino'">
                      <Banner :pageName="item.name" :banner="item.bannerPic"/>
                      <Casino />
                    </template>
                    <!-- 棋牌 -->
                    <template v-if="item.name === 'chess'">
                        <!-- <Banner :banner="item.bannerPic" /> -->
                        <Chess/>
                    </template>
                    <!-- 电子 -->
                    <template v-if="item.name === 'slots'">
                        <Banner :pageName="item.name" :banner="item.bannerPic"/>
                        <Slots :slotsType="slotsType" @changeSlotsType="changeSlotsType"/>
                    </template>
                    <!-- 彩票 -->
                    <template v-if="item.name === 'lottery'">
                        <Banner :pageName="item.name" :banner="item.bannerPic"/>
                        <Lottery/>
                    </template>
                    <!-- 捕鱼 -->
                    <template v-if="item.name === 'fishing'">
                        <!-- <Banner /> -->
                      <Banner v-if="$projectname==='10057'" :pageName="item.name" :banner="item.bannerPic"/>
                        <Fishing/>
                    </template>
                    <!-- 体育 -->
                    <template v-if="item.name === 'sports'">
                        <Banner :pageName="item.name" :banner="item.bannerPic"/>
                        <Sports/>
                    </template>
                    <!-- 电竞 -->
                    <template v-if="item.name === 'esports'">
                        <Banner :pageName="item.name" :banner="item.bannerPic"/>
                        <ESports/>
                    </template>
                </van-tab>
            </van-tabs>
        </div>
        <!-- <SixGift v-if="sixGiftIsAvailable" /> -->
        <!-- <GameSearch v-if="gameSearch && gameSearch.visible" /> -->
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  // import "swiper/dist/css/swiper.css";
  import Gheader from '@/components/g-header'
  import Vtabbar from '@/components/v-tabbar'
  import SixGift from './sixGift.vue'
  import AppBanner from './components/app-banner'
  import Banner from './components/banner'
  import Notice from './components/notice'
  import Featured from './featured'
  import Casino from './casino'
  import Chess from './chess'
  import Slots from './slots'
  import Lottery from './lottery'
  import Fishing from './fishing'
  import Sports from './sports'
  import ESports from './esports'
  // import GameSearch from '@/components/search/search'
  import { open } from '@/api/entertainment'
  import { historylist, siteinfo, indexbanner } from '@/api/home'
  import { member } from '@/api/memberCenter'
  // import appInstall from '../components/app-install'

  export default {
    name: 'Index',
    components: {
      Gheader,
      Banner,
      Notice,
      AppBanner,
      Featured,
      Casino,
      Chess,
      Slots,
      Lottery,
      Fishing,
      Sports,
      ESports,
      SixGift,
      // GameSearch,
      Vtabbar
    },
    data () {
      return {

        navs: [{
          title: this.$config[process.env.VUE_APP_PROJECT_NAME].title,
          name: 'featured',
          bannerPic: '',
        }, {
          title: '真人',
          name: 'casino',
          bannerPic: ''
        }, {
          title: '电子',
          name: 'slots',
          bannerPic: ''
        }, {
          title: '彩票',
          name: 'lottery',
          bannerPic: ''
        }, {
          title: '棋牌',
          name: 'chess',
          bannerPic: ''
        }, {
          title: '体育',
          name: 'sports',
          bannerPic: ''
        },
          {
            title: '电竞',
            name: 'esports',
            bannerPic: ''
          },
          {
            title: '捕鱼',
            name: 'fishing',
            bannerPic: ''
          }],
        active: 0,
        sixGiftIsAvailable: true,
        access_token: window.localStorage.token,
        slotsType: '',
        banner: [],
        sort: ['featured','esports','casino','slots','lottery','chess','fishing'],
        casinoItem: {
          default_game_id: 1,
          game_platform_id: 1,
          game_platform_name: "AG",
          name: 'ag'
        }
      }
    },
    watch: {
      async active (val) {
        if (val !== 2) {
          this.slotsType = ''
        }
        let title = this.navs[val].title
        if(val) {
          const game_cate_id = this.gameCatesPlatforms.filter(item => item.game_cate_name === title)[0].game_cate_id
          console.log(123, game_cate_id)
          const res = await indexbanner(process.env.VUE_APP_MERCHANT_NO,{game_cate_id})
          this.banner = res.data.data
          if(this.banner[0] && this.banner[0].h5_pic) {
            this.navs[val].bannerPic = this.banner[0].h5_pic
          }
        }
      }
    },
    created () {
      this.navs.map((item, index) => {
        if (item.name === this.$config[this.$projectname].name && item.name !== 'featured') {
          this.navs.splice(index, 1)
        }
      })
      if(this.$projectname === '10046') {
        this.sortGame()
      }
    },
    mounted () {
      // this.lang();
      // this.startMove();
    },
    computed: {
      ...mapState('global', ['gameSearch']),
      ...mapState('games', ['gameCatesPlatforms'])
    },
    methods: {
      sortGame() {
        let temp = []
        this.sort.map(m => {
          this.navs.map(n => {
            if(n.name == m) {
              temp.push(n)
            }
          })
        })
        console.log(temp)
        this.navs = temp
      },
      openGame () {
        if (!window.localStorage.token) {
          this.$router.push({
            path: 'login'
          })
          return false
        }
        let routeUrl = this.$router.resolve({
          path: '/game',
          query: {
            at: window.localStorage.token,
            game_id: 16
          }
        })
        window.open(routeUrl.href, '_blank')
      },
      openGame (item) {
        if (window.localStorage.token) {
          let routeUrl = this.$router.resolve({
            path: '/game',
            query: {
              at: window.localStorage.token,
              game_id: item.default_game_id,
              platform_id: item.game_platform_id
            }
          })
          window.open(routeUrl.href, '_blank')
        } else {
          this.$router.push({path: '/login'})
        }
      },
      jump (path) {
        if (path === 'liuheColor') {
          this.$router.push({
            name: 'game',
            params: {
              id: 16
            }
          })
        } else {
          this.$router.push({path: path})
        }
      },
      onTabChange (index, title) {
        console.log(index, title)
        // if(window.sessionStorage.getItem('10046_route_after')) {
        //   window.sessionStorage.setItem('10046_route_before',window.sessionStorage.getItem('10046_route_after'))
        //   console.log(window.sessionStorage.getItem('10046_route_after'))
        // }
        // if(title === '真人' && this.$projectname === '10046') {
        //   this.$playGame(this.casinoItem,'真人')
        //   if(window.sessionStorage.getItem('10046_route_after')) {
        //     this.navs[index].name = this.navs[window.sessionStorage.getItem('10046_route_after')*1].name
        //   } else {
        //     this.navs[index].name = 'featured'
        //   }
        // }
        // window.sessionStorage.setItem('10046_route_after', index)
        // console.log(index, title)
        // Object.assign(
        //   this.$route.query, {
        //     tab: index
        //   }
        // )
      },
      handleActive (val, active) {
        console.log(val, active)
        if (val) {
          this.active = 2
          this.slotsType = val
        } else {
          this.active = active
        }
      },
      changeSlotsType () {
        this.slotsType = ''
      }
    }
  }
</script>

<style scoped lang="less">
    @import '~@assets/styles/home/index.less';

    #home {
    }

    .address_net {
        position: relative;
        margin: 0.25rem;
        height: 0.8rem;
        border-radius: 15px;
        background: #000;
        color: #fff;
        text-align: center;
        line-height: 0.8rem;
        font-size: 0.5rem;
        /deep/ .van-icon {
            position: absolute;
            top: 50%;
            right: 30px;
            transform: translateY(-50%);
            color: #fff;
            font-size: 0.6rem;
        }
    }

    // .m-header{
    //   position:static;
    //   /deep/ .aagames-nav-bar{
    //     position:static;
    //   }
    // }
    .van-tabs {
        /deep/ .van-tabs__content {
            .page-linear-gradient();
            .van-tab__pane-wrapper {
                overflow: hidden;
                padding: 0 @space-gap;
                &.fishing {
                    background: #1e1e1e url(~@assets/img3_0/home/fishing/bg@2x.jpg) no-repeat;
                    background-size: cover;
                    min-height: 84vh;
                }
                &.chess {
                    background: #1e1e1e url(~@assets/img3_0/home/chess/bg@2x.jpg) repeat;
                    background-size: contain;
                }
            }
        }
        /deep/ .van-tab--active {
            font-size: 36px;
        }
        .banner {
            margin-top: @space-gap;
        }
    }

    /deep/ .ui-title {
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        margin-bottom: @space-gap;
        h2 {
            margin: 0;
        }
        .addon {
            color: #ccc;
            font-size: 24px;
        }
    }

    // /deep/ .van-image{
    //   .van-image__error,
    //   .van-image__loading{
    //     background-color: @bg-color;
    //     border-radius: 8px;
    //   }
    //   .van-image__loading{
    //     background-image: url(~@assets/img3_0/common/loading.png);
    //     background-position: center center;
    //     background-repeat: no-repeat;
    //     background-size: 80px 80px;
    //     z-index: 10;
    //     .van-icon{
    //       opacity: 0;
    //     }
    //   }
    // }

    /deep/ .games-wrap {
        display: flex;
        flex-wrap: wrap;
        margin-left: -@space-gap;
        &.mb-gap {
            margin-bottom: 88px;
        }
        .game-item {
            position: relative;
            width: calc(50% - @space-gap);
            margin-left: @space-gap;
            margin-bottom: @space-gap;
            .van-image {
                width: 100%;
                /deep/ img[lazy="loading"] {
                    opacity: 0;
                    max-width: 100%
                }
            }
            .game-info {
                position: absolute;
                left: 0;
                top: 0;
                right: 0;
                padding-left: 25px;
                padding-top: @space-gap;
            }
            h3 {
                font-size: 32px;
                margin: 0 0 @space-gap;
            }
            p {
                margin-bottom: 10px;
                opacity: .7;
                &.tag-p {
                    margin-bottom: 20px;
                }
            }
            &.large {
                width: calc(100% - @space-gap);
                .game-info {
                    h3 {
                        font-size: 40px;
                        margin-top: 20px;
                    }
                    p {
                        font-size: 28px;
                        margin-bottom: @space-gap/2;
                    }
                }
            }
            // &.tall{
            //   height: calc(100% - @space-gap);
            //   .game-info{
            //     h3{
            //       font-size: 40px;
            //       margin-top: 20px;
            //     }
            //     p{
            //       font-size: 28px;
            //       margin-bottom: @space-gap/2;
            //     }
            //   }
            // }
        }
        &.float-wrap {
            display: block;
            .clearfix();
            .game-item {
                float: left;
                &.allbet {
                    clear: left;
                }
                &.tall ~ .game-item:nth-child(4) {
                    clear: left;
                }
            }
        }
    }

    /deep/ .filter-nav {
        margin: @space-gap -@space-gap;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 2px solid @border-color;
        .van-tabs {
            width: 70%;
            border-bottom: none;
            .van-tabs__nav {
                background-color: @bg-color !important;
            }
            .van-tab,
            .van-tabs__wrap,
            .van-tabs__nav {
                height: 80px;
                line-height: 80px;
                font-size: 28px;
            }
            .van-tabs__wrap {
                border-bottom: none;
            }
        }
        .search {
            width: 30%;
            padding: 0 30px;
        }
    }

    /deep/ .labels {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: flex-start;
        padding-bottom: @space-gap;
        &.platform {
            display: block;
            overflow-x: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
            > div {
                // width:1100px;
                // overflow: hidden;
                // overflow: auto;
                // display: flex;
                // justify-content: space-between;
                display: flex;
                float: left;
                min-width: 100%;
                label {
                    &:first-child {
                        min-width: 180px;
                    }
                    min-width: 40px;
                    text-align: center;
                    // float:left;
                    // line-height: 68px;
                    // height:68px;
                }
            }
        }
        label {
            width: auto;
            padding: 0 @space-gap;
            line-height: 68px;
            color: #ccc;
            border-radius: 68px;
            // transition: all .45s ease-out;
            border: 2px solid transparent;
            &.active {
                color: @primary-color;
                border-color: @primary-color;
                font-weight: 500;
            }
        }
    }

    /deep/ .search-info {
        margin-bottom: @space-gap;
        text-align: center;
        margin-top: @space-gap + 50;
        > span {
            color: @primary-color;
            margin-right: 10px;
        }
    }

    /deep/ .van-list {
        &.games {
            display: flex;
            flex-wrap: wrap;
            margin-bottom: 90px;
            justify-content: space-around;
            .empty-game {
                width: 100%;
                text-align: center;
                img {
                    width: 120px;
                    margin: 0 auto;
                }
            }
            .van-cell {
                position: relative;
                width: calc(50% - @space-gap);
                margin-bottom: @space-gap;
                // margin-right: @space-gap;
                padding: 0;
                border-radius: 8px;
                overflow: hidden;
                background: @bg-card-color;
                border: 2px solid @border-color-base;
                // &:nth-child(2n) {
                //   margin-left: @space-gap;
                //   margin-right: 0;
                // }
                &:after {
                    border-bottom: none !important;
                }
                .game-item {
                    color: #fff;
                    position: relative;
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
                        background-image: linear-gradient(to right, #FF9A5D, #FF3937);
                        text-transform: uppercase;
                        transform: rotate(45deg) translate(-20%, -20%);
                        transform-origin: 100% 100%;
                        &.new {
                            background-image: linear-gradient(to right, #05D0DA, #279CF8);
                        }
                    }
                    .info {
                        padding: 20px 15px;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
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
    }
</style>
