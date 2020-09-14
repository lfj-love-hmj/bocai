<template>
  <div>
    <lheader :title="title" path="111"></lheader>
    <div class="container">
        <div id="apply">
          <div class="main">
            <div class="account">
              <!-- 账户选择 -->
              <div class="aagames-label">账户选择</div>
              <div class="aagames-bank-select-box">
                <div class="select">
                  <input readonly type="text" @click="gameSelect('account')" v-model="typeText[0]">
                  <!-- <i class="el-icon-caret-bottom"></i> -->
                </div>
              </div>
              <!-- <img class="changeIcon" style="cursor:pointer;" src="@assets/img/memberCenter/trans.png" @click="changeType" alt="to" /> -->
              <!-- 选择平台 -->
              <div class="aagames-bank-select-box">
                <div class="select">
                  <input readonly type="text" @click="gameSelect('turn')"  v-model="typeText[1]">
                  <!-- <i class="el-icon-caret-bottom"></i> -->
                </div>
              </div>
            </div>

            <!-- 转账金额 -->
            <div class="amount">
              <div class="aagames-label">转账资金</div>
              <div class="aagames-input-box">
                <div class="input">
                  <span>￥</span>
                  <input
                    type="text"
                    onkeyup="value=value.replace(/[^\d\.]/g,'')"
                    onblur="value=value.replace(/[^\d\.]/g,'')"
                    v-model="list.money"
                    placeholder="请输入转账资金"
                    />
                </div>
              </div>
            </div>

            <!-- 资金密码 -->
            <div class="password" id="password">
              <p class="label">资金密码</p>
              <div class="aagames-input-password" v-if="password !== 1">
                <van-password-input
                  :value="list.pay_password"
                  @focus="showKeyboard = true"
                  :focused="showKeyboard"
                />
                <div class="forgetPass">
                  <span @click="setFundPassword(2)">忘记资金密码</span>
                </div>
              </div>
              <div class="aagames-bank-select-box" v-else>
                <div class="select">
                  <input
                    readonly
                    type="text"
                    @click="setFundPassword(1)"
                    value="您还未设置资金密码，设置后即可转账"
                  />
                  <i class="el-icon-arrow-right"></i>
                </div>
              </div>
              <p class="error-msg">{{ errText }}</p>
            </div>

            <!-- 确认转账 -->
            <div class="aagames-button-box">
              <button class="aagames-button" type="button" :disabled="isDisabled" @click="submit">确认转账</button>
            </div>
            <div class="aagames-tips">
              温馨提示：<br>
              第三方额度转账可能会有5-120分钟延迟，如有问题请联系客服
            </div>
          </div>

        </div>

      </div>
      <!-- 数字键盘 -->
        <van-number-keyboard
          safe-area-inset-bottom
          :show="showKeyboard"
          @input="onInput"
          @delete="onDelete"
          @blur="showKeyboard = false"
        />
        <!-- 游戏平台列表 -->
        <van-popup v-model="gameShow" position="bottom">
          <van-picker :columns="columns" @confirm="onGameConfirm" @cancel="onGameCancel" value-key="game_platform_name" :show-toolbar='true' @change="onChange"/>
        </van-popup>
  </div>


</template>


