<template>
    <div class="container carrycash">
        <lheader :title="title" :goback="true" :get-switch="false"></lheader>
        <div class="main">
            <div class="amount">
                <div class="register">
                    <div class="reset">
                        <div class="mt" @click="show=true">
                            <img v-if="icon_code_src" :src="icon_code_src" class="icon"/>
                            <div class="center">
                                <div class="name">{{bank_name}}</div>
                                <div class="card_no">{{bindText ===
                                    '选择银行'?bindText:`尾号${bindText.substring(bindText.length - 4)}`}}
                                </div>
                            </div>
                            切换
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <div class="reset">
                        <div class="tx">
                            <p>提现金额</p>
                            <div class="input">
                                <span>￥</span>
                                <input @click="keyboardshow = true" readonly type="text" onkeyup="value=value.replace(/[^\d\.]/g,'')"
                                       onblur="value=value.replace(/[^\d\.]/g,'')" v-model="takeData.withdraw_money"
                                       :placeholder="'佣金余额' + yj_money">
                                <div class="text" @click="all">全部提现</div>
                            </div>
                            <van-number-keyboard
                                    safe-area-inset-bottom
                                    extra-key="."
                                    close-button-text="完成"
                                    v-model="takeData.withdraw_money"
                                    :show="keyboardshow"
                                    @blur="keyboardshow = false"
                            />
                        </div>
                    </div>

                </div>
                <div class="btn">
                    <p>提现金额最低100元起</p>
                </div>
            </div>
            <div class="aagames-button-box">
                <button type="button" class="aagames-button btnStyle10018" @click="submit">提现</button>
            </div>
        </div>
        <van-popup v-model="show" position="bottom">
            <van-picker show-toolbar value-key="name" @confirm="onConfirm" @cancel="onCancel" :columns="columns"/>
        </van-popup>
        <loading :isShow="isLoading" :title="loadingText"></loading>
    </div>
</template>

<script>
  import BankIcon from '@/components/bank-icon'
  import Lheader from '@/components/l-header'
  import Loading from '@/components/loading'
  import { bankcardlist, withdraw, usercount } from '@/api/agent'
  import Vue from 'vue'
  import { Dialog } from 'vant'

  Vue.use(Dialog)

  export default {
    name: 'quotaTransfer',
    components: {
      Loading,
      Lheader,
      BankIcon
    },
    data () {
      return {
        title: '提现',
        showKeyboard: false,
        keyboardshow: false,
        isLoading: false,
        loadingText: '加载中...',
        columns: [],
        icon_code_src: '',
        bank_name: '',
        bindText: '选择银行',
        show: false,
        yj_money: '',
        takeData: {
          withdraw_money: '',
          user_bank_id: '',
          pay_password: '',
          access_token: window.localStorage.agToken
        }
      }
    },
    methods: {
      all(){
        usercount({
          access_token: window.localStorage.agToken
        }).then(res => {
          if (res.data.code === 0) {
            this.takeData.withdraw_money = res.data.data.money
          }
        })
      },

      onConfirm (val) {
        console.log(val)
        this.show = false
        this.bindText = val.card_no
        this.bank_name = val.bank_name
        this.icon_code_src = val.icon_code_src
        this.takeData.user_bank_id = val.id
      },
      onCancel () {
        this.show = false
      },
      isBank () {
        if (this.columns.length === 0) {
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
              // on cancel
            })
        } else {
          this.show = true
        }
      },
      submit () {
        if (!this.takeData.withdraw_money) {
          this.$toast.fail('请输入取款金额')
          return false
        }
        if (!this.takeData.user_bank_id) {
          this.$toast.fail('请选择银行')
          return false
        }
        if (this.takeData.withdraw_money < 100) {
          this.$toast.fail('最低取款金额为100元，请重新输入')
          return false
        }
        if (this.takeData.withdraw_money > this.yj_money) {
          this.$toast.fail('取款金额不能大于佣金金额，请重新输入')
          return
        }
        this.isLoading = true
        this.loadingText = '提现中...'
        this.takeData.access_token = window.localStorage.agToken
        withdraw(this.takeData).then(res => {
          if (res.data.code === 0) {
            this.$toast('提现成功')
            setTimeout((res) => {
              this.$router.push('/agent')
            }, 2000)
          } else {
            this.$toast(res.data.msg)
          }
        }).finally(() => {
          this.isLoading = false
        })
      }
    },
    created () {
      try {
        let scrollY = document.getElementsByClassName('container')[0].offsetTop
        window.scrollTo(0, scrollY)
      } catch (error) {

      }
      this.isLoading = true
      this.loadingText = '加载中...'
      this.yj_money = JSON.parse(window.localStorage.userInfoForAgent).commission_money
      bankcardlist({
        access_token: window.localStorage.agToken
      }).then(res => {
        if (res.data.code === 0) {
          let arr = []
          let columns = res.data.data
          for (let i = 0; i < columns.length; i++) {
            const getIndex = columns[i]
            if (getIndex.card_no) {
              let text = ''
              for (let j = 0; j < getIndex.card_no.length - 4; j++) {
                text += '*'
              }
              text += getIndex.card_no.substring(getIndex.card_no.length - 4)
              getIndex.icon_code_src = require(`@assets/img3_0/bank-svg/${getIndex.icon_code}.svg`)
              getIndex.name = `<img src="${getIndex.icon_code_src}"/>${text} ${getIndex.bank_name}`
            }
          }
          console.log(columns)
          this.columns = columns
          this.isBank()

        }
      }).finally(() => {
        this.isLoading = false
      })
    }
  }
