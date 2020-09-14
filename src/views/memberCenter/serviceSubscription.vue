<template>
    <div class="container serviceSubscription">
        <lheader :title="title"></lheader>
        <div class="main">
            <div class="info">
                <div class="title">资金安全</div>
                <p>存款到账通知、取款到账通知、红利发放</p>
            </div>
            <div class="info">
                <div class="title">安全提醒</div>
                <p>域名更换通知、密码修改通知、异地登录通知</p>
            </div>
            <div class="info">
                <div class="title">优惠发放</div>
                <p>优惠活动通知放</p>
            </div>
            <div class="reset">
                <div class="aagames-select-box">
                    <div class="select">
                        <span>短信服务</span>
                        <van-switch
                                @input="onInput"
                                :inactive-color="$colorjs.switchInactiveColor"
                                :active-color="$colorjs.switchActiveColor"
                                v-model="data.is_allow_sms"
                        />
                    </div>
                </div>
                <div class="aagames-select-box">
                    <div class="select">
                        <span>邮箱服务</span>
                        <van-switch
                                @input="onInput"
                                :inactive-color="$colorjs.switchInactiveColor"
                                :active-color="$colorjs.switchActiveColor"
                                v-model="data.is_allow_email"

                        />
                    </div>
                </div>
                <div class="aagames-select-box">
                    <div class="select">
                        <span>站内信</span>
                        <van-switch
                                @input="onInput"
                                :inactive-color="$colorjs.switchInactiveColor"
                                :active-color="$colorjs.switchActiveColor"
                                v-model="data.is_allow_sitesms"

                        />
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  import { getsubscribe, subscribe } from '@/api/memberCenter'

  export default {
    name: 'serviceSubscription',
    data () {
      return {
        checked: false,
        title: '服务订阅',
        data: {
          'is_allow_sms': 2,
          'is_allow_email': 2,
          'is_allow_sitesms': 2
        }
      }
    },
    components: {
      Lheader
    },
    mounted () {
      this.getsubscribe()
    },
    methods: {
      getsubscribe () {

        getsubscribe().then(({data}) => {
          if (data.code === 0) {
            this.data = {
              'is_allow_sms': data.data.is_allow_sms === 2,
              'is_allow_email': data.data.is_allow_email === 2,
              'is_allow_sitesms': data.data.is_allow_sitesms === 2
            }
          }
        })
      },
      onInput () {
        console.log(this.data)
        subscribe({
          id: this.data.id,
          'is_allow_sms': this.data.is_allow_sms ? 2 : 1,
          'is_allow_email': this.data.is_allow_email ? 2 : 1,
          'is_allow_sitesms': this.data.is_allow_sitesms ? 2 : 1
        }).then(({data}) => {
          if (data.code !== 0) {
            this.getsubscribe()
          }
        })
      },
      linkTo (path) {
        console.log(path)
        this.$router.push({path})
      }
    }
  }
</script>

<style scoped lang="less">
    @import '~@assets/styles/memberCenter/index.less';
    .container {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        .main {
            margin-top: @main-margin-top;
            padding: 0;
            .info {
                width: 690px;
                height: 168px;
                background: @bg-card-color;
                border-radius: 8px;
                padding: 30px;
                box-sizing: border-box;
                margin: 0 auto 30px;
                .title {
                    line-height: 65px;
                    font-size: 32px;
                    font-weight: 400;
                    color: @primary-text-color;
                }
                p {
                    font-size: 28px;
                    font-weight: 400;
                    color: #fff;
                    line-height: 40px;
                }
            }
            .aagames-select-box {
                padding: 0 30px;
                .select {
                    overflow: hidden;
                    padding: 0;
                    box-sizing: border-box;
                    color: #FFFFFF;
                    position: relative;
                    background-color:@bg-color;
                    &:after {
                        width: 100%;
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        height: 2px;
                        background: rgba(255, 255, 255, 1);
                        opacity: 0.06;
                    }
                    .van-switch{
                      margin-right: 10px;
                      font-size: 30px !important;
                    }
                }
            }
        }
    }
</style>