<script>
  import Lheader from '@/components/l-header'
  import { allplatform, moneytrans, gamecateplatform, } from '@/api/memberCenter'
  import { accountsafe } from '@/api/personalData'

  import Vue from 'vue'
  import { Toast } from 'vant';
  Vue.use(Toast);

  export default {
    name: "quotaTransfer",
    data() {
      return {
        title: '理财小金库转账',
        showKeyboard: false,
        gameStatus: {},
        gameColumns: [],
        columns: [
          {
            values: [],
            className: 'column1'
          },
          {
            values: [],
            className: 'column2'
          }
        ],
        gameShow: false,
        isDisabled: false,
        type: '',
        list: {
          pay_password: '',
          from_platform_id: 0,
          to_platform_id:1,
          money:''
        },
        // accoount: '理财小金库',
        // turn: '主账户',
        typeText:['主账户','理财小金库'],
        errText: '',
        password: 0,
        rotate: false,
        data : {
          access_token: window.localStorage.token
        },
        baseUrl: process.env.BASE_URL,
        transferType:1
      }
    },
    methods: {
      onInput(key) {
        this.list.pay_password = (this.list.pay_password + key).slice(0, 6);
      },
      onDelete() {
        this.list.pay_password = this.list.pay_password.slice(0, this.list.pay_password.length - 1);
      },
      onGameConfirm(value) {
        this.gameShow =false
        if(this.type === 'account') {
          if (value[0].game_platform_name === '主账户') {
            this.accoount = value[0].game_platform_name;
            this.list.from_platform_id = value[0].game_platform_id;
          } else {
            this.accoount = value[0].game_platform_name + ' / ' + value[1].game_platform_name;
            this.list.from_platform_id = value[1].game_platform_id;
          }
        } else {
          if (value[0].game_platform_name === '主账户') {
            this.turn = value[0].game_platform_name;
            this.list.to_platform_id = value[0].game_platform_id;
          } else {
            this.turn = value[0].game_platform_name + ' / ' + value[1].game_platform_name;
            this.list.to_platform_id = value[1].game_platform_id;
          }
        }
      },
      onGameCancel(value) {
        this.gameShow = false
      },
      onChange(picker, values, index) {
        if (values[0].game_platform_id === 0) {
          picker.setColumnValues(1, []);
        } else {
          picker.setColumnValues(1, values[0].platform_list);
        }
      },
      gameSelect(type) {
        // this.gameShow = true
        // this.type = type;
      },
      submit() {
        if (this.list.from_platform_id == null) {
          this.errText = '请选择转出账户'
          return false
        }
        if (this.list.to_platform_id == null) {
          this.errText = '请选择转入账户'
          return false
        }
        if (!this.list.money) {
          this.errText = '请输入转账金额'
          return false
        }
        if (this.list.money < 100) {
          this.errText = '最低转账金额为100'
          return false
        }
        if (isNaN(this.list.money)) {
          this.errText = '转账金额只能输入数字'
          return false
        }
        if (this.list.pay_password.length < 6) {
          this.errText = '输入6位资金密码'
          return false
        }
        Toast.loading({
          className: 'toast-loading',
          mask: true,
          forbidClick: true,
          loadingType: 'spinner',
          message: '转帐中...',
          duration: 0,       // 持续展示 toast
        });
        this.list.access_token = window.localStorage.token
        moneytrans(this.list).then(res=> {
          Toast.clear();
          if (res.data.code === 0) {
            Toast('转账成功')
            this.$router.go(-1)
          } else {
            Toast(res.data.msg)
            this.errText = res.data.msg
          }
        },err=> {
          this.errText = '转账失败'
        })
      },
      setFundPassword (val) {
        const ls = window.localStorage;
        let route = {
          name: 'accountSecurity',
          query: {
            // type: 1 为设置资金密码； 2已设置资金密码
            type: val,
            getPath: 'quotaTransfer'
          }
        };
        ls.setItem('verifyNextRoute', JSON.stringify(route))
        if(val == 1) {
          this.$router.push(route);
        } else {
          this.$router.push('verifyIdentity')
        }
      },
      changeType() {
        const tempT = this.typeText
        const tempList = Object.assign({},this.list)
        this.typeText = [tempT[1],tempT[0]]
        this.list.from_platform_id = tempList.to_platform_id
        this.list.to_platform_id = tempList.from_platform_id
      },
    },
    created() {
      this.transferType = this.$route.query.type
      if(this.transferType == 1) {
        this.typeText[0] = '理财小金库'
        this.typeText[1] = '主账户'
        this.list.from_platform_id = 1
        this.list.to_platform_id = 0
      } else {
        this.typeText[0] = '主账户'
        this.typeText[1] = '理财小金库'
        this.list.from_platform_id = 0
        this.list.to_platform_id = 1
      }
      accountsafe().then(res=> {
        this.password = res.data.data.is_pay_password
      })

      allplatform(this.data).then(res=> {
        if(res.data.code === 0) {
          this.gameStatus = res.data.data
          let key = [{id:0,text:'主账户'}]
          for (let attr in res.data.data) {
            key.push({id: Number(attr), text: res.data.data[attr]})
          }
          this.gameColumns = key
        }
      })

      gamecateplatform(this.data).then(res=> {
        if(res.data.code === 0) {
          const data = res.data.data
          for (let a of data) {
            a.game_platform_name = a.game_cate_name
          }
          data.unshift({game_platform_name:'主账户', game_platform_id: 0})
          this.columns[0].values = data
          this.columns[1].values = data[0].platform_list
        }
      })


      var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      window.onresize = function() {
        var nowClientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        if (clientHeight - nowClientHeight > 60 ) {//因为ios有自带的底部高度
          //键盘弹出的事件处理
          document.getElementById("apply").classList.add("focusState");
        }
        else {
          //键盘收起的事件处理
          document.getElementById("apply").classList.remove("focusState");
        }
      };
    },
    watch: {
      showKeyboard(value) {
        if (value) {
          window.scrollTo(0,document.getElementById('password').offsetTop-100)
          // document.getElementById('password').scrollTo(document.getElementById('password').offsetTop);
        }
      }
    },
    components: {
      Lheader
    },
  }
