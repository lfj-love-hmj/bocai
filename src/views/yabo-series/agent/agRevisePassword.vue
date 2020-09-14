<template>
  <div class="container agpsw">
    <lheader :title="title"  :goback="true" :get-switch="false"></lheader>
    <div class="main">
      <div class="reseter">
        <div class="reset">
          <div>
            <p>原密码：</p>
            <input type="password" v-model="list.old_password" placeholder="请输入原始密码">
          </div>
        </div>
        <div class="reset">
          <div >
            <p>新密码：</p>
             <input type="password" v-model="list.password" placeholder="请设置新密码（6-12字母或数字）">
          </div>
        </div>
        <div class="reset">
          <div>
            <p>确认新密码：</p>
            <input type="password" v-model="list.repassword" placeholder="再次输入密码">
          </div>
        </div>
      </div>
      <div class="aagames-button-box agRevisePW-10018">
        <button type="button" class="aagames-button" :disabled="!(list.old_password  && list.password && list.repassword)" @click="submit">修改</button>
      </div>
    </div>
    <loading :isShow="isLoading" title="提交中..."></loading>
  </div>
</template>

<script>
import Lheader from "@/components/l-header";
import Loading from '@/components/loading';
import { setpass } from "@/api/agent";
import { agPassword } from "@/utils/index";

export default {
  name: "discountCore",
  components: {
    Loading,
    Lheader
  },
  data() {
    return {
      title: "修改密码",
      isLoading: false,
      list: {}
    };
  },
  created() {
    try {
      let scrollY = document.getElementsByClassName('container')[0].offsetTop;
      window.scrollTo(0, scrollY);
    } catch (error) {

    }
  },
  methods: {
    submit() {
      if (!this.list.old_password) {
        this.$toast.fail("请输入原登录密码");
        return false;
      }
      if (!this.list.password) {
        this.$toast.fail("请输入新密码");
        return false;
      }
      if (!this.list.repassword) {
        this.$toast("请再次输入密码");
        return false;
      }
      if (!agPassword(this.list.password)) {
        this.$toast("密码由8-12位英文字母或数字组成");
        return false;
      }
      if (this.list.password !== this.list.repassword) {
        this.$toast("两次输入密码不一致");
        return false;
      }
      this.isLoading = true;
      this.list.access_token = window.localStorage.agToken;
      setpass(this.list).then(res => {
        if (res.data.code === 0) {
          const This = this;
          this.$toast({
            message: "修改成功",
            onClose() {
              window.localStorage.removeItem('agToken');
              window.localStorage.removeItem('userInfoForAgent');
              This.$router.push("agentLogin");
            }
          });
        } else {
          this.$toast(res.data.msg);
        }
      }).finally(()=>{
        this.isLoading = false;
      });
    }
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: @bg-color;
  .main {
    margin-top: @main-top;
    padding-top: 20px;
    padding-left: 0;
    padding-right: 0;
    box-sizing: border-box;
    .reset {
      display: flex;
      padding: 0 32px;
      box-sizing: border-box;
      align-items: center;
      >div{
        width: 100%;
        display: block;
        align-items: center;
        border-bottom: 1px solid @border-color;
      }
      p {
        margin: 40px auto 0;
        height:40px;
        font-size:28px;
        font-weight:400;
        color:@text-color-light;
        line-height:40px;
      }
      input {
        background:none;
        width: 100%;
        padding: 0;
        border: none;
        font-size: 28px;
        height: 98px;
        font-weight:400;
        // color: #fff;
      }
      input::placeholder{
        color:#bbb;
      }

      span {
        color: #ffcf6e;
        font-size: 22px;
        margin-top: 30px;
        display: inline-block;
        margin-bottom: 20px;
      }
    }
    .reset:first-child {
      margin-bottom: 20px;
    }
    .aagames-button-box {
      margin-top: 78px;
      padding: 0 28px !important;
      box-sizing: border-box;
      .aagames-button:disabled{
        color: @text-color-light;
        background-color: #353435;
      }
    }
  }
}
</style>
