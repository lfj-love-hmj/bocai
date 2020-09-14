<style lang="less" scoped>
    .jackpot {
        position: relative;
        margin: @space-gap 0;
        width: 688px;
        height: 156px;

        .bg {
            display: block;
            width: 100%;
            // box-shadow: 0 20px 20px 0 rgba(@primary-color, .3);
        }

        .light,
        .light2 {
            position: absolute;
            left: -7px;
            top: 8px;
            width: 98%;
        }

        .light2 {
            animation: fade 1s linear infinite forwards;
        }

        @keyframes fade {
            from {
                opacity: 0;
            }
            to {
                opacity: 1;
            }
        }

        .light {
            animation: fade 2s 1s linear infinite forwards;
        }

        .jackpot-text {
            position: absolute;
            left: 0;
            top: 15px;
            right: 0;
            bottom: 0;
            padding: @space-gap;
            pointer-events: none;
            text-align: center;

            h3 {
                color: @primary-color;
                font-size: 36px;
                margin: 0 0 15px;
                line-height: 50px;

                dfn {
                    font-style: normal;
                }
            }

            p {
                line-height: 36px;
                font-size: 24px;
                color: #000000;
            }
        }

        // .filters{
        //   /deep/.labels{

        //   }
        // }
    }

    .h2-title {
        height: 40px;
        border-left: 3px solid @primary-color;
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        color: rgba(51, 51, 51, 1);
        line-height: 40px;

        .t {
            flex: 1;
            margin-left: 11px;
            font-size: 28px;
            font-weight: 600;
            color: #333333;
        }

        .d {
            font-size: 28px;
            font-weight: 600;
            color: #666666;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    .matchList {
        overflow-x: scroll;
        white-space: nowrap;
        margin-top: 30px;

        .item {
            width: 330px;
            height: 288px;
            background-color: #F5F5F5;
            border-radius: 6px;
            display: inline-block;
            position: relative;
            margin-right: 16px;
            text-align: left;
            cursor: pointer;

            .pic {
                width: 330px;
                height: 196px;
                background-size: cover;
            }

            .title {
                padding-left: 30px;
                box-sizing: border-box;
                height: 92px;
                font-size: 24px;
                font-weight: bold;
                color: rgba(51, 51, 51, 1);
                line-height: 92px;

            }
        }
    }

    .rank {
        width: 690px;
        padding: 0 36px;
        box-sizing: border-box;
        height: 500px;
        background-size: 100% 100%;
        margin-top: 16px;
        display: flex;
        flex-direction: column;
        background-image: url("~@assets/img3_0/home/rank.png");

        > .r-top {
            padding: 50px 0 42px;
            overflow: hidden;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;

            > p {
                float: left;
                font-size: 36px;
                color: #F1734B;
            }

            &:after, &:before {
                content: '';
                width: 69px;
                margin: 0 16px;
                height: 1px;
                background-color: #F1734B;
            }

        }

        > .table {
            flex: 1;
            overflow: hidden;
            display: flex;
            flex-direction: column;

            ul {
                height: 90px;
                line-height: 90px;
                display: flex;

                > li {
                    flex: 1;
                    text-align: center;
                    font-size: 28px;
                    font-weight: 600;
                    color: #ccc;
                    overflow: hidden;
                }
            }

            /deep/ .swiper-container {
                flex: 1;
                margin: 0;
            }
        }

        /*.more {*/
        /*text-align: center;*/
        /*height: 82px;*/
        /*font-size: 24px;*/
        /*font-weight: 400;*/
        /*color: rgba(215, 215, 215, 1);*/
        /*line-height: 82px;*/
        /*}*/
    }

    .other-main {
        height: 516px;
        margin: 40px -30px 0;
        padding: 60px 0;
        background-size: auto 100%;
        background-image: url("~@assets/img3_0/home/other-bg.png");

        .h2-title {
            margin: 0 30px;

            .t, .d {
                color: #fff;
            }
        }

        .other {
            height: 350px;
            margin-top: 25px;

            /deep/ .swiper-slide {
                display: flex;
                align-items: center;
                justify-content: center;
                transform: scale(.7);
                transition: transform .3s;
                position: relative;

                &.swiper-slide-active {
                    transform: scale(1);
                }

                .item {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    margin-left: -230px;
                    margin-top: -144px;
                    width: 460px;
                    height: 288px;
                    background-size: 100% 100%;
                    background-position: center center;
                    background-repeat: no-repeat;
                    cursor: pointer;

                    &:not(:last-child) {
                        margin-right: 17px;
                    }

                    > .bg {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        border-radius: 10px;
                        overflow: hidden;

                        img {
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                            z-index: 0;
                            transition: all 0.45s ease-out;
                        }
                    }

                    > .vip {
                        position: absolute;
                        background-size: 100% 100%;
                        background-repeat: no-repeat;
                        background-position: center center;
                        background-image: url("~@assets/img3_0/home/vip.png");
                        top: -25px;
                        left: 25px;
                        height: 70px;
                        width: 78px;
                        font-size: 24px;
                        font-weight: 600;
                        color: rgba(255, 255, 255, 1);
                        line-height: 85px;
                        text-align: center;

                    }

                }
            }

        }
    }
</style>
<template>
    <div class="app-index-1">
        <div class="jackpot">
            <img src="@assets/img3_0/home/light1.png" class="light">
            <img src="@assets/img3_0/home/light2.png" class="light2">
            <img src="@assets/img3_0/home/jackpot-bg.png" class="bg">
            <div class="jackpot-text" v-if="jackpotSettings.startVal">
                <p>奖金池数值</p>
                <h3>
                    <dfn>CNY</dfn>
                    <v-countup
                            :duration="jackpotSettings.duration"
                            :decimals="jackpotSettings.decimals"
                            :start-value="jackpotSettings.startVal"
                            :end-value="jackpotSettings.endVal"
                    />
                </h3>
            </div>
        </div>
        <div class="h2-title">
            <div class="t">
                电子游戏
            </div>
            <div class="d" @click="$emit('handleActive',undefined,2)">
                更多
                <van-icon name="arrow"/>

            </div>
        </div>
        <ul class="matchList">
            <li
                    class="item"
                    v-for="(item, index1) in matchList"
                    :key="index1"
                    @click="$playGame(item)"
            >
                <div class="pic" :style="{backgroundImage:`url(${item.pic})`}">

                </div>
                <div class="title">
                    {{item.name}}
                </div>
            </li>
        </ul>
        <div class="rank">
            <div class="r-top">
                <p>今日盈利榜</p>
            </div>
            <!--<table-->
            <!--cellspacing="0"-->
            <!--cellpadding="0"-->
            <!--&gt;-->
            <!--<thead>-->
            <!--<tr>-->
            <!--&lt;!&ndash;<th  style="width: 15%">排名&ndash;&gt;-->

            <!--&lt;!&ndash;</th>&ndash;&gt;-->
            <!--<th>账户名</th>-->
            <!--<th>爆奖金额</th>-->
            <!--<th>游戏名称</th>-->
            <!--</tr>-->
            <!--</thead>-->
            <!--<tbody v-if="navList.length">-->
            <!--<template v-for="(item, index) in navList">-->
            <!--<tr :key="index">-->
            <!--&lt;!&ndash;<td style="width: 15%">{{ index+1 }}</td>&ndash;&gt;-->
            <!--<td>{{ item.username }}</td>-->
            <!--<td>￥{{ item.pool_money }}</td>-->
            <!--<td @click="$playGame(item)">-->
            <!--{{-->
            <!--item.game_name-->
            <!--}}-->
            <!--</td>-->
            <!--</tr>-->
            <!--</template>-->
            <!--</tbody>-->
            <!--</table>-->
            <div class="table">
                <ul>
                    <li>账户名</li>
                    <li>爆奖金额</li>
                    <li>游戏名称</li>
                </ul>
                <swiper :options="rankOption" v-if="navList.length">
                    <swiper-slide class="swiper-slide" style="height: 100%" @click.native="$playGame(item)"
                                  v-for="(item, index) in navList" :key="index">
                        <ul>
                            <!--<td style="width: 15%">{{ index+1 }}</td>-->
                            <li>{{ item.username }}</li>
                            <li>￥{{ item.pool_money }}</li>
                            <li @click="$playGame(item)">
                                {{
                                item.game_name
                                }}
                            </li>
                        </ul>

                    </swiper-slide>
                </swiper>
            </div>

            <!--<div class="more">查看更多</div>-->
        </div>
        <div class="other-main">

            <div class="container">
                <div class="h2-title">
                    <div class="t">
                        热门平台
                    </div>
                    <div class="d" @click="$emit('handleActive',undefined,2)">
                        更多
                        <van-icon name="arrow"/>
                    </div>
                </div>
                <swiper class="other" :options="productSwiperOption" v-if="otherList.length">
                    <!-- <swiper-slide class="swiper-slide" style="height: 100%" @click.native="$playGame(item,item.name)"
                                  v-for="(item, index) in otherList" :key="index"> -->
                    <swiper-slide class="swiper-slide" style="height: 100%" @click.native="$emit('handleActive',item.name)"
                                  v-for="(item, index) in otherList" :key="index">
                        <div class="item">
                            <div class="bg">
                                <img :src="require('@assets/img3_0/home/Popular'+index+'.png')"
                                >
                            </div>

                            <div class="vip">电子</div>
                        </div>

                    </swiper-slide>
                </swiper>
            </div>
        </div>


    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'

  import { mapActions, mapState } from 'vuex'
  import Roadmap from '@/components/roadmap'
  import RankSwipe from './rank-swipe'
  import { brandlist } from '@/api/home'
  import { getElepoollist, getGameLists, jackpots } from '@/api/games'
  import { hotGames } from '@/utils/platform'

  export default {
    name: 'app-index-1',
    components: {
      Roadmap,
      RankSwipe,
    },
    data () {

      return {
        hotGames,
        jackpotSettings: {},
        decimals: 2,
        duration: 10000000,
        vid: null,
        brand: null,
        jackpot: 99923405.23,
        matchList: [],
        navList: [],
        otherList: [
          {
            name: 'MG',
            default_game_id: 647,
            game_platform_id: 7
          },
          {
            name: 'PT',
            default_game_id: 3990,
            game_platform_id: 116
          },
          {
            name: 'CQ9',
            default_game_id: 2102,
            game_platform_id: 21
          }, {
            name: 'Betsoft',
            default_game_id: 2537,
            game_platform_id: 116
          }
        ],
        productSwiperOption: {
          spaceBetween: 60,
          breakpoints: {769: {slidesPerView: 2}},
          watchSlidesVisibility: true,
          lazy: true,
          loopAdditionalSlides: 3,
          centeredSlides: true,
          loop: true,
          autoplay: {
            delay: 2000,
            disableOnInteraction: false,
          },
        },
        rankOption: {
          direction: 'vertical',
          breakpoints: {769: {slidesPerView: 3}},
          loop: true,

          loopAdditionalSlides: 3,
          autoplay: {
            delay: 1500,
            disableOnInteraction: false,
          },
        },
      }
    },
    created () {
      // !this.dataProfitsRank.length && this.getProfitsRank()
      this.getJackpots()
      this.getGameLists()
      this.newtoplist()

    },
    computed: {
      ...mapState('global', ['dataProfitsRank'])
    },
    methods: {
      ...mapActions('global', [
        'getProfitsRank'
      ]),
      async newtoplist () {
        getElepoollist().then(({data}) => {
          if (data.code === 0) {
            this.navList = data.data
          }
        })
      },
      getGameLists () {
        getGameLists({
          merchant_no: 10001,
          game_cate_id: 2,
          page: 1,
          size: 24
        }).then(({data}) => {
          if (data.code === 0) {
            this.matchList = data.data.data
          }
        })
      },
      getJackpots () {
        const {decimals, duration} = this
        jackpots().then(res => {
          const {code, data, msg} = res.data
          if (code === 0) {
            const jackpot = data[1].pot_money
            this.jackpotSettings = {
              startVal: jackpot,
              endVal: jackpot * 2,
              duration,
              decimals
            }
          } else {
            console.log(msg)
          }
        })
      },
      getBrandlist () {
        brandlist().then(res => {
          const {code, data, msg} = res.data
          if (code === 0) {
            this.brand = data[0]
          } else {
            console.log(msg)
          }
        })
      },
      gameRules () {
        this.$router.push({path: '/help/manual', query: {from: 'Home'}})
      },
      // 查看榜单
      rankView () {
        this.$router.push({
          name: 'ProfitsRank'
        })
      }
    }
  }
</script>