</script>

<style scoped lang="less">
  .container {
    display: block;
    position: absolute;
    left: 0;
    top: @main-top;
    right: 0;
    // bottom: @main-top;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    // height:100%;
    // background-color: #090705;
    .el-main {
      padding: 0;
      .account{
        overflow: hidden;
        .aagames-bank-select-box{
          width:322px;
          float:left;
          .select{
            width:310px;
            i{
              position:relative;
              left:-72px;
            }
          }
        }
        .changeIcon{
          width:56px;
          float:left;
          position: relative;
          top:34px;
          left: 24px;
        }
      }
      .main {
        padding: 0;
        .aagames-label {
          margin-top: @margin-10;
          padding: 0 @margin-15;
          font-size: @font-size-13;
        }
        .amount {
          margin-top: @margin-20;
          .aagames-input-box {
            margin-top: @margin-10;
          }
        }
        .password {
          color: #F25637;
          margin-top: @margin-20;
          font-size: @font-size-13;
          height: 2.5rem;
          .error-msg {
            padding: 0 0.4rem;
            margin-top: @margin-5;
          }
          .label {
            color: #333333;
            padding: 0 @margin-15;
          }
          /* 密码输入 */
          .aagames-input-password {
            display: inline-flex;
            align-items: center;
            width: 100%;
            padding: 0 @margin-15;
            margin-top: @margin-10;
            .van-password-input {
              margin: 0;
              height: 1.06666rem;
              flex: 4;
              .van-password-input__security {
                height: 100%;
              }
              .van-password-input__security li{
                margin: 0 0 0 .02666rem;
                position: relative;
                &::before {
                  content: '';
                  position: absolute;
                  border: 1px solid #E6E6E6;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                }
              }
            }
            .forgetPass {
              flex: 2;
              color: @primary-text-color;
              font-size: @font-size-13;
              text-align: center
            }
          }
        }
      }
      .aa{
        transition: all 2s;
        transform:rotate(0deg);
      }
      .go{
        transform:rotate(180deg);
        transition: all 2s;
      }
      .refresh {
        width: 30.96px;
        height: 25.8px;
        display: inline-block;
        background-size: contain;
        background-repeat: no-repeat;
        margin-left: 20px;
        // background-image: url(~@assets/img/memberCenter/refresh.png);
      }
    }
  }
  .focusState {position: absolute;}
  .van-button {
    margin-left: 25px;
    height: initial;
    padding-top: 10px;
    padding-bottom: 10px;
    line-height: 44px;
    border-radius: 2px;
    .van-button__text {
      line-height: initial;
      font-size: 26px;
    }
  }

  .van-button::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border: none; /*px*/
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 200%;
    height: 200%;
    -webkit-transform: scale(0.5); /*no*/
    transform: scale(0.5); /*no*/
    -webkit-transform-origin: left top;
    transform-origin: left top;
  }
  .van-button--plain,
  .van-button--default {
    display: inline-block;
    border: none;
    border-radius: @border-radius-2px;
    text-align: center;
    font-size: @font-size-13
  }
  .van-button--plain {
    background-color: #BE8D24;
  }
  .van-button--default {
    background-color: #ffffff;
    color: #333333;
    border: .02222rem solid #E0E0E0;
  }
  .van-button--plain.van-button--danger {
      color: #ffffff;
  }
</style>
