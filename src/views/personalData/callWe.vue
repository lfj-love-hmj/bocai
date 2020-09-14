<template>
    <div class="container callWe">
        <lheader :title="title" path="111" :activated="$route.query.activated"></lheader>
        <div class="main">
            <div class="list" v-for="(item,i) in contact" :key="i" @click="go(item.link)">
              <template v-if="item.param_value">
                <div class="title">{{item.param_name}}</div>
                <span>{{item.param_value}}</span>
              </template>
            </div>

        </div>
        <!-- <div class="cell" @click="toOnlineChat">
            <div class="left">在线客服</div>
            <div>OnlineChat</div>
            <img src="@assets/img/contactUsIcon/arrow@2x.png" alt="">
        </div> -->
        <loading :isShow="isLoading"></loading>
    </div>
</template>

<script>
import Lheader from '@/components/l-header'
import Loading from '@/components/loading'
import { mapState, mapActions } from 'vuex'

export default {
  name: 'discountCore',
  components: {
    Loading,
    Lheader
  },
  data () {
    return {
      title: '联系我们',
      isLoading: false,
      qq: {},
      wechat: {},
      phoneGj: {},
      phoneFlb: {},
      onlineChat: {},
      contact:[
        {
          title:'客服邮箱',
          content:'aawanqu@gmail.com'
        },
        {
          title:'SKYPE',
          content:''
        },
        {
          title:'帮助',
          content:''
        },
        {
          title:'合营伙伴联系方式',
          content:''
        }
      ]
    }
  },
  computed: {
    ...mapState('global', ['siteInfo'])
  },
  created () {
    if (this.siteInfo) {
      this.computeData(this.siteInfo)
    } else {
      this.isLoading = true
      this.getSiteInfo().then(data => {
        this.computeData(data)
        this.isLoading = false
      })
    }
  },
  methods: {
    ...mapActions('global', [
      'getSiteInfo'
    ]),
    go(link) {
      window.open(link, 'contact')
    },
    computeData (data) {
      if (data && data.extend_params) {
        const params = JSON.parse(data.extend_params)
        this.contact = params
        // params.forEach(item => {
        //   if (item.param_name === 'QQ') {
        //     this.qq = item
        //   } else if (item.param_name === '微信') {
        //     this.wechat = item
        //   } else if (item.param_name === '国际热线') {
        //     this.phoneGj = item
        //   } else if (item.param_name === '菲律宾热线') {
        //     this.phoneFlb = item
        //   } else if (item.param_name === '在线客服') {
        //     this.onlineChat = item
        //   }
        // })
      }
    },
    toOnlineChat () {
      this.$openKefu()
    }
  }
}
</script>

<style scoped lang="less">
    .container {
        display: flex;
        flex-direction: column;
        .main {
            margin-top: @height-nav-bar;
            padding: 15px;
            box-sizing: border-box;
            display: flex;
            flex-wrap: wrap;
            .list {
              width:100%;
              margin-left: 40px;
              margin-top: 40px;
              .title{
                color:@primary-color;
                font-size: 32px;
                padding-left: 20px;
                border-left: 4px solid @primary-color;
                margin-bottom: 24px;
              }
              >span{
                color:#666666;
                font-size: 28px;
              }
            }
            .cell {
                height: 100px;
                background: #fff;
                display: flex;
                align-items: center;
                padding: 0 30px;
                color: #878787;
                margin: 40px -22px;
                font-size: 30px;
                .left {
                    flex: 1;
                    font-weight: 600;
                    color: #222222;
                }
                img {
                    width: 22px;
                    height: 22px;
                    margin-left: 14px;
                }
            }
        }
    }
</style>
