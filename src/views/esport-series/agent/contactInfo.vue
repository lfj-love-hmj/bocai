<style scoped lang="less">
  /*@import "./index";*/

  .container {
    display: flex;
    flex-direction: column;
    background-color: bg-color;

    .main {
      flex: 1;
      margin-top: @main-top;
      padding-top: 20px;
      padding-left: 0;
      padding-right: 0;
      display: flex;
      flex-direction: column;

      .submit-form {
        flex: 1;

        .input {
          &:nth-child(2) {
            img {
              width: 40px;
              margin-left: 8px;
            }
          }

          input {
            text-align: right;
          }

          p {
            font-weight: bold;
          }
        }
      }
    }
  }

  .contactinfo {
    .input {
      background: #fff;
      height: 100px;
      margin: 0;
      padding-left: 30px;

      display: flex;
      box-sizing: border-box;
      align-items: center;
      position: relative;
      &:after {
        content: "";
        position: absolute;
        left: 30px;
        right: 0;
        bottom: 0;
        background-color: #E6EAEF;
        height: 2px;
      }
      &:first-child{
        margin-bottom: 20px;
        &:after{
          content: none;
        }
      }
      img, .img {
        width: 44px;
        display: inline-block;
        vertical-align: middle;
      }
      .title{
        color: #333;
        font-size: 28px;
      }
      input{
        background: none;
        color: #333;
        font-size: 28px;

        flex: 1;
        padding: 0 20px;
        border: none;
        line-height: normal;
        height: 90px;
        &::placeholder{
          color: #999;
        }
      }
      img{
        margin-right: 20px;
      }
    }
    .aagames-button-box{
      position: fixed;
      bottom: 60px;
      left: 0;
      width: 100%;
    }
    .aagames-button-box .aagames-button{
      border-radius: 90px;
    }
  }
</style>
<template>
  <div class="container contactinfo">
    <lheader :title="title" :goback="true" :get-switch="false"></lheader>
    <div class="main ">
      <div class="submit-form">
        <div class="input">
          <!--<img v-if="$projectname == '10020' || $projectname == '10021'" class="img" style="margin-right: 6px;"-->
               <!--:src="require('@/assets/common/img/otherIcon/c-user@2x.png')" alt/>-->
          <!--<img v-else class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/user@2x.png')"-->
               <!--alt/>-->
          <img :src="$imgs['agent/agent_icon10']" class="img" alt="">
          <p class="title">真实姓名</p>
          <input type="text" v-model="agent.realname" placeholder="与银行卡姓名一致,否则无法提款">
        </div>
        <div class="input">
          <!--<img v-if="$projectname == '10020'|| $projectname == '10021'" class="img" style="margin-right: 6px;"-->
               <!--:src="require('@/assets/common/img/otherIcon/c-shouji@2x.png')" alt/>-->
          <!--<img v-else class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/shouji@2x.png')"-->
               <!--alt/>-->
          <img :src="$imgs['agent/agent_icon11']" class="img" alt="">
          <p class="title">手机号</p>
          <input type="text" v-model="agent.mobile" placeholder="立即绑定">
        </div>
        <div class="input">
          <!--<img v-if="$projectname == '10020'|| $projectname == '10021'" class="img" style="margin-right: 6px;"-->
               <!--:src="require('@/assets/common/img/otherIcon/c-wechat@2x.png')" alt/>-->
          <!--<img v-else class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/wechat@2x.png')"-->
               <!--alt/>-->
          <img :src="$imgs['agent/agent_icon12']" class="img" alt="">
          <p class="title">微信号</p>
          <input type="text" v-model="agent.wechat" placeholder="请填写微信">
        </div>
        <!-- <div class="input">
            <img class="img" style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/skype@2x.png')" alt/>

            <p class="title">Skype</p>
            <input type="text" v-model="agent.skype" placeholder="请填写Skype">
        </div> -->
      </div>
      <div class="aagames-button-box">
        <button class="aagames-button sign-in btnStyle10018" @click="send" type="button">确认提交</button>
      </div>
    </div>
    <loading :isShow="isLoading" :title="loadingText"></loading>
  </div>
</template>

<script>
  import Lheader from '@/components/l-header'
  import Loading from '@/components/loading'
  import {updatedetail, userinfo} from '@/api/agent'
  import {ismail, isnum, qqAcount} from '@/utils/index'

  export default {
    name: 'discountCore',
    components: {
      Loading,
      Lheader
    },
    data() {
      return {
        title: '联系方式',
        isLoading: false,
        loadingText: '加载中...',
        agent: {
          realname: '',
          phone_area_code: 86
        }
      }
    },
    created() {
      try {
        let scrollY = document.getElementsByClassName('container')[0].offsetTop
        window.scrollTo(0, scrollY)
      } catch (error) {

      }
      this.isLoading = true
      this.loadingText = '加载中...'
      userinfo({
        access_token: window.localStorage.agToken
      }).then(res => {
        if (res.data.code === 0) {
          this.agent.realname = res.data.data.realname
          this.agent.mobile = res.data.data.mobile
          this.agent.wechat = res.data.data.wechat
          this.agent.qq = res.data.data.qq
          this.agent.email = res.data.data.email
          this.agent.skype = res.data.data.skype
        }
      }).finally(() => {
        this.isLoading = false
      })
    },
    methods: {
      send() {
        if (!this.agent.realname) {
          this.$toast.fail('请输入真实姓名')
          return false
        }
        if (!this.agent.mobile) {
          this.$toast.fail('请输入电话号码')
          return false
        }
        if (!this.agent.wechat) {
          this.$toast.fail('请输入微信号')
          return false
        }
        // if (!this.agent.qq) {
        //   this.$toast('请输入QQ号')
        //   return false
        // }
        if (!this.agent.skype) {
          this.$toast.fail('请输入skype号')
          return false
        }
        // if (!this.agent.email) {
        //   this.$toast('请输入电子邮箱')
        //   return false
        // }
        if (this.agent.mobile && (!isnum(this.agent.mobile))) {
          this.$toast.fail('手机号码格式有误')
          return false
        }
        // if (this.agent.qq && (!qqAcount(this.agent.qq))) {
        //   this.$toast('qq格式有误')
        //   return false
        // }
        // if (this.agent.email && (!ismail(this.agent.email))) {
        //   this.$toast('邮箱格式有误')
        //   return false
        // }
        let This = this
        this.agent.access_token = window.localStorage.agToken
        this.isLoading = true
        this.loadingText = '提交中...'
        updatedetail(this.agent).then(res => {
          if (res.data.code === 0) {
            this.$toast({
              message: '提交成功',
              onClose() {
                This.$router.push('agent')
              }
            })
          } else {
            this.$toast(res.data.msg)
          }
        }).finally(() => {
          this.isLoading = false
        })
      }
    }
  }
</script>

