<template>
  <div>
    <lheader :title="title" path="111" :turn="isOpen" :showTurn.sync='isShow' @update="update"></lheader>
    <div class="container">
    <div id="apply" :class="{'pb2rem':isOpen == 1}">
      <div class="main">
        <template v-if="isOpen == 2">
        <div class="account">
            <!-- 账户选择 -->
          <div class="aagames-label">账户选择</div>
          <div class="aagames-bank-select-box">
            <div class="select">
              <input readonly type="text" @click="gameSelect(typeArr[0],0)" v-model="typeText[0]">
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
          <!-- <img class="changeIcon" style="cursor:pointer;" src="@assets/img/memberCenter/trans.png" @click="changeType" alt="to" /> -->
          <!-- 选择平台 -->
          
          <div class="aagames-bank-select-box">
            <div class="select">
              <input readonly type="text" @click="gameSelect(typeArr[1],1)"  v-model="typeText[1]">
              <i class="el-icon-caret-bottom"></i>
            </div>
          </div>
        </div>
        <!-- 金额输入 -->
          <div class="aagames-label">转账资金</div>
          <div class="aagames-input-box" style="margin-top: 20px;">
            <div class="input">
              <span>￥</span>
              <input 
                type="text" 
                onkeyup="value=value.replace(/[^\d\.]/g,'')" 
                onblur="value=value.replace(/[^\d\.]/g,'')" 
                v-model="list.money" 
                />
            </div>
          </div>
          <!-- 资金密码 -->
          <div class="password">
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
        <div class="aagames-button-box">
          <button class="aagames-button" type="button" @click="submit">确认提交</button>
        </div>
        </template>
        <div class="balance-detail">
          <div class="item">
            <span>游戏平台余额</span>
            <span v-if="isOpen == 1">{{all_platform_money}}</span>
            <div v-if="isOpen == 2">
              <van-button 
                :loading="loading" 
                type="default" 
                @click="refreshBalance" 
                text="刷新全部" 
                loading-text="加载中..." 
              />
              <van-button 
                :loading="loading1" 
                type="danger" 
                @click="recovery" 
                plain  
                text="收回余额" 
                loading-text="加载中..." 
              />
            </div>
          </div>
          <div v-if="isOpen == 1" class="item">
            <span>钱包余额</span>
            <span>{{financing_money}}</span>
          </div>
          
        </div>
        <div class="gameBalance">
          <template v-for="(item, index) in walletList">
            <div class="list" :key="index" v-if="!!item.game_cate_id && item.game_cate_id != 6">
              <p class="item-header">
                <img :src="icons[item.game_cate_id]" :alt="item.game_cate_name">
                <span>{{ item.game_cate_name }}</span>
              </p>
              
              <van-row gutter="20">
                <van-col span="6" v-for="(item1,index1) in item.platform_list" :key="index1">
                  <p class="label">{{ item1.game_platform_name }}</p>
                  <p class="value">
                    ￥{{ walletMoney[item1.game_platform_code] ? walletMoney[item1.game_platform_code] : '0.00' }}
                  </p>
                </van-col>
              </van-row>
            </div>
          </template>
        </div>
      </div>
    </div>  
  </div>
  <div class="footer" v-if="isOpen == 1">
      <van-button 
        :loading="loading" 
        type="default" 
        @click="refreshBalance" 
        text="刷新全部" 
        loading-text="加载中..." 
      />
      <van-button 
        :loading="loading1" 
        type="danger" 
        @click="recovery" 
        plain  
        text="收回余额" 
        loading-text="加载中..." 
      />
    </div>
  <!-- 游戏平台列表 -->
    <van-popup v-model="gameShow" position="bottom">
      <van-picker :columns="columns" @confirm="onGameConfirm" @cancel="onGameCancel" value-key="game_platform_name" :show-toolbar='true' @change="onChange"/>
    </van-popup>
    <!-- 数字键盘 -->
    <van-number-keyboard
      safe-area-inset-bottom
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="showKeyboard = false"
    />
  </div>
  

</template>


