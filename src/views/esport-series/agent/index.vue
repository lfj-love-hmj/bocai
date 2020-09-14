<style scoped lang="less">
  @import "index";
  @import url('~@assets/styles/agent/index.less');

  .container {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: #fff;
    background-size: 100% auto;
    background-repeat: no-repeat;

    .main {
      padding: 0;
      margin-top: @main-top;

      .member {
        padding: 30px;
        box-sizing: border-box;
        display: flex;

        .avatar {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          margin-right: 26px;
          background-size: cover;
          background-position: center;
        }

        .right {
          flex: 1;

          .name {
            height: 56px;
            font-size: 40px;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
            line-height: 56px;
          }

          .desc {
            margin-top: 8px;
            height: 34px;
            font-size: 24px;
            font-weight: 400;
            color: rgba(102, 102, 102, 1);
            line-height: 34px;
          }
        }
      }

      .user {
        padding: 40px;
        background-size: cover;
        background-repeat: no-repeat;
        display: flex;
        height: 304px;
        flex-direction: column;
        border-radius: 8px;
        box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.5);

        .name {
          height: 34px;
          font-size: 24px;
          font-weight: 400;
          color: rgba(255, 255, 255, 1);
          line-height: 34px;
        }

        .money {
          margin-top: 6px;
          height: 48px;
          font-size: 40px;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
          line-height: 48px;
        }

        .left, .right {
          flex: 1;
        }

        .top {
          display: flex;
          flex: 1;

          .left {
          }

          .but {
            text-align: center;
            width: 120px;
            height: 60px;
            border-radius: 8px;
            border: 2px solid rgba(255, 255, 255, 0.6);
            font-size: 28px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.6);
            line-height: 60px;
          }

          .money {
            height: 70px;
            font-size: 60px;
            font-weight: bold;
            line-height: 70px;
          }
        }

        .bottom {
          margin-top: 24px;
          flex: 1;
          display: flex;

          .left {
          }

          .right {

          }
        }
      }

      .domain {
        width: 690px;
        margin: 0 auto;
        background: #2C3449;
        border-radius: 8px 8px 12px 12px;

        .no-domain {

          margin: 0 auto;
          padding: 0 20px;
          font-size: .373333rem;
          font-weight: 400;
          color: rgba(153, 153, 153, 1);
          margin-top: .466667rem;
        }

        .header {
          display: flex;
          justify-content: space-between;
          width: 100%;

          .title {
            font-size: .373333rem;
            font-weight: 600;
            color: #222;
          }

          .lookmore {
            font-size: .373333rem;
            font-weight: 400;
            color: rgba(153, 153, 153, 1);
          }

          .light-color {
            color: #AD7600;
          }
        }

        .list {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
          width: 690px;
          height: 88px;
          margin: 0 auto;
          box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.5);
          border-radius: 0px 0px 12px 12px;

          .domain-name {
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            width: 400px;
            height: 34px;
            font-size: 24px;
            font-weight: 400;
            color: rgba(255,255,255,.6);
            line-height: 34px;

            #domainFullPath {
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
            }
          }

          .copy {
            text-align: center;
            width: 80px;
            height: 40px;
            border-radius: 24px;
            border: 2px solid rgba(255,255,255,.6);
            font-size: 24px;
            font-weight: 400;
            color: rgba(255,255,255,.6);
            line-height: 40px;
          }

          .qrData {
            width: 44px;
            height: 44px;
          }
        }
      }

      // 个人中心-菜单入口
      .person-entr {
        /*background-color: #fff;;*/
        margin-top: 20px;

        .input {
          border-bottom: 1px solid #fff;
          margin-right: 0;

          .icon {
            width: 44px;
            margin-right: 28px;
            position: relative;
            top: 4px;

            &.dailibaobiao {
              width: 70px;
              position: relative;
              left: 14px;
              margin-left: -30px;
            }
          }

          .more {
            width: 70px;
          }
        }

        .noBorder {
          border-bottom: none;

          &:after {
            display: none;
          }
        }

        .br {
          width: 750px;
          height: 20px;
          background: #f5f5f5;
        }
      }
      .aagames-button-box{
        padding: 40px 30px;
        width: 100%;
        background: #F5F6FA;
        margin-bottom: 0;
      }
      // 退出
      .login-out-01 {
        width:90%;
        background:rgba(255,255,255,1);
        border-radius:8px;
        line-height: 45px;
        color: #333333;
        margin: 0 auto;
        display: block;
      }
    }
  }

  .domain-dialog {
    background: none;
    height: 800px;

    .website {
      background-color: #FFFFFF;
      border-radius: 20px;
      position: relative;
      color: #67382F;
      line-height: 64px;
      font-size: 32px;
      text-align: center;
      padding-bottom: 30px;

      .url {
        font-size: 30px;
        color: #B4B4B4;
        text-align: center;
      }

      .qrData {
        width: 520px;
        height: 520px;
      }

      .download {
        text-align: center;
        font-size: 28px;
        font-weight: 400;
        color: rgba(102, 102, 102, 1);
        margin-top: -50px;
      }

      .cross {
        width: 80px;
        position: absolute;
        bottom: -134px;
        left: 50%;
        margin-left: -40px;
      }
    }
  }
  /deep/ .van-popup.custom .pop-head h2{
    font-weight: bold;
  }
  /deep/ .vipOpen .input p{
    font-weight: bold;
  }
