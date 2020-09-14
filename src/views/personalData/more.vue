<template>
  <div class="container aboutMore">
    <lheader :title="title"></lheader>
    <div class="main">
      <div class="reset">
        <div class="aagames-select-box" @click="linkTo('/callWe')">
          <div class="select">
            <span>联系我们</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="aagames-select-box" @click="linkTo('/aboutWe')">
          <div class="select">
            <span>关于我们</span>
            <van-icon name="arrow" />
          </div>
        </div>
        <div class="aagames-select-box">
          <div class="select">
            <span>永久域名</span>
            <span
              class="right-text"
              v-clipboard:copy="`https://${$config[$projectname].domain}`"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError"
              >{{$config[$projectname].domain}}</span>
          </div>
        </div>
        <!-- <div class="aagames-select-box" @click="linkTo('/callWe')">
          <div class="select">
            <span>当前版本</span>
            <span class="right-text">v3.0</span>
          </div>
        </div>-->
        <!-- <div class="aagames-select-box" @click="linkTo('/feedback')">
          <div class="select">
            <span>意见反馈</span>
            <van-icon name="arrow" />
          </div>
        </div>-->
        <!-- <div class="aagames-select-box" @click="linkTo('/commonProblem')">
          <div class="select">
            <span>常见问题</span>
            <van-icon name="arrow" />
          </div>
        </div>-->
      </div>
      <div class="login-out" v-if="isLogin" @click="signOut">
        <span>退出登录</span>
      </div>
    </div>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import { mapState } from "vuex";

export default {
  name: "more",
  data() {
    return {
      title: "更多"
    };
  },
  components: {
    Lheader
  },
  computed: {
    ...mapState("users", ["isLogin"])
  },
  methods: {
    linkTo(path) {
      console.log(path);
      this.$router.push({ path });
    },
    signOut() {
      this.$dialog
        .confirm({
          title:'温馨提示',
          message: "是否退出登录？"
        })
        .then(() => {
          // this.isLogin = false;
          this.$store.dispatch("users/logout").then(() => {});
          this.$router.push('/')
        })
        .catch(() => {
          // on cancel
        });
    },
    onCopy: function(e) {
      this.$toast("复制成功");
    },
    onError: function(e) {
      this.$toast.fail("复制失败，请重试");
    },
  }
};
</script>

<style scoped lang="less">
@import '~@assets/styles/personalData/index.less';
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  /deep/.aagames-nav-bar{
    background:transparent;
  }
  .main {
    margin-top: @main-margin-top;
    padding: 0;
    .login-out {
      margin: @margin-10;
      border-radius: 0.08rem;
      text-align: center;
      background: #353435;

      > span {
        display: inline-block;
        width: 100%;
        height: 1.22666rem;
        line-height: 1.22666rem;
        color: @text-color-default;
        background: @primary-color;
        border-radius: @border-radius-8px;
        font-size: @font-size-15;
      }
    }
    .aagames-select-box {
      padding: 0 30px;
      .select {
        overflow: hidden;
        padding: 0;
        box-sizing: border-box;
        color: #ffffff;
        position: relative;
        background-color: @bg-color;
        &:after {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          height: 2px;
          background: rgba(255, 255, 255, 1);
          opacity: 0.06;
        }
        .right-text {
          text-align: right;
          color: #b1b1b1;
        }
      }
    }
  }
}
</style>