</script>

<style scoped lang="less">
    .container {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        background-color: bg-color;
        /deep/ .van-number-keyboard__title {
            height: 100px;
            line-height: 100px;
            .van-number-keyboard__close{
                font-size:32px;
                font-weight:400;
                color:@primary-color;
            }
        }
        .main {
            flex: 1;
            margin-top: 120px;
            padding: 0 15px;
            display: flex;
            flex-direction: column;
            .amount {
                flex: 1;
                .reset {
                    width: 100%;
                    display: flex;
                    padding: 30px;
                    box-sizing: border-box;
                    .tx {
                        margin-bottom: 16px;
                        width: 100%;
                        .input {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            border-bottom: 1px solid @border-color;
                            span {
                                width: 20px;
                                font-size: 32px;
                                font-weight: 400;
                                color: @text-color-placeholder;
                                line-height: 44px;
                            }
                            .text {
                                height: 40px;
                                font-size: 28px;
                                font-weight: 400;
                                color: rgba(153, 153, 153, 1);
                                line-height: 40px;
                            }
                        }
                        input {
                            flex: 1;
                            background: none;
                            width: 100%;
                            padding: 0 20px;
                            border: none;
                            font-size: 28px;
                            height: 98px;
                            font-weight: 400;
                            // color: #fff;
                        }
                        input::placeholder {
                            color: @text-color-placeholder;
                        }
                    }
                    p {
                        margin: 40px auto 0;
                        height: 40px;
                        font-size: 28px;
                        font-weight: 400;
                        color: @text-color-placeholder;
                        line-height: 40px;
                        &:first-child {
                            margin-top: 30px;
                        }
                    }

                    span {
                        color: #ffcf6e;
                        font-size: 22px;
                        margin-top: 30px;
                        display: inline-block;
                        margin-bottom: 20px;
                    }
                }
                .mt {
                    width: 100%;
                    height: 120px;
                    display: flex;
                    color: @text-color-placeholder;
                    align-items: center;
                    justify-content: center;
                    border-bottom: 1px solid @border-color;
                    .icon {
                        width: 60px;
                        height: 60px;
                        margin-right: 20px;
                    }
                    .center {
                        flex: 1;
                        font-size: 32px;
                        font-weight: 600;
                        color: rgba(177, 177, 177, 1);
                        line-height: 44px;

                        .name {

                        }
                        .card_no {
                            color: rgba(153, 153, 153, 1);

                        }
                    }
                    .more {
                        width: 55px
                    }
                }
            }
            .password {
                margin-top: 60px;
                p {
                    color: #c5cfd6;
                    font-size: 26px;
                }
                .van-password-input {
                    margin: 0;
                    .van-password-input__security {
                        height: initial;
                    }
                }
                .passInput {
                    margin-top: 30px;
                    li {
                        width: 110px;
                        height: 110px;
                        background-color: #232c39;
                        i {
                            background-color: #8e9ab5;
                        }
                    }
                }
                .forgetPass {
                    margin-top: 30px;
                    color: @primary-color;
                    font-size: 26px;
                }
            }
            .btn {
                margin-top: 20px;
                .aagames-button-box {
                    margin-top: 78px;
                    padding: 0 !important;
                    box-sizing: border-box;
                }
                p {
                    margin-top: 20px;
                    color: @text-color-placeholder;
                    font-size: 24px;
                    padding-left: 20px;
                    font-weight: 400;
                    line-height: 34px;
                }
            }
        }
        /deep/ .van-popup--bottom .van-picker .van-picker-column__item {
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                height: 80%;
                margin-right: 10px;
            }
        }
    }
</style>
