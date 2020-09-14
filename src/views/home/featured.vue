<template>
    <div class="featured">
        <AppIndex @handleActive="handleActive" />
        <AAGroup v-if="$config[$projectname].default&&$projectname=='wanqu'"/>
        <AAFooter v-if="['chashao', 'wanqu', '10015', 'chobet', '10046'].includes($projectname)"/>
    </div>
</template>

<script>
  import AAFooter from '@/components/aa-footer'
  import AAGroup from '@/components/aa-group'

  let AppIndex = {}

  if (process.env.VUE_APP_PROJECT_NAME === 'chashao') {
    AppIndex = require(`./components/app-index-chashao`).default
  } else if (process.env.VUE_APP_PROJECT_NAME === 'chobet' || process.env.VUE_APP_PROJECT_NAME === '10046') {
    AppIndex = require(`./components/app-index-chobet`).default
  }  else if (process.env.VUE_APP_PROJECT_NAME === '10015') {
    AppIndex = require(`./components/app-index-10015`).default
  } else if (process.env.VUE_APP_PROJECT_NAME === '10016') {
    AppIndex = require(`./components/app-index-10016`).default
  } else if (process.env.VUE_APP_PROJECT_NAME === '10018' || process.env.VUE_APP_PROJECT_NAME === '10019'|| process.env.VUE_APP_PROJECT_NAME === '10021') {
    AppIndex = require(`./components/app-index-10018`).default
  } else if (['takchun', '10012', '10013', 'mgm8', '10006', '10011', '10007', '10009', '10010', '10008', '10014','10019', '10020','10034'].indexOf(process.env.VUE_APP_PROJECT_NAME) > -1) {
    AppIndex = require(`./components/app-index-takchun`).default
  } else if (process.env.VUE_APP_PROJECT_NAME === '10057') {
    AppIndex = require(`./components/app-index-smh`).default
  } else {
    AppIndex = require(`./components/app-index-wanqu`).default
  }
  console.log(AppIndex,process.env.VUE_APP_PROJECT_NAME)
  export default {
    name: 'Featured',
    components: {
      AAGroup,
      AAFooter,
      AppIndex,
      // AppIndexChashao,
      // AppIndexDejinvip,
      // AppIndexChobet,
      // AppIndex10018
      // Roadmap,
      // RankSwipe,
    },
    data () {
      return {
        // aoMenUi:['takchun','Gdh','Js3','mgm8','Wns1','Cod8','Xpj28','Yh8','Yl0','ybh']
        // aoMenUi: ['takchun', '10012', '10013', 'mgm8', '10006', '10011', '10007', '10009', '10010', '10008', '10019']
      }
    },
    methods: {
      handleActive (val,active) {
        console.log(123123, val)
        this.$emit('handleActive', val,active)
      }
    }
  }
</script>

<style lang="less" scoped>
    .brand {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        // height: 140px;
        margin-top: @space-gap;
        margin-left: -@space-gap;
        margin-bottom: @space-gap;
        > .van-image {
            height: 100%;
            margin-left: @space-gap;
            min-height: 140px;
            /deep/ img {
                display: block;
                width: 100%;
                &[lazy="loading"] {
                    height: 140px;
                    width: auto;
                }
            }
        }
        .nvyou {
            flex-basis: 205px;
            flex-grow: 3;
        }
        .cooperation {
            flex-basis: 125px;
            flex-grow: 2;
        }
    }

    .hot-games {
        margin-bottom: @space-gap;
        .game-item {
            > .van-image {
                min-height: 180px;
                /deep/ img[lazy="loading"] {
                    height: 180px;
                    width: auto;
                }
            }
            &.ag {
                background-color: #282828;
                border-radius: 8px;
                > .van-image {
                    min-height: 240px;
                    /deep/ img[lazy="loading"] {
                        height: 240px;
                        width: auto;
                    }
                }
            }
        }
    }

    .casino-events {
        margin-bottom: @space-gap;
        .jackpot {
            width: 100%;
            height: 76px;
            display: flex;
            align-items: center;
            padding: 0 @space-gap;
            justify-content: space-around;
            border-radius: 50px;
            border: 2px solid @primary-color;
            margin-bottom: @space-gap;
            img {
                height: 60px;
            }
            .desc {
                font-size: 28px;
                color: @primary-color;
                font-weight: 500;
                span {
                    padding: 0 5px;
                    line-height: 1;
                    &.amount {
                        font-size: 32px;
                    }
                }
                dfn {
                    font-style: normal;
                    padding-right: 5px;
                }
            }
        }
        .event {
            img {
                display: block;
                width: 100%;
            }
        }
    }

    .profit-ranks {
        width: 100%;
        margin-bottom: @space-gap;
    }

    .brand-rion {
        margin-bottom: @space-gap;
        .rion {
            img {
                display: block;
                width: 100%;
                border-radius: 10px;
            }
        }
    }
</style>
