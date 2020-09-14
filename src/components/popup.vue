<template>
  <div class="drawer">
    <div :class="maskClass" @click="closeByMask"></div>
    <div :class="mainClass" :style="mainStyle" class="main">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from "vant";
Vue.use(Toast);
export default {
  data() {
    return {};
  },
  components: {},

  props: {
    // 是否打开
    display: {
      type: Boolean
    },

    // 标题
    title: {
      type: String,
      default: "标题"
    },

    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    },

    // 是否显示遮罩
    mask: {
      type: Boolean,
      default: true
    },

    // 是否点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: true
    },

    // 宽度
    width: {
      type: String,
      default: "400px"
    },

    // 是否在父级元素中打开
    inner: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    maskClass: function() {
      return {
        "mask-show": this.display,
        "mask-hide": !this.display,
        inner: this.inner
      };
    },
    mainClass: function() {
      return {
        "main-show": this.display,
        "main-hide": !this.display,
        inner: this.inner
      };
    },
    mainStyle: function() {
      return {
        width: this.width,
        bottom: this.display ? "0" : `-${this.width}`
      };
    }
  },
  mounted() {
    if (this.inner) {
      let box = this.$el.parentNode;
      box.style.position = "relative";
    }
  },
  methods: {
    closeByMask() {
      this.maskClosable && this.$emit("update:display", false);
    },
    closeByButton() {
      this.$emit("update:display", false);
    },

    getCodeC(val) {
      this.getCode = val;
    },
    myCodeC(val) {
      console.log(val);
      this.code = val;
    },
    send() {
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
              This.$router.push("personalData");
            }
          });
        } else {
          Toast(res.data.msg);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.drawer {
  border-radius: 0.2rem;
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
    left: 0;
    bottom: 0;
    background: @bg-card-color;
    transition: all 0.5s;
    border-radius: 0.4rem 0.4rem 0 0;
    padding-bottom: 88px;
    display: flex;
    max-height: 80%;
    flex-direction: column;
    .list{
      flex:1;
      overflow-y: scroll;
      -webkit-overflow-scrolling: touch;
    }
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
    margin-bottom: 0.5rem;

    :nth-child(1) {
      width: 100%;
    }
    :nth-child(2) {
      width: 70%;
    }
  }

  .button-bar {
    margin: 0.5rem 0.2rem;
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
      width: 4.5rem;
      height: 1.33333rem;
      border: none;
      border-radius: 0.10667rem;
      font-weight: 600;
      text-align: center;
      line-height: 1.33333rem;
      font-size: 0.42667rem;
    }
  }
}
</style>