<script>
  import Lheader from '@/components/l-header'
  import { allplatform, trans, gamecateplatform, wallet, backtransall } from '@/api/memberCenter'
  import { accountsafe } from '@/api/personalData'
  import path from 'path'

  // import icon1 from '@assets/img/transfer/1@2x.png'
  // import icon2 from '@assets/img/transfer/2@2x.png'
  // import icon3 from '@assets/img/transfer/3@2x.png'
  // import icon4 from '@assets/img/transfer/4@2x.png'
  // import icon5 from '@assets/img/transfer/5@2x.png'
  // import icon7 from '@assets/img/transfer/7@2x.png'
  // import icon8 from '@assets/img/transfer/8@2x.png'

  import Vue from 'vue'
  import { Toast } from 'vant';
  Vue.use(Toast);

  export default {
    name: "quotaTransfer",
    data() {
      return {
        icons: {
          // 1: icon1,
          // 2: icon2,
          // 3: icon3,
          // 4: icon4,
          // 5: icon5,
          // 7: icon7,
          // 8: icon8
        },
        title: '游戏平台余额',
        showKeyboard: false,
        gameStatus: {},
        gameColumns: [],
        isOpen: 2,
        isShow:1,
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
          to_platform_id:''
        },
        errText: '',
        walletList: [],
        walletMoney: {},
        password: 0,
        rotate: false,
        data : {
          access_token: window.localStorage.token
        },
        loading: false,
        loading1: false,
        baseUrl: process.env.BASE_URL,
        financing_money: '',
        all_platform_money: '',
        typeArr:['account','turn'],
        typeText:['主账户','选择平台'],
        cIdx:0
      }
    },
    methods: {
      onInput(key) {
        this.list.pay_password = (this.list.pay_password + key).slice(0, 6);
      },
      // 刷新全部
      refreshBalance() {
        this.walletM(1)
      },
      recovery() {
        this.loading1 = true
        backtransall(this.data).then(res=> {
          this.loading1 = false
          if (res.data.code === 0) {
            this.walletM(1)
          } else {
            Toast(res.data.msg)
          }
        },err => {
          this.loading1 = false
        })
      },
      onDelete() {
        this.list.pay_password = this.list.pay_password.slice(0, this.list.pay_password.length - 1);
      },
      onGameConfirm(value) {
        console.log(this.type,value)
        this.gameShow =false
        if(this.type === 'account') {
          if (value[0].game_platform_name === '主账户') {
            this.typeText[this.cIdx] = value[0].game_platform_name;
            this.list.from_platform_id = value[0].game_platform_id;
          } else {
            this.typeText[this.cIdx] = value[0].game_platform_name + ' / ' + value[1].game_platform_name;
            this.list.from_platform_id = value[1].game_platform_id;
          }
        } else {
          if (value[0].game_platform_name === '主账户') {
            this.typeText[this.cIdx]  = value[0].game_platform_name;
            this.list.to_platform_id = value[0].game_platform_id;
          } else {
            this.typeText[this.cIdx]  = value[0].game_platform_name + ' / ' + value[1].game_platform_name;
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
      gameSelect(type,i) {
        this.gameShow = true
        this.type = type;
        this.cIdx = i
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
        trans(this.list).then(res=> {
          Toast.clear();
          if (res.data.code === 0) {
            Toast('额度转账成功')
          } else {
            Toast(res.data.msg)
            this.errText = res.data.msg
          }
        },err => {
          this.errText ='转账失败'
        })
      },
      walletM(isBack) {
        // let time = ''
        // if (isBack != 1) {
        //   let rot=10-0;
        //   if (document.getElementById('loading')) {
        //     time = setInterval(()=> {
        //       rot+=1;
        //       document.getElementById('loading').style.transform= "rotatez("+rot+"deg)";
        //     }, 10)
        //   }
        // }

        // this.rotate = !this.rotate
        // if(isBack == 1) {
        //   this.loading = true
        // }
        wallet(this.data).then(res=> {

          // clearInterval(time)

          if (res.data.code === 0) {
            this.loading = false
            this.isOpen = res.data.data.is_auto_trans || '2';
            this.all_platform_money = res.data.data.all_platform_money;
            this.financing_money = res.data.data.financing_money;
            for (let attr in res.data.data) {
              let newAttr = attr.split('_')[0]
              // newAttr = newAttr.toUpperCase()
              this.$set(this.walletMoney, newAttr, res.data.data[attr])
            }
          }
        },err => {
          this.loading = false
        })
      },
      changeType() {
        const temp = this.typeArr
        const tempT = this.typeText
        const tempList = Object.assign({},this.list)
        this.typeText = [tempT[1],tempT[0]]
        this.typeArr = [temp[1],temp[0]]
        this.list.from_platform_id = tempList.to_platform_id
        this.list.to_platform_id = tempList.from_platform_id
      },
      update(val) {
        console.log(123132,val)
        this.isOpen =  val
      },
      setFundPassword (val) {
        const ls = window.localStorage;
        let route = {
          name: 'accountSecurity',
          query: {
            // type: 1 为设置资金密码； 2已设置资金密码
            type: val,
            getPath: 'withdraw'
          }
        };
        ls.setItem('verifyNextRoute', JSON.stringify(route))
        if(val == 1) {
          this.$router.push(route);
        } else {
          this.$router.push('verifyIdentity')
        }
        
      }
    },
    created() {
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
          this.walletList = data
          this.columns[0].values = data
          this.columns[1].values = data[0].platform_list
        }
      })

      this.walletM()

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
      isOpen(val){
        console.log(val)
        this.isOpen = val
      }
    },
    components: {
      Lheader
    },
  }