</style>
<template>
  <div class="container daili-container" :style="{backgroundImage:$bImgs['agent/bet_delegate_center_top_bg@2x']}">
    <!--<lheader :goback="true" :get-switch="false" :title="title"></lheader>-->
    <div class="main">
      <div class="member">
        <div class="avatar":style="{backgroundImage: $bImgs['agent/agent_icon7']}">

        </div>
        <div class="right">
          <div class="name">{{list.username}}</div>
          <div class="desc">
            这是您成为{{$config[$projectname].project}}代理的第{{list.day + 1}}天
          </div>
        </div>
      </div>

      <!-- 推广域名 -->
      <div class="domain">
        <!-- 用户信息 -->
        <div class="user" :style="{backgroundImage: $bImgs['agent/agent_icon8']}">
          <div class="top">
            <div class="left">
              <div class="name">
                本月有效投注
              </div>
              <div class="money">{{usercount.valid_invest}}</div>
            </div>
            <div class="but" @click="carryCash">
              取款
            </div>
          </div>
          <div class="bottom">
            <div class="left">
              <div class="name">
                佣金钱包
              </div>
              <div class="money">{{usercount.money}}</div>
            </div>
            <div class="right">
              <div class="name">
                本月佣金
              </div>
              <div class="money">{{usercount.month_fee}}</div>
            </div>
          </div>
        </div>
        <div class="list" v-if="agent_domain.length>0" v-for="(item, index) in agent_domain" :key="index">
          <div class="domain-name">推广域名:<span id="domainFullPath">{{item.domainFullPath}}</span></div>

          <div class="copy" data-clipboard-target="#domainFullPath" @click="copy">
            复制
          </div>
          <div style="flex:1"></div>
          <img class="qrData" @click="clickDomain(item)" :src="$imgs['agent/home/agentqrcode']"
               alt="">
        </div>
        <div class="no-domain list" v-if="!agent_domain.length">暂无域名</div>
      </div>
      <!-- 菜单 -->
      <div class="person-entr">
        <div class="submit-form">
          <template v-for="(item,index) in menuList">
            <div :key="index" v-if="item.text" class="input" :class="{noBorder: item.noBorder}"
                 @click="goPage(item.path)">
              <!--<img :class="['icon',item.icon]"-->
                   <!--:src="require(`@assets/img3_0/otherIcon/agent_me_icon${item.icon}@2x.png`)" alt="">-->
              <img :class="['icon',item.icon]"
                   :src="$imgs['otherIcon/agent_me_icon'+item.icon+'@2x']" alt="">
              <p class="text">{{ item.text }}</p>
              <!--<img class="more" :src="require('@assets/img3_0/otherIcon/more@2x.png')" alt="">-->
            </div>
            <div :key="index" class="br" v-if="!item.text"></div>
          </template>
        </div>
      </div>
      <!-- 退出登录 -->

      <div class="aagames-button-box">
        <button type="button" class="aagames-button login-out-01" @click="signOut">退出登录</button>
      </div>
    </div>

    <van-popup class="domain-dialog" v-model="show">
      <div class="website">
        <!--<div class="url" id="domainFullPath">{{curDomain.domainFullPath}}</div>-->
        <img class="qrData" @click="download" :src="curDomain.qrData" alt="">
        <div class="download">点击保存二维码</div>
        <img :src="$imgs['agent/home/agentclose']" class="cross" @click="show = false" alt="">

      </div>

    </van-popup>
    <vipOpen v-model="vipOpenShow"></vipOpen>

    <!-- <loading :isShow="isLoading" title="获取信息中..."></loading> -->
  </div>
</template>

