<style scoped lang="less">
  .vipOpen {
    padding-left: 0;
    padding-right: 0;
    box-sizing: border-box;
    .reset {
      .input {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 88px;
        width: 100%;
        background: #EDEFF6;
        border-radius: 8px;
        margin-top: 20px;

        img, .img {
          width: 50px;
          margin-left: 20px;
        }
      }

      p {
        height: 40px;
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
        min-width: 140px;
        color: #333333;
        padding-left: 20px;
      }

      input {
        flex: 1;
        background: none;
        padding-left: 30px;
        border: none;
        color: #333;
        height: 40px;
        font-size: 28px;
        font-weight: 400;
        line-height: 40px;
        text-align: right;
        padding-right: 20px;
      }

      input::placeholder {
        color: @text-color-placeholder;

      }

      span {
        color: #FFCF6E;
        font-size: 22px;
        margin-top: 30px;
        display: inline-block;
        margin-bottom: 20px;
      }

      button {
        padding: 28px;
        border: none;
        color: #F3CB75;
        font-size: 32px;
        border-radius: 2px;
        font-weight: 700;
      }
    }

    .submit {
      margin-top: 40px;
    }

  }
</style>
<template>
  <div class="vipopen-box">

    <van-popup
      @closed="closed"
      class="custom close-top"
      closeable
      round
      :get-container="getContainer"
      v-model="show" close-icon-position="top-right">
      <div class="pop-head">
        <h2>会员开户 </h2>
      </div>
      <div class="vipOpen">

        <div class="reseter">

          <div class="reset">
            <!--<p>会员账户</p>-->
            <div class="input">
              <!--<img class="img" v-if="aoMenUi.includes($projectname)" style="margin-right: 6px;" :src="require('../../../assets/loginIcon/user@2x.png')" alt/>-->
              <!--<img class="img" v-else style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/user@2x.png')" alt/>-->
              <p>会员账户</p>
              <input type="text" v-model="list.username" placeholder="请输入会员账户">
            </div>
          </div>

          <div class="reset">
            <!--<p>登录密码</p>-->
            <div class="input">
              <!--<img class="img" v-if="aoMenUi.includes($projectname)" style="margin-right: 6px;"-->
                   <!--:src="require('../../../assets/loginIcon/pass@2x.png')" alt/>-->
              <!--<img class="img" v-else style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/pass@2x.png')"-->
                   <!--alt/>-->
              <p>登录密码</p>
              <input type="password" v-model="list.password" placeholder="密码6-20位数字及字母组成">
            </div>
          </div>
          <div class="reset">
            <!--<p>确认密码</p>-->
            <div class="input">
              <!--<img class="img" v-if="aoMenUi.includes($projectname)" style="margin-right: 6px;"-->
                   <!--:src="require('../../../assets/loginIcon/pass@2x.png')" alt/>-->
              <!--<img class="img" v-else style="margin-right: 6px;" :src="require('@assets/img3_0/otherIcon/pass@2x.png')"-->
                   <!--alt/>-->
              <p>确认密码</p>
              <input type="password" v-model="list.repassword" placeholder="再次输入登陆密码">
            </div>
          </div>
        </div>
        <loading :isShow="isLoading" title="正在开户..."></loading>
        <div class="aagames-button-box">
          <button type="button" class="aagames-button submit" @click="submit">确定</button>
        </div>

      </div>
    </van-popup>
  </div>

</template>

<script>
  import Lheader from '@/components/l-header'
  import Loading from '@/components/loading'
  import {addmember} from '@/api/agent'
  import {agPassword, agPassword20} from '@/utils/index'

  export default {
    name: 'discountCore',
    components: {
      Lheader,
      Loading
    },
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        title: '会员开户',
        isLoading: false,
        list: {},
        aoMenUi: ['10009', '10010', '10011', '10012', '10021', '10034'],
        close:require('@assets/img3_0/agent/home/agentclose.png')
      }
    },
    watch: {
      value(newVal) {
        return this.show = newVal
      }
    },
    created() {
      try {
        let scrollY = document.getElementsByClassName('container')[0].offsetTop
        window.scrollTo(0, scrollY)
      } catch (error) {

      }
    },
    methods: {
      getContainer() {
        return document.querySelector('.daili-container');
      },
      closed() {
        this.$emit('input', false)
      },
      submit() {
        if (!this.list.username) {
          this.$toast.fail('请输入会员账户')
          return
        }
        if (!this.list.password) {
          this.$toast.fail('请输入登录密码')
          return
        }
        if (!this.list.repassword) {
          this.$toast.fail('请输入确认密码')
          return
        }
        if (this.list.username && !agPassword20(this.list.username)) {
          this.$toast.fail('账号由6-20位英文字母或数字组成')
          return
        }
        if (this.list.password && !agPassword20(this.list.password)) {
          this.$toast.fail('密码由6-20位数字+字母组成')
          return
        }
        if (this.list.password !== this.list.repassword) {
          this.$toast.fail('两次输入密码不一致')
          return
        }
        this.list.access_token = window.localStorage.agToken
        this.isLoading = true
        addmember(this.list).then(res => {
          if (res.data.code === 0) {
            const This = this
            this.$toast({
              message: '会员开户成功',
              onClose() {
                This.closed()
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


