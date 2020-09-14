<template>
  <div class="drawer">
    <div class="pop-head">
      <h2>绑定邮箱</h2>
    </div>
    <h4>为了保障您的账号安全，请输入正确邮箱号验证</h4>
    <div class="input-cells">
      <div class="aagames-form">
        <div class="input">
          <input type="text" v-model="email" placeholder="请输入邮箱地址" />
        </div>
      </div>
    </div>
    
    <div class="input-cells">
      <gcode class="send-code" :bind="true" :account="email" :updateType="true" @getCode="getCodeC" @myCode="myCodeC"></gcode>
    </div>
    <div class="input-cells">
			<div class="aagames-button-box">
				<button class="aagames-button aagames-button-default" type="button" @click="closeByButton">暂不绑定</button>
				<button class="aagames-button" type="button" @click="send">确定</button>
			</div>
		</div>
  </div>
</template>

<script>
import { setemail, bindemail } from "@/api/personalData";
import { ismail } from "@/utils";
import Vue from "vue";
import { Toast } from "vant";
import Gcode from "@/components/g-code";

Vue.use(Toast);
export default {
  name: "discountCore",
  props:['userInfo'],
  data() {
    return {
      email: this.userInfo.email,
      getCode: "",
      code: ""
    };
  },
  components: {
    Gcode
  },

  props: ['userInfo'],
  mounted() {},
  methods: {
    closeByButton() {
      this.$store.dispatch('global/setPopShow',{status:false})
    },

    getCodeC(val) {
      this.getCode = val;
    },
    myCodeC(val) {
      console.log(val);
      this.code = val;
    },
    send() {
      const that = this
      if (!ismail(this.email)) {
        Toast.fail("请输入正确的邮箱地址");
        return false;
      }
      bindemail({
        email: this.email,
        code: this.code,
        access_token: window.localStorage.token
      }).then(res => {
        if (res.data.code === 0) {
          const This = this;
          Toast({
            message: "绑定成功",
            onClose() {
              // This.$router.push("personalData");
              that.$store.dispatch('users/getUserInfo')
              // that.$emit('closeStatus',true)
              that.$store.dispatch('global/setPopShow',{status:false})
            }
          });
        } else {
          Toast.fail(res.data.msg);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.drawer {
  border-radius: 0.2rem;
  .input-cells{
    .aagames-button{
      width:320px;
    }
  }
  .email-info {
    padding: 0 0.2rem;
    text-align: center;
    height: 1.4rem;
    line-height: 1.4rem;
  }
  .email-message {
    padding: 0 0.2rem;
    text-align: center;
    height: 1.4rem;
    line-height: 1.4rem;
  }

  /* 遮罩 */
  .mask-show {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    opacity: 1;
  }

  .mask-hide {
    opacity: 0;
    transition: opacity 0.5s;
  }

  /* 滑块 */
  .main {
    position: fixed;
    z-index: 10;
    bottom: 0;
    background: @bg-color;
    transition: all 0.5s;
    border-radius: 0.4rem;
  }

  .main-show {
    opacity: 1;
  }

  .main-hide {
    opacity: 0;
  }

  /* 某个元素内部显示 */
  // .inner {
  // 	position: absolute;
  // }

  /* 其他样式 */
  .drawer-head {
    display: flex;
    height: 1.2rem;
    line-height: 1rem;
    font-size: 0.4rem;
    color: white;
    align-items: center;
    justify-content: center;
    border-bottom: 0.005rem solid #3f3f3f;
    .close-btn {
      position: absolute;
      left: 0.2rem;
      cursor: pointer;
      height: 0.6rem;
      width: 0.6rem;
      background-image: url(~@assets/img3_0/otherIcon/tanchuangguanbi.png);
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  .input {
    argin-bottom: 0.5rem;
    :nth-child(1) {
      width: 100%;
    }
    :nth-child(2) {
      width: 70%;
    }
  }

  .button-bar {
    margin: 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .button-save {
      background-color: @primary-color;
      color: #1e1e1e;
    }

    .button-cancel {
      background: #353435;
      color: #cccccc;
    }

    .button-cancel,
    .button-save {
      width: 4rem;
      height: 1.33333rem;
      border: none;
      border-radius: 0.10667rem;
      font-weight: 600;
      text-align: center;
      line-height: 1.33333rem;
      font-size: 0.42667rem;
    }
  }
  // .input-cells{
  //   .send-code{
  //     /deep/.right-button{
  //       top:50%;
  //     }
  //   }
  // }
}
</style>
