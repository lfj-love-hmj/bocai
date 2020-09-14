<template>
  <div class="container agMemberWithdraw">
    <lheader :title="title" :goback="true" :get-switch="false"></lheader>
    <div class="main">
      <div class="amount">
        <div class="top">
          <p>转账至：<span>{{item.username}}</span></p>
          <p>代理钱包余额：<span>{{userInfoForAgent.money || 0}}</span></p>
        </div>
        <div class="register">
            <div class="reset">
                <div class="tx">
                  <p>转账金额</p>
                  <div class="input">
                      <span>￥</span>
                      <input type="text" onkeyup="value=value.replace(/[^\d\.]/g,'')"
                        onblur="value=value.replace(/[^\d\.]/g,'')" v-model="query.withdraw_money"
                        placeholder="请输入转账金额">
                  </div>
                  <van-number-keyboard
                    safe-area-inset-bottom
                    extra-key="."
                    close-button-text="完成"
                    v-model="query.withdraw_money"
                    :show="keyboardshow"
                    @blur="keyboardshow = false"
                  />
                </div>
            </div>
            <div class="reset">
              <div class="tx">
                <p>绑定手机号</p>
                <div class="aagames-form">
                  <div class="input">
                    <!-- <phoneArea v-model="areaCode">
                      <i class="areaNum">
                        &nbsp;+{{ areaCode }}
                        <img class="xiala" :src="require('@assets/img3_0/otherIcon/xiala@2x.png')" alt />
                      </i>
                    </phoneArea> -->

                    <input disabled type="text" v-model="query.phone" placeholder="请输入手机号" />
                  </div>
                </div>
              </div>
            </div>
            <div class="reset">
              <div class="tx">
                <p>验证码</p>
                <gcode
                  :account="query.phone"
                  :withLabel="false"
                  :withIcon="false"
                  :areaCode="areaCode"
                  @getCode="getCodeC"
                  @myCode="myCodeC"
                ></gcode>
              </div>
            </div>
        </div>
    </div>
    <div class="aagames-button-box">
        <button type="button" class="aagames-button btnStyle10018" @click="submit">确认转账</button>
    </div>
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';
import Gcode from "@/components/g-code";
import { memberlevellist, memberlist, membertrans } from "@/api/agent";
import moment from 'moment'
import { Dialog } from "vant";
import { Toast } from 'vant';

export default {
  name: "memberList",
  components: {
    Loading,
    Lheader,
    Gcode
  },
  data() {
    var self = this;
    return {
      title: "确认转账",
      keyboardshow: false,
      getCode: "",
      areaCode: 86,
      query: {
        withdraw_money: '',
        code: '',
        phone: ''
      },
      item: null,
      userInfoForAgent:''
    };
  },
  async created() {
    this.item = JSON.parse(window.sessionStorage.getItem('wanqu_member_detail'))
    this.userInfoForAgent = JSON.parse(window.localStorage.getItem('userInfoForAgent'))
    this.query.phone = this.userInfoForAgent.mobile
    this.query.code = this.userInfoForAgent.phone_area_code
    console.log(this.item)
  },
  methods: {
    submit() {
      Dialog.confirm({
        message: '确认转账？'
      }).then(() => {
        const params = {
          username: this.item.username,
          code: this.query.code,
          money: this.query.withdraw_money,
          merchant_no:process.env.VUE_APP_MERCHANT_NO,
          access_token:window.localStorage.agToken
        }
        membertrans(params).then(res => {
          if(res.data.code) {
            Toast.success('转账成功')
            this.$router.go(-1)
          }
        })
        // window.localStorage.removeItem('agToken')
        // window.localStorage.removeItem('userInfoForAgent')
        // This.$router.push('agentHomepage')
      }).catch(() => {
        // on cancel
      })
    },
    getCodeC(val) {
      this.getCode = val;
    },
    myCodeC(val) {
      this.query.code = val;
    },
  }
};
</script>

<style scoped lang="less">

@keyframes rotation{
  from {transform: rotate(0deg);}
  to {transform: rotate(360deg);}
}
.container {
  min-height: 100vh;
  flex-direction: column;
  background-color: @bg-color;
  .main {
    padding-top: @main-top;
    .aagames-button-box{
      margin-top: 80px;
    }
    .amount {
      flex: 1;
      .top{
        padding: 0 30px;
        p{
          color: #606060;
          font-size: 24px;
          line-height: 60px;
          span{
            color: #999;
          }
        }
      }
      .reset {
          width: 100%;
          display: flex;
          padding: 10px 30px;
          box-sizing: border-box;
          .tx {
              margin-bottom: 16px;
              width: 100%;
              .aagames-form{
                padding:0;
              }
              /deep/#g-code{
                border-bottom: 2px solid #323232;
                .right-button{
                  top: -160px;
                  background: transparent;
                  border:2px solid @primary-color;
                  color: @primary-color;
                }
                input{
                  padding:0;
                }
              }
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
                  color: #ccc;
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
  }
}
</style>