<script>
  import moment from 'moment'
  import Vue from 'vue'
  import Clipboard from 'clipboard'
  import QRCode from 'qrcode'
  import {Dialog} from 'vant'
  import Lheader from '@/components/l-header'
  import Loading from '@/components/loading'
  import vipOpen from './vipOpen'
  import {usercount, userinfo} from '@/api/agent'

  Vue.use(Dialog)

  export default {
    name: 'login',
    components: {
      Loading,
      Lheader,
      vipOpen
    },
    data() {
      return {
        login: '注册',
        title: '代理中心',
        vipOpenShow: false,
        isLoading: false,
        active: 0,
        isAgree: false,
        show: false,
        message: '',
        list: {},
        usercount: {},
        menuList: [
          {
            icon: '1',
            path: 'agentFrom',
            text: '代理报表'
          },
          {
            icon: '2',
            path: 'reportForm',
            text: '佣金报表',
            noBorder: true,
          },
          {},
          {
            icon: '3',
            path: 'agMemberList',
            text: '会员列表'
          },
          {
            icon: '4',
            path: 'vipOpen',
            text: '会员开户',
            noBorder: true,
          },
          {},
          {
            icon: '5',
            path: 'agBankBind',
            text: '银行卡管理'
          },
          {
            icon: '6',
            path: 'contactInfo',
            text: '联系方式'
          },
          {
            icon: '7',
            path: 'agRevisePassword',
            text: '密码修改',
            noBorder: true,
          }
        ],
        agent_domain: [],
        curDomain: {}
      }
    },
    methods: {
      goPage(path) {
        if (path === 'vipOpen') {
          this.vipOpenShow = true
        } else {
          this.$router.push({path: path})
        }
      },
      copy() {
        var clipboard = new Clipboard('.copy')
        clipboard.on('success', e => {
          this.show = false
          this.$toast('复制成功')
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          console.log(this, '该浏览器不支持自动复制!', 'warning')
          clipboard.destroy()
        })
      },
      extension() {
        if (this.agent_domain.length === 0) {
          Dialog.alert({
            title: '温馨提示',
            message: '暂无推广域名，请联系市场专员分配'
          }).then(() => {
            // on close
          })
        } else {
          this.show = true
        }
      },
      carryCash() {
        if (this.list.agent_bank.length === 0) {
          const This = this
          Dialog.confirm({
            message: '您当前未绑定银行卡，无法提现！',
            title: '温馨提示',
            confirmButtonText: '去绑定'
          })
            .then(() => {
              This.$router.push({
                path: '/agAddBankBind',
                query: {
                  getPath: 'carryCash'
                }
              })
            })
            .catch(() => {
            })
        } else {
          this.$router.push({path: '/carryCash'})
        }

      },
      signOut() {
        const This = this
        Dialog.confirm({
          message: '是否退出登录？'
        }).then(() => {
          window.localStorage.removeItem('agToken')
          window.localStorage.removeItem('userInfoForAgent')
          This.$router.push('agentHomepage')
        }).catch(() => {
          // on cancel
        })
      },
      clickDomain(item) {
        this.curDomain = item
        this.show = true
      },
      // 下载图片
      download() {
        console.log(this.curDomain)
        var image = new Image()
        // 解决跨域 Canvas 污染问题
        image.setAttribute('crossOrigin', 'anonymous')
        image.src = this.curDomain.qrData
        image.onload = function () {
          var canvas = document.createElement('canvas')
          canvas.width = image.width
          canvas.height = image.height
          var context = canvas.getContext('2d')
          context.drawImage(image, 0, 0, image.width, image.height)
          var url = canvas.toDataURL('image/png')
          // 生成一个a元素
          var a = document.createElement('a')
          // 创建一个单击事件
          var event = new MouseEvent('click')
          // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
          a.download = '域名二维码.png'
          // 将生成的URL设置为a.href属性
          a.href = url
          // 触发a的单击事件
          a.dispatchEvent(event)
        }
      },
    },
    created() {
      try {
        let scrollY = document.getElementsByClassName('container')[0].offsetTop
        window.scrollTo(0, scrollY)
      } catch (error) {

      }
      this.isLoading = true
      usercount({
        access_token: window.localStorage.agToken
      }).then(res => {
        if (res.data.code === 0) {
          this.usercount = res.data.data
        }
      })
      userinfo({
        access_token: window.localStorage.agToken
      }).then(res => {
        if (res.data.code === 0) {

          let t2 = moment(res.data.data.created_at)
          this.list = res.data.data
          this.list.day = moment().diff(t2, 'days')
          window.localStorage.setItem('userInfoForAgent', JSON.stringify(res.data.data))
          this.list.agent_domain && this.list.agent_domain.forEach(async (item) => {
            let obj = {}
            await QRCode.toDataURL(item.domain, (err, url) => {
              obj.qrData = url
            })
            obj.domainFullPath = item.domain
            obj.visible = false
            this.agent_domain.push(obj)
          })
        } else {
          window.localStorage.removeItem('userInfoForAgent')
          window.localStorage.removeItem('agToken')
          window.localStorage.removeItem('agId')
          this.$router.back()
        }
      }).finally(() => {
        this.isLoading = false
      })
      // }
    }
  }
</script>