</script>

<style scoped lang="less">
.footer {
          width: 100%;
          background: #ffffff;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: fixed;
          bottom: 0;
          height: 2rem;
          padding: 0 @margin-15;
          button {
            width: 4.53333rem;
            height: 1.06666rem;
            margin-left: 0;
          }
      }
  .container {
    display: block;
    position: absolute;
    left: 0;
    top:0;
    padding-top: @main-top;
    right: 0;
    bottom: @main-top;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    // background-color: #ffffff;
    height:100%;
    .aagames-button-box{
      margin-bottom: 20px;
    }
    .pb2rem{
      padding-bottom: 2rem !important;
    }
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
      .balance-detail {
        padding: @margin-15;
        background-color: #fff;
        .button{
          justify-content: right;
        }
        .item {
          width: 100%;
          display: inline-flex;
          justify-content: space-between;
          align-items: center;
          margin: @margin-10 auto;
          >span {
            color: #222222;
            font-size: @font-size-16;
            font-weight: 600;
          }
          >span:last-child {
            font-size: .4533333rem;
            color: #BE8D24;
          }
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
        // 余额
        .gameBalance {
          padding-bottom: @margin-20;
          // margin-top: @margin-60;
          background-color: #fff;
          display: inline-block;
          width: 100%;
          .title {
            margin-top: @margin-20;
            padding: 0 @margin-15;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .label {
              font-size: @font-size-18;
              font-weight: @font-weight-600;
            }
          }
          .list {
            background-color: #ffffff;
            padding: 0 @margin-20;
            margin-bottom: @margin-20;
            .item-header {
              display: inline-flex;
              align-items: center;
              img {
                max-width: .53333rem;
                max-height: .53333rem;
              }
              span {
                color: @text-color-default;
                font-size: @font-size-14;
                margin-left: @margin-10;
              }
            }         
            .van-row {
              margin-top: @margin-10;
              padding: 0 @margin-10;
              .van-col{
                font-size: @font-size-13;
                position: relative;
                height: 1.33333rem;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-family: "DIN Alternate", "PingFang SC", "Hiragino Sans GB", "Helvetica Neue", "Microsoft Yahei", sans-serif, arial;
                &:nth-child(1n) {
                  &::after {
                    bottom: -.02222rem;
                    left: -.02222rem;
                  }
                }
                &::after {
                  .box-border();
                }
                .label {
                  color: #666666;
                }
                .value {
                  color: @primary-text-color;
                  margin-top: .08rem;
                  font-weight: 600;
                }
              }
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
      // line-height: initial;
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
