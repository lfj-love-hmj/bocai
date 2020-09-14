<template>
  <div class="container">
    <div class="pop-head">
      <h2>设置登录密码</h2>
    </div>
    <div class="input-cells">
      <div class="aagames-form" v-if="userInfo.is_first_set_pass !== 1">
        <div class="input">
          <span>旧密码：</span>
          <input type="password" v-model="list.old_password" placeholder="请输入旧登录密码" />
        </div>
      </div>
    </div>

    <div class="input-cells">
      <div class="aagames-form">
        <div class="input">
          <span>新密码：</span>
          <input type="password" v-model="list.password" placeholder="请输入6~20位字符" />
        </div>
      </div>
    </div>

    <div class="input-cells">
      <div class="aagames-form">
        <div class="input">
          <span>确定密码:</span>
          <input type="password" v-model="list.repassword" placeholder="请再次输入密码" />
        </div>
      </div>
    </div>
    <div class="input-cells">
      <div class="aagames-button-box">
        <button class="aagames-button" type="button" @click="submit">确认提交</button>
      </div>
    </div>
  </div>
</template>

<script>
import { setpass } from "@/api/personalData";
import { agPassword } from "@/utils/index";

export default {
  name: "discountCore",
  props:['userInfo'],
  data() {
    return {
      title: "设置登录密码",
      list: {
        password:'',
        repassword:''
      },
      // userInfo.is_first_set_pass: false
    };
  },
  methods: {
    submit() {
      if (!this.userInfo.is_first_set_pass && !this.list.old_password) {
        this.$toast.fail("请输入您的原登录密码");
        return false;
      }
      if (!agPassword(this.list.password)) {
        this.$toast.fail("登录密码由6-12位英文字母或数字组成");
        return false;
      }
      if (this.list.password !== this.list.repassword) {
        this.$toast.fail("您两次输入的登录密码不一致");
        return false;
      }
      this.list.access_token = window.localStorage.token;
      setpass(this.list).then(res => {
        if (res.data.code === 0) {
          const that = this;
          this.$toast({
            message: "登录密码修改成功",
            onClose() {
              that.$store.dispatch('users/getUserInfo')
              // that.$emit('closeStatus',true)
              that.$store.dispatch('global/setPopShow',{status:false})
            }
          });
        } else {
          this.$toast.fail(res.data.msg);
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.container {
  display: flex;
  flex-direction: column;
  .pop-head{
    margin-bottom: 30px;
  }
  .aagames-form{
    .input{
      padding:0 30px;
      >span{
        padding-right:10px;
        font-size: 24px !important;
        font-weight: 400 !important;
      }
    }
  }
  .aagames-button-box {
    // margin-top: @margin-40;
    button{
      width:100%;
    }
  }
}
</style>
