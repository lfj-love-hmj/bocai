<template>
  <div class="container">
    <div class="main">
      <div class="pop-head">
        <h2>{{userInfo.is_pay_password != 1 && !validateOld?'验证旧资金密码':'设置资金密码'}}</h2>
      </div>
      <template v-if="userInfo.is_pay_password != 1 && !validateOld">
        <div class="aagames-input-password">
          <div class="input">
            <p>请输入旧资金密码：</p>
            <!-- <input 
                type="text" 
                v-model="setPassData.old_password" 
                placeholder="请输入旧资金密码"
                @focus="showKeyboard = true;type=0"
            />-->
            <van-password-input
              :value="setPassData.old_password"
              @focus="changeKeyboard(0,$event)"
              :focused="showKeyboard"
              :length="6"
              gutter="11"
            />
          </div>
        </div>
      </template>
      <template v-else>
        <div class="aagames-input-password">
          <div class="input">
            <p>请输入新资金密码：</p>
            <van-password-input 
              :value="setPassData.password" 
              @focus="changeKeyboard(1)" 
              :focused="showKeyboard1"
              :length="6"
              gutter="11"
            />
          </div>
        </div>
        <div class="aagames-input-password">
          <div class="input">
            <p>确认新资金密码：</p>
            <van-password-input 
              :value="setPassData.repassword" 
              @focus="changeKeyboard(2)" 
              :focused="showKeyboard2"
              :length="6"
              gutter="11"
            />
          </div>
        </div>
      </template>
      
      <!-- <div class="aagames-input-password">
        <div class="btn aagames-button-box">
          <button class="aagames-button" type="button" @click="submit">确认提交</button>
        </div>
      </div> -->
      
      
    </div>
    <!-- <div class="aagames-warn">
        <div class="text">
          温馨提示：资金密码用于额度转账以及取款使用
        </div>
    </div>-->
    <!-- 数字键盘 -->
    <van-number-keyboard
      safe-area-inset-bottom
      :show="showKeyboard"
      @input="onInput"
      @delete="onDelete"
      @blur="blurKeyboard"
      @hide="hideKeyboard"
    />
  </div>
</template>

<script>

  import { setpaypass, checkpayoldpass } from "@/api/memberCenter";
import { Toast } from 'vant';

export default {
  name: "quotaTransfer",
  props:['userInfo'],
  data() {
    return {
      title: "设置资金密码",
      value: "1213",
      showKeyboard: false,
      showKeyboard1: false,
      showKeyboard2: false,
      type: 0,
      // type: 1 为设置资金密码； 2已设置资金密码
      // userInfo.is_pay_password: 0,
      setPassData: {
        password: "",
        repassword: "",
        old_password: ""
      },
      validateOld:false
    };
  },
  created() {
    // this.userInfo.is_pay_password = this.$route.query.type;
    console.log(this.userInfo.is_pay_password, this.validateOld)
  },
  methods: {
    onInput(key) {
      if (this.type === 0) {
        this.setPassData.old_password = (
          this.setPassData.old_password + key
        ).slice(0, 6);
      } else if (this.type === 1) {
        this.setPassData.password = (this.setPassData.password + key).slice(
          0,
          6
        );
      } else {
        this.setPassData.repassword = (this.setPassData.repassword + key).slice(
          0,
          6
        );
      }
    },
    onDelete() {
      if (this.type === 0) {
        this.setPassData.old_password = this.setPassData.old_password.slice(
          0,
          this.setPassData.old_password.length - 1
        );
      } else if (this.type === 1) {
        this.setPassData.password = this.setPassData.password.slice(
          0,
          this.setPassData.password.length - 1
        );
      } else {
        this.setPassData.repassword = this.setPassData.repassword.slice(
          0,
          this.setPassData.repassword.length - 1
        );
      }
    },
    changeKeyboard(val,e) {
      console.log(e)
      this.showKeyboard = true
      this.type = val
      this.$emit('changPass',true)
      if(val == 1) {
        this.showKeyboard1 = true
        this.showKeyboard2 = false
      } else {
        this.showKeyboard2 = true
        this.showKeyboard1 = false
      }
    },
    blurKeyboard() {
      this.showKeyboard = false
      this.$emit('changPass',false)
    },
    hideKeyboard() {
      console.log('test',this.userInfo.is_pay_password,this.validateOld,this.userInfo.is_pay_password != 1 && !this.validateOld)
      if(this.type == 0) {
        this.handlePaypassword()
      }
      if((this.setPassData.password || this.setPassData.repassword || this.setPassData.old_password)&& this.type !== 0) {
        this.submit()
      }
      // console.log(123123)
      this.$store.dispatch("global/setPopShow", { status: true, passDisplay: true });
    },
    submit() {
      if (
        this.setPassData.password.length < 6 ||
        this.setPassData.repassword.length < 6 ||
        (this.setPassData.old_password.length < 6 &&
          this.setPassData.old_password)
      ) {
        this.$toast.fail("资金密码由6个数字组成");
        return false;
      }
      if (this.setPassData.password !== this.setPassData.repassword) {
        this.$toast.fail("您两次输入资金密码不同");
        return false;
      }
      this.setPassData.access_token = window.localStorage.token;
      if (this.userInfo.is_pay_password == 1) {
        this.setPassData.is_reset = 1;
      }

      setpaypass(this.setPassData).then(res => {
        const that = this;
        if (res.data.code === 0) {
          // this.userInfo.is_pay_password = 0;
          this.$toast({
            message: "您的资金密码设置成功",
            onClose() {
              if (that.$route.query.getPath) {
                that.$router.push(that.$route.query.getPath);
              } else {
                that.$store.dispatch('users/getUserInfo')
                // that.$emit('closeStatus',true)
                that.$store.dispatch('global/setPopShow',{status:false})
              }
            }
          });
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    },
    handlePaypassword() {
      console.log(123123)
      if(this.setPassData.old_password.length < 6) {
        this.$toast.fail("资金密码由6个数字组成");
        return false;
      }
      if(this.setPassData.old_password.length == 6) {
        const {old_password} = this.setPassData
        checkpayoldpass({old_password}).then(res => {
          if(res.data.code == 0) {
            this.$toast('您的旧资金密码验证成功');
            setTimeout(() => {
              this.validateOld = true
              this.showKeyboard1 = true
              this.showKeyboard2 = false
            },1000);
          }
        })
      }  
    }
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  // background-color: #090705;
  // .el-main {
  //   padding: 0;
  //   margin-top: @main-margin-top;
    .main {
      // overflow: hidden;
      // .btn {
      //   margin-top: @margin-60;
      // }
      /* 密码输入 */
      .aagames-input-password {
        display: inline-flex;
        align-items: center;
        width: 100%;
        p {
          font-size: 28px;
          color: #fff;
          line-height: 80px;
        }
        .aagames-button-box{
          padding:0 !important;
        }
        button{
          width:100%;
        }
        .van-password-input {
          margin: 0;
          flex: 4;
          .van-password-input__security {
            height: 100%;
            justify-content: space-between;
          }
          .van-password-input__security li {
            position: relative;
            // &::before {
            //   content: "";
            //   position: absolute;
            //   border: 1px solid #e6e6e6;
            //   top: 0;
            //   right: 0;
            //   bottom: 0;
            //   left: 0;
            // }
          }
        }
        .forgetPass {
          flex: 2;
          color: @primary-text-color;
          font-size: @font-size-13;
          text-align: center;
        }
      }
    }
  // }
}
</style>
